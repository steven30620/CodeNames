<template>
  <div class="chat">
    <div class="chat-message"></div>
    <div
      class="chat-display"
      v-for="(message, index) in messages"
      :key="index"
      index
    >
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">{{ message.user }}:</div>
          </div>
        </div>
        {{ message.text }}
      </div>
    </div>
    <div class="testUser">
      <input
        type="text"
        name="chatBox"
        class="chat-input"
        id="chatBox"
        placeholder="pseudo"
        @keyup.enter="sendMessage"
        v-model="currentUser"
      />
    </div>
    <div class="chat-message-input">
      <input
        type="text"
        name="chatBox"
        class="chat-input"
        id="chatBox"
        placeholder="Parlez à vos partenaire"
        @keyup.enter="sendMessage"
        v-model="messageInput"
      /><button @click="sendMessage" class="chat-input-send-btn">
        <img class="chat-input-send-btn-img" src="../../assets/arrowSend.jpg" />
      </button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "ChatComponent",
  components: {},
  props: { joined: Boolean },
  data() {
    return {
      currentUser: "",
      messageInput: "",
      messages: [],
    };
  },
  methods: {
    join: function () {
      this.socketInstance = io("http://localhost:3000");

      this.socketInstance.on("message:received", (data) => {
        this.messages = this.messages.concat(data);
      });
    },
    sendMessage: function () {
      let message = {
        user: this.currentUser,
        text: this.messageInput,
      };
      this.messages = this.messages.concat(message);

      this.socketInstance.emit("message", message);
      this.messageInput = "";
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 400px;
  min-width: 400px;
  background-color: red;
  justify-content: flex-end;
  &-display {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  &-message {
    display: flex;
    align-items: center;
    margin: 5px;
    &-user {
      display: flex;
      align-items: center;
      margin-right: 1px;

      &-placeholder-img {
        object-fit: cover;
        border-radius: 50% 50%;
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }
    }
  }
  &-input {
    width: 100%;
    &-send-btn-img {
      width: 30px;
    }
  }
}
</style>
