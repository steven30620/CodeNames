<template>
  <div class="game">
    <div class="container h-10 py-5">
      <div
        class="card col-12 col-md-8 col-lg-6 col-xl-5 bg-dark text-white"
        style="border-radius: 1rem"
      >
        <div class="card-title">Liste d'espions connecté(e)s</div>
        <div class="player-connected">
          <div class="user-pseudo">Espion SteVen</div>
          <div class="user-pseudo">Espion stapha</div>
          <div class="user-pseudo">Espion aluxis</div>
          <div class="user-pseudo">Espion jaki</div>
          <div class="user-pseudo">Espion anglus</div>
          <div class="user-pseudo">Espion valinos</div>
          <div class="user-pseudo">Espion thelos</div>
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
        Créer le salon d'espions !
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalonComponent",
};
</script>

<style lang="scss" scoped>
.game {
  margin-top: 50px;
  padding-bottom: 100px;
}

.container {
  display: flex;
  justify-content: center;
}

.card {
  min-height: 100px;
  padding-top: 00px;
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
  width: 200px;
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
