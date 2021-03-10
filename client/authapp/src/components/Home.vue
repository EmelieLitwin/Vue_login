<template>
  <div class="bg-light">
    <b-navbar type="light" variant="info">
      <b-navbar-brand>Emelie Litwin</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-text class="mr-3">
          <b-icon icon="person-fill"></b-icon> {{ user.username }}</b-nav-text
        >
        <b-nav-item @click="logOutUser" href="">
          <b-icon icon="box-arrow-left"></b-icon> Logout
        </b-nav-item>
      </b-navbar-nav>
      <div></div>
    </b-navbar>
    <div class="welcome-container">
      <h1 class="welcome-user">Welcome {{ user.username }} :))))</h1>
      <img
        src="https://media1.tenor.com/images/d8d82e39e0e712167f31e8603157b240/tenor.gif?itemid=15585300"
        width="40%"
        class="img-fluid"
      />
    </div>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {
      },
    };
  },
  methods: {
    getUser() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  created() {
    this.getUser();
  },
};
</script>
