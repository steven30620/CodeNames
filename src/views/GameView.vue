<template>
  <div class="game-zone">
    <GameComponent></GameComponent>
    <div class="container"></div>
    <div class="chatZone">
      <div class="chat">
        <button
          data-toggle="collapse"
          href="#chat"
          aria-expanded="false"
          aria-controls="chat"
          @click="chat"
        >
          Afficher le chat
        </button>

        <transition
          name="chat-transition"
          class="chat-transition"
          enter-active-class="animated animate__backInLeft  animate__faster	 "
          leave-active-class="animated animate__backOutRight animate__faster	 "
        >
          <ChatComponent v-if="displayChat" id="chat"></ChatComponent>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import GameComponent from "../components/game/GameComponent";
import ChatComponent from "../components/game/ChatComponent";
import "animate.css";

export default {
  name: "GameView",
  components: {
    ChatComponent,
    GameComponent,
  },

  data() {
    return {
      testo: "",

      displayChat: false,
    };
  },
  methods: {
    chat: function () {
      this.displayChat = !this.displayChat;
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
.game-zone {
  margin-bottom: 150px;
}

.chatZone {
  display: flex;
  justify-content: center;
}
</style>
