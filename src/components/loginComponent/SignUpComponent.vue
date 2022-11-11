<template>
  <div class="hello">
    <section class="vh-100 gradient-custom">
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <div class="mb-md-2 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Inscription</h2>
                  <p class="text-white-50 mb-5">On fait connaissance ?</p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX">Pseudo</label>
                  </div>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX">Email</label>
                  </div>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX"
                      >Mot de passe</label
                    >
                  </div>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typePasswordX"
                      >Confirmez le mot de passe</label
                    >
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    S'inscrire !
                  </button>
                </div>

                <div>
                  <p class="mb-0">
                    Vous avez un compte ?

                    <a @click="goToSignIn" class="text-white-50 fw-bold"
                      >Connection</a
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
export default {
  name: "SignUpComponent",
  props: {},
  methods: {
    goToSignIn: function () {
      this.$emit("changeComponent", 0);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  &:hover {
    cursor: pointer;
  }
}
</style>
