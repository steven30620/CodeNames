<template>
  <div class="game">
    <div class="container h-10 py-2">
      <div
        class="card col-12 col-md-8 col-lg-6 col-xl-5 bg-dark text-white"
        style="border-radius: 1rem"
      >
        <div class="card-title">Liste d'espions connecté(e)s</div>
        <div class="player-connected col-12">
          <div class="user-pseudo col-5">Espion SteVen</div>
          <div class="user-pseudo col-5">Espion stapha</div>
          <div class="user-pseudo col-5">Espion aluxis</div>
          <div class="user-pseudo col-5">Espion jaki</div>
          <div class="user-pseudo col-5">Espion anglus</div>
          <div class="user-pseudo col-5">Espion valinos</div>
          <div class="user-pseudo col-5">Espion thelos</div>
        </div>
        <div class="player-number">5 sur 8 joueurs connecté(e)s</div>
      </div>
    </div>
    <div class="adminArea">
      <button
        @click="goToGame"
        class="btn btn-start btn-outline-light bg-dark btn-lg px-5"
        type="submit"
      >
        Commencer la partie !
      </button>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "SalonComponent",
  methods: {
    goToGame: function () {
      router.push("/game");
    },
  },
};
</script>

<style lang="scss" scoped>
.game {
  padding-bottom: 100px;
}

.container {
  display: flex;
  justify-content: center;
}

.card {
  min-height: 100px;

  padding-bottom: 50px;
  &-title {
    position: relative;
    font-size: 25px;
    top: 10px;
    border-bottom: 2px solid gray;
  }
}

.user-pseudo {
  font-size: 18px;
  margin: 15px;
  border-bottom: 2px solid rgb(63, 63, 63);
}
.player {
  &-number {
    position: relative;
    top: 25px;
  }
  &-connected {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
