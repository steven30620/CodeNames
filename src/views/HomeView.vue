<template>
  <div class="game">
    <div class="container h-10 py-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-4 text-center">
              <div class="mb-md-0 mt-md-0 pb-2">
                <h2 class="fw-bold mb-4 text-uppercase">
                  Que souhaitez-vous faire ?
                </h2>

                <button
                  class="btn mb-4 btn-outline-light btn-lg px-5"
                  type="submit"
                  @click="goToGameConfig"
                >
                  Crée un salon
                </button>
                <button
                  class="btn btn-outline-light btn-lg px-5 mb-4"
                  type="submit"
                >
                  Rejoindre un salon
                </button>
                <button class="btn btn-outline-light btn-lg px-5" type="submit">
                  Modifier mon profil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "GameConfig",
  props: {},
  methods: {
    goToGameConfig: function () {
      router.push("/gameConfig");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
