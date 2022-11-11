<template>
  <div class="banner">
    <img class="banner-img" src="./assets/banniere.jpg" />
    <img
      class="banner-homeButton"
      @click="goToSignin"
      alt="codeNamesLogo"
      src="./assets/logo.png"
    />
  </div>
  <router-view />
</template>

<script>
import router from "./router";

export default {
  name: "SignInView",
  components: {},
  data() {
    return {};
  },
  methods: {
    goToSignin: function () {
      router.push("/");
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "CodeNames";
  src: local("CodeNames"), url(./assets/font/CodeNames.ttf) format("truetype");
}
html {
  background-color: #f7832e;
}

#app {
  font-family: CodeNames, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
  background-color: #f7832e;
}

.banner {
  height: 250px;
  &-img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
  &-homeButton {
    border-radius: 20%;
    width: 200px;
    object-fit: contain;
    position: relative;
    top: -130px;
    z-index: 0;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
