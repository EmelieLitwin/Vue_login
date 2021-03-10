const User = require("./userSchema");

exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ username: req.body.username });
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    let data = await user.save();
    const token = await user.generateTokenRegister(); 
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findByCredentials(username, password);
    const token = await user.generateTokenLogin();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
exports.getUser = async (req, res) => {
  await res.json(req.userData);
};
