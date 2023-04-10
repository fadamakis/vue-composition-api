<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="rating-container">
    <div class="rating">
      <i v-for="n in 5" :key="n">
        {{ n <= rating ? "★" : "☆" }}
      </i>
    </div>
    <div class="reviews-rating">{{ rating }}</div>
  </div>
</template>
