<script setup>
import icon from "@/components/common/icons/icon.vue";

defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="message-box">
    <img :src="message.avatar" alt="User avatar" />
    <div class="message-content">
      <div class="message-header">
        <div class="name">{{ message.name }}</div>
        <div class="star-checkbox">
          <input
            type="checkbox"
            :value="message.favorited"
            @change="$emit('toggle-favorite', message)"
            :id="`star-${message.key}`"
          />
          <label :for="`star-${message.key}`">
            <icon name="star" />
          </label>
        </div>
      </div>
      <p class="message-line">
        {{ message.line }}
      </p>
      <p class="message-line time">{{ message.time }}</p>
    </div>
  </div>
</template>
