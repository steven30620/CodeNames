<template>
  <div class="game">
    <div class="container h-10 py-2">
      <div
        class="card col-12 col-md-8 col-lg-6 col-xl-5 bg-dark text-white"
        style="border-radius: 1rem"
      >
        <div class="card-title">Liste d'espions connecté(e)s</div>
        <div class="player-display">
          <div
            class="player-connected"
            v-for="(player, index) in players"
            :key="index"
          >
            <div class="user-pseudo col-5">{{ player }}</div>
          </div>
        </div>
        <div class="player-number">
          {{ players.length }} joueurs connecté(e)s
        </div>
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
import router from "@/router";
export default {
  name: "SalonView",
  data() {
    return {
      players: [],
    };
  },
  methods: {
    goToGame: function () {
      router.push("/game");
    },
    joined: function () {
      let localUserName = localStorage.getItem("user");
      this.players = this.players.concat(localUserName);
      this.$socket.emit("addNewUser", localUserName);
    },
  },
  sockets: {
    displayUser: function (data) {
      console.log("display user     " + data);
      this.players = data;
      console.log("je repasse dans le fornt");
    },
  },
  beforeMount() {
    this.joined();
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
  &-display {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &-connected {
    display: flex;
    min-width: 50%;
    justify-content: center;
  }
}
</style>
