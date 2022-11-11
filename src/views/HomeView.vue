<template>
  <div class="home">
    <img @click="home" alt="codeNamesLogo" src="../assets/logo.png" />
    <SignInComponent
      @changeComponent="changeComponent"
      v-if="activeComponent == 0"
    />
    <SignUpComponent
      @changeComponent="changeComponent"
      v-if="activeComponent == 1"
    ></SignUpComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import SignInComponent from "@/components/loginComponent/SignInComponent.vue";
import SignUpComponent from "@/components/loginComponent/SignUpComponent.vue";
import router from "@/router";

export default {
  name: "HomeView",
  components: {
    SignInComponent,
    SignUpComponent,
  },
  data() {
    return {
      activeComponent: 0,
    };
  },
  methods: {
    home: function () {
      router.push("/");
    },
    changeComponent: function () {
      console.log("ciiyci");
      if (this.activeComponent == 0) {
        this.activeComponent = 1;
      } else {
        this.activeComponent = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 20%;
  width: 200px;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
}
</style>
