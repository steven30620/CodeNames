<template>
  <div class="home">
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

export default {
  name: "SignInView",
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
    changeComponent: function () {
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
.home {
  padding-top: 25px;
}
</style>
