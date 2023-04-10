<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="search-results">
    <h2 class="search-results__title">Products</h2>
    <div class="search-result" v-for="product in products" :key="product.id">
      <img
        :src="product.thumbnail"
        alt="product.title"
        class="search-result__image"
      />
      <h5 class="search-result__name">
        {{ product.title }}
      </h5>
      <p class="search-result__description">
        {{ product.description }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search-results {
  max-height: 665px;
  overflow: auto;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background: white;
  z-index: 999;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &__title {
    margin: 0;
    margin-bottom: 20px;
  }

  .search-result {
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    &:last-child {
      border-bottom: none;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      height: 200px;
    }
    &__name {
      margin: 0;
      margin-bottom: 10px;
    }
    &__description {
      margin: 0;
      margin-bottom: 15px;
      font-size: 0.8rem;
      color: #666;
    }
  }
}
</style>
