<template>
  <div class="config">
    <div class="row py-2 d-flex justify-content-center align-items-center">
      <div class="col-11 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-4 text-center">
            <div class="mb-md-0 mt-md-0 pb-2">
              <h2 class="fw-bold mb-4 text-uppercase">
                Création d'une nouvelle partie
              </h2>
              <div class="form-outline form-white mb-4">
                <input
                  type="string"
                  id="password-confirm"
                  class="form-control form-control-lg"
                  placeholder="Ethan Hunt"
                />
                <label class="form-label" for="typePasswordX"
                  >Nom de votre salon
                </label>
              </div>
              <div class="form-outline form-white mb-4">
                <input
                  type="password"
                  id="password-confirm"
                  class="form-control form-control-lg"
                  placeholder="CryptoMan02"
                />
                <label class="form-label" for="typePasswordX"
                  >Mot de passe du salon</label
                >
              </div>
              <button
                @click="goToGame"
                class="btn col-10 btn-create btn-outline-light btn-lg px-5"
                type="submit"
              >
                Créer le salon d'espions !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  methods: {
    goToGame: function () {
      router.push("/Salon");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &-create {
  }
}
</style>
