<template>
  <div class="game">
    le jeu

    <div class="game-grid col-10">
      <div class="game-card">
        <div class="game-word-number">1</div>
        <div class="game-word">Banane</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">2</div>
        <div class="game-word">biere</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">3</div>
        <div class="game-word">ananas</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">4</div>
        <div class="game-word">fort</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">5</div>
        <div class="game-word">pieuvre</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">6</div>
        <div class="game-word">marteau</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">7</div>
        <div class="game-word">porte</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">8</div>
        <div class="game-word">jus</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">9</div>
        <div class="game-word">palier</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">10</div>
        <div class="game-word">tele</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">11</div>
        <div class="game-word">jeux</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">12</div>
        <div class="game-word">casque</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">13</div>
        <div class="game-word">verre</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">14</div>
        <div class="game-word">tasse</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">15</div>
        <div class="game-word">lumiere</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">16</div>
        <div class="game-word">terre</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">17</div>
        <div class="game-word">soleil</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">18</div>
        <div class="game-word">toit</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">19</div>
        <div class="game-word">famille</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">20</div>
        <div class="game-word">trousse</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">21</div>
        <div class="game-word">bain</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">22</div>
        <div class="game-word">eau</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">23</div>
        <div class="game-word">arbre</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">24</div>
        <div class="game-word">chasse</div>
      </div>
      <div class="game-card">
        <div class="game-word-number">25</div>
        <div class="game-word">voiture</div>
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
    };
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
