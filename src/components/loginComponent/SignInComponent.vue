<template>
  <div class="signIn">
    <section class="vh-100 gradient-custom">
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <div class="mb-md-2 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Connection</h2>
                  <p class="text-white-50 mb-5">
                    Entrez votre mail et votre Email !
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      placeholder="James@bond.OSS"
                    />
                    <label class="form-label" for="typeEmailX">Email</label>
                  </div>

                  <div class="form-outline form-white">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                      placeholder="117007"
                    />
                    <label class="form-label" for="typePasswordX"
                      >Password</label
                    >
                  </div>

                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">Mot de passe oublié ?</a>
                  </p>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    @click="goToGameConfig"
                  >
                    Connection
                  </button>
                </div>

                <div>
                  <p class="mb-0">
                    Vous n'avez pas de compte ?

                    <a @click="goToSignUp" class="text-white-50 fw-bold"
                      >Inscription</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SignInComponent",
  props: {},
  methods: {
    goToSignUp: function () {
      this.$emit("changeComponent", 1);
    },
    goToGameConfig: function () {
      window.scrollTo(0, 0);
      router.push("/home");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  &:hover {
    cursor: pointer;
  }
}
</style>
