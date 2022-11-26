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
        v-if="isAdmin"
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
      isAdmin: false,
    };
  },
  methods: {
    goToGame: function () {
      this.$socket.emit("start");
    },
    joined: function () {
      let localUserName = localStorage.getItem("user");
      let isAdmin = localStorage.getItem("isAdmin");
      if (isAdmin == "true") {
        this.isAdmin = true;
      }

      let userInfo = {
        name: localUserName,
        admin: isAdmin,
      };

      this.$socket.emit("addNewUser", userInfo);
    },
  },
  sockets: {
    displayUser: function (data) {
      this.players = data;
    },
    startGame: function () {
      router.push("/Game");
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
