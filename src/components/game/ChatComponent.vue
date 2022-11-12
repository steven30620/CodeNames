<template>
  <div class="chat">
    <div class="chat-message"></div>
    <div class="chat-display">
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
      <div class="chat-message">
        <div class="chat-message-user">
          <div class="chat-message-user">
            <div class="chat-message-user-placeholder-img">
              <img
                class="chat-message-user-placeholder-img"
                src="../../assets/spy.png"
              />
            </div>
            <div class="chat-message-user-name">Steven:</div>
          </div>
        </div>
        coucou
      </div>
    </div>
    <div class="chat-message-input">
      <input
        type="text"
        name="chatBox"
        class="chat-input"
        id="chatBox"
        placeholder="Parlez à vos partenaire"
      /><button class="chat-input-send-btn">
        <img src="../../assets/arrowSend.jpg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatComponent",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  height: 400px;
  background-color: red;
  justify-content: flex-end;
  &-display {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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
  }
}
</style>
