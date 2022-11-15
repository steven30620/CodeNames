<template>
  <div class="game">
    le jeu
    <div class="game-grid col-10">
      <div v-for="(word, index) in words" :key="index" class="game-card">
        <div class="game-word-number">{{ index + 1 }}</div>
        <div class="game-word">{{ word }}</div>
      </div>
    </div>
    <div class="game-chat">
      <button
        data-toggle="collapse"
        href="#chat"
        aria-expanded="false"
        aria-controls="chat"
        @click="displayChat = !displayChat"
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
</template>

<script>
import ChatComponent from "@/components/game/ChatComponent.vue";

import "animate.css";

export default {
  name: "GameComponent",
  components: {
    ChatComponent,
  },
  data() {
    return {
      displayChat: false,
      words: [],
    };
  },
  methods: {
    getRandomWord: function () {
      this.words = this.$store.state.words;
    },
  },
  beforeMount() {
    this.getRandomWord();
  },
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 150px;

  &-grid {
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5);
  }
  &-card {
    background-image: url("../assets/carteBlanche.jpg");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    margin: 2px;
    max-width: 180px;
    border: 1px solid rgb(206, 203, 191);
    border-radius: 8px;
    font-size: 15px;
  }
  &-word {
    position: relative;
    top: -7px;
    &-number {
      position: relative;
      top: 10px;
    }
  }
  &-chat {
    margin-top: 40px;
    width: 80%;
  }
}
</style>
