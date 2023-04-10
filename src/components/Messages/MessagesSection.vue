<script setup>
import MessageBox from "@/components/Messages/MessageBox.vue";
import NewMessageForm from "@/components/Messages/NewMessageForm.vue";
import mockMessages from "@/mock/messages.js";
import useAuth from "@/composables/useAuth.js";

import { reactive } from "vue";

const messages = reactive(mockMessages);

const { user } = useAuth();

function addMessage(newMessage) {
  messages.push({
    name: user.name,
    line: newMessage,
    time: "Just now",
    avatar: user.avatar,
  });
}

function toggleFavorite(message) {
  message.favorited = !message.favorited;
}
</script>

<template>
  <div class="messages-section">
    <h2 class="section-header">Chat room</h2>
    <div class="messages">
      <MessageBox
        v-for="message in messages"
        :message="message"
        :key="message.key"
        @toggle-favorite="toggleFavorite"
      />
    </div>
    <NewMessageForm @addMessage="addMessage" />
  </div>
</template>

<style lang="scss">
.messages-section {
  flex-shrink: 0;
  padding-bottom: 32px;
  background-color: var(--projects-section);
  margin-left: 24px;
  flex: 1;
  width: 100%;
  border-radius: 8px;
  position: relative;
  overflow: auto;
  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);

  .messages-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    border: none;
    background-color: transparent;
    color: var(--main-color);
    display: none;
  }

  &.show {
    transform: translateX(0);
    opacity: 1;
    margin-left: 0;
  }

  .section-header {
    padding: 24px;
    background-color: var(--projects-section);
  }
}

.message-box {
  border-bottom: 1px solid var(--message-box-border);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--message-box-hover);
    border-top-color: var(--link-color-hover);

    + .message-box {
      border-top-color: var(--link-color-hover);
    }
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    height: 40px;
  }
}

.message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: var(--main-color);
    margin: 0;
  }
}

.message-content {
  padding-left: 16px;
  width: 100%;
}

.star-checkbox {
  input {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  }

  label {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .dark & {
    color: var(--secondary-color);

    input:checked + label {
      color: var(--star);
    }
  }

  input:checked + label svg {
    fill: var(--star);
    transition: 0.2s;
  }
}

.message-line {
  font-size: 14px;
  line-height: 20px;
  margin: 8px 0;
  color: var(--secondary-color);
  opacity: 0.7;

  &.time {
    text-align: right;
    margin-bottom: 0;
  }
}
</style>
