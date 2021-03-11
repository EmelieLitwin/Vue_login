<template>
  <div id="register" class="main-container">
    <div class="container">
      <form @submit.prevent="registerUser">
        <h2>Register</h2>
        <label for="username">Username:</label>
        <input
          type="username"
          id="username"
          minlength="2"
          class="form-control mb-3"
          placeholder="Choose a username"
          v-model="register.username"
          required
        />
        <label for="password">Password:</label>
        <VuePassword
          id="password"
          placeholder="Choose a password"
          minlength="2"
          required
          v-model="register.password"
          disableStrength
        />
        <label id="passwordLabel" for="passwordConfirm">Repeat password:</label>
        <VuePassword
          id="passwordConfirm"
          placeholder="Repeat password"
          required
          v-model="register.passwordConfirm"
          disableStrength
        />
        <input type="submit" class="button" value="Register" />
        <div class="link">
          Already have an account? <router-link to="/">Sign in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      register: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
      if (this.register.password === this.register.passwordConfirm) {
        try {
          let response = await this.$http.post("/user/register", this.register);
          let token = response.data.token;
          if (token) {
            localStorage.setItem("jwt", token);
            this.$router.push("/");
          }
        } catch (err) {
          let error = err.response;
          if (error.status == 409) {
            swal("Error", error.data.message, "error");
          } else {
            swal("Error", error.data.err.message, "error");
          }
        }
      } else {
        swal("Error", "Passwords does not match", "error");
      }
    },
  },
};
</script>
