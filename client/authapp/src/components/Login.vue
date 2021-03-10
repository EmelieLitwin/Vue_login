<template>
  <div id="login" class="main-container ">
    <div class="container">
      <form @submit.prevent="loginUser">
        <h2>Log in</h2>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          class="form-control mb-3"
          placeholder="Write username here..."
          v-model="login.username"
          required
        />

        <!-- <label for="password">Password:</label>
        <input
          type="password"
          class="form-control mb-3"
          placeholder="Write password here..."
          v-model="login.password"
          required
        /> -->

        <label for="password">Password:</label>
        <VuePassword
          id="password"
          placeholder="Write password here..."
          required
          v-model="login.password"
          disableStrength
        />

        <input type="submit" class="button" value="Log In" />
        <div class="link">
          No account? <router-link to="/register">Register</router-link>
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
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          this.$router.push("/home");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
      }
    },
  },
};
</script>
