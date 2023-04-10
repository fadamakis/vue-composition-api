<script>
export default {
  data() {
    return {
      newMessage: "",
    };
  },
  emits: ["addMessage"],
  methods: {
    addMessage() {
      this.$emit("addMessage", this.newMessage);
      this.newMessage = "";
    },
  },
};
</script>

<template>
  <form class="new-message" @submit.prevent="addMessage">
    <input
      type="text"
      v-model="newMessage"
      class="new-message__input"
      placeholder="New message..."
    />
    <button type="submit" class="new-message__cta">Send</button>
  </form>
</template>

<style lang="scss">
.new-message {
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: var(--search-area-bg);
  margin: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__input {
    border: none;
    flex: 1;
    outline: none;
    padding: 0 12px;
    font-size: 13px;
    background-color: var(--search-area-bg);
    color: var(--main-color);

    &:placeholder {
      color: var(--main-color);

      font-size: 12px;
      opacity: 0.6;
    }
  }
  &__cta {
    border: none;
    background-color: var(--search-area-bg);
    color: var(--main-color);
    padding: 0 12px;
    cursor: pointer;
    transition: 0.2s;

    font-size: 12px;
    &:hover {
      background-color: var(--search-area-bg-hover);
    }
  }
}
</style>
