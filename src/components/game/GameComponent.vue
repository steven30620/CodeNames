<template>
  <div class="game">
    Au tour de l'espion Rouge de jouer !

    <div class="game-grid col-10">
      <div
        v-for="(word, index) in selectedWords"
        :key="index"
        :class="'game-card card' + index"
        @click="setColor(word, index)"
      >
        <div class="game-word-number">{{ index + 1 }}</div>
        <div class="game-word">{{ word }}</div>
      </div>
    </div>
    <div class="game-gessGrid" v-if="isAsker">
      <div
        class="game-gessGrid-square"
        v-for="(word, index) in selectedWords"
        :key="index"
        :class="setColorForGrid(word)"
      >
        <div class="game-gessGrid-number">{{ index + 1 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import wordsList from "@/assets/words/words";

export default {
  name: "GameComponent",
  props: {},
  components: {},

  data() {
    return {
      isAsker: "true",
      displayChat: false,
      selectedWords: [],
      indexNumber: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ],
      randomIndexNumber: [],
      redWords: [],
      blueWords: [],
      whiteWords: [],
      blackWord: [],
      isRed: false,
      isWhite: false,
      isBlue: false,
      isBlack: false,
      isAdmin: false,
    };
  },
  sockets: {
    receiveWordsList: function (data) {
      this.selectedWords = data[0];
      this.randomIndexNumber = data[1];

      this.generateAnswerGrid();
    },

    isRed: function (index) {
      let card = document.getElementsByClassName("card" + index);
      card[0].classList.add("isRed");
    },
    isBlack: function (index) {
      let card = document.getElementsByClassName("card" + index);
      card[0].classList.add("isBlack");
    },
    isBlue: function (index) {
      let card = document.getElementsByClassName("card" + index);
      card[0].classList.add("isBlue");
    },
    isWhite: function (index) {
      let card = document.getElementsByClassName("card" + index);
      card[0].classList.add("isWhite");
    },
  },
  methods: {
    checkAdmin: function () {
      let admin = localStorage.getItem("isAdmin");
      if (admin == "true") {
        this.isAdmin = true;
      }
    },
    getRandomWord: function () {
      if (this.isAdmin == true) {
        this.selectedWords = [];
        let words = wordsList;
        const shuffledArray = words.sort(() => 0.5 - Math.random());
        let i = 0;
        while (this.selectedWords.length < 25) {
          this.selectedWords.push(shuffledArray[i]);
          i++;
        }

        this.randomIndexNumber = this.indexNumber.sort(
          () => 0.5 - Math.random()
        );

        this.$socket.emit(
          "sendWordsList",
          this.selectedWords,
          this.randomIndexNumber
        );
        this.generateAnswerGrid();
      }
    },
    generateAnswerGrid: function () {
      //pour reset les tableau si on veut g??n??rer une nouvelle grille de r??ponse
      (this.redWords = []),
        (this.blueWords = []),
        (this.whiteWords = []),
        (this.blackWord = []);

      let randomNumber = this.randomIndexNumber;

      let i = 0;
      while (this.redWords.length < 9) {
        this.redWords.push(this.selectedWords[randomNumber[i]]);
        i++;
      }

      while (this.blueWords.length < 8) {
        this.blueWords.push(this.selectedWords[randomNumber[i]]);
        i++;
      }

      while (this.whiteWords.length < 7) {
        this.whiteWords.push(this.selectedWords[randomNumber[i]]);
        i++;
      }
      this.blackWord.push(this.selectedWords[randomNumber[i]]);
      console.log(this.selectedWords);
    },

    // je compare le mot choisi au tableau rouge bleu et  blanc
    setColor: function (word, index) {
      let card = document.getElementsByClassName("card" + index);

      if (this.redWords.find((Element) => Element == word) !== undefined) {
        card[0].classList.add("isRed");
        this.$socket.emit("isRedAnswer", index);
      }
      if (this.blueWords.find((Element) => Element == word) !== undefined) {
        card[0].classList.add("isBlue");
        this.$socket.emit("isBlueAnswer", index);
      }
      if (this.whiteWords.find((Element) => Element == word) !== undefined) {
        card[0].classList.add("isWhite");
        this.$socket.emit("isWhiteAnswer", index);
      }
      if (this.blackWord.find((Element) => Element == word) !== undefined) {
        card[0].classList.add("isBlack");
        this.$socket.emit("isBlackAnswer", index);
      }
    },
    setColorForGrid: function (word) {
      if (this.redWords.find((Element) => Element == word) !== undefined) {
        return "isRedGrid";
      }
      if (this.blueWords.find((Element) => Element == word) !== undefined) {
        return "isBlueGrid";
      }
      if (this.whiteWords.find((Element) => Element == word) !== undefined) {
        return "isWhiteGrid";
      }
      if (this.blackWord.find((Element) => Element == word) !== undefined) {
        return "isBlackGrid";
      }
    },
  },
  mounted() {
    this.getRandomWord();
  },
  beforeMount() {
    this.checkAdmin();
  },
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 20px;

  &-grid {
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5);
  }
  &-card {
    background-image: url("../../assets/cartes/carteBlanche.jpg");
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
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      transition: 0.2s;
    }
  }
  &-word {
    position: relative;
    top: -7px;
    &-number {
      position: relative;
      top: 10px;
    }
  }

  &-gessGrid {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    height: 200px;
    border: solid 10px black;
    border-inline-style: grey;
    border-radius: 10px;
    background: rgb(8, 8, 8);
    &-square {
      border-radius: 8px;
      width: 20%;
      height: 20%;
      border: solid 1px black;
    }
  }
}

.isRed {
  background-image: url("../../assets/cartes/codeRouge.PNG");
  z-index: 1;
}
.isBlue {
  background-image: url("../../assets/cartes/codeBleu.PNG");
  z-index: 1;
}
.isBlack {
  background-image: url("../../assets/cartes/codeNoir2.PNG");
  color: transparent;
}
.isWhite {
  background-image: url("../../assets/cartes/carteBlancheCivile2.png");
  color: transparent;
}
.isRedGrid {
  background-color: #ea5f22;
}
.isBlueGrid {
  background-color: #10bed3;
  object-fit: cover;
}
.isBlackGrid {
  background-color: black;
  object-fit: cover;
}
.isWhiteGrid {
  background-color: #dfcfcc;
  object-fit: cover;
}

@media all and (max-width: 1052px) {
  .game-card {
    &:hover {
      transform: scale(1.1);
    }
  }
}
@media all and (max-width: 512px) {
  .game-card {
    font-size: 12px;
  }
} ;
</style>
