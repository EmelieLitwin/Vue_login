const express = require("express");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const database = "vue-login"
const app = express();
const path = require("path")


app.use(express.static(path.join(__dirname, 'public')));

mongoose
  .connect("mongodb://localhost:27017/" +database, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database "${database}" is connected`);
  })
  .catch(err => {
    console.log(err.reason);

  });
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require("./api/user/router"); 
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

