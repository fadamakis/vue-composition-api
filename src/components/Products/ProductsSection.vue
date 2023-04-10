<script>
import ProductCard from "@/components/Products/ProductCard.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import { getFormattedDate } from "@/utils/helpers.js";

export default {
  components: {
    ProductCard,
    LoadingSpinner,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    today() {
      return getFormattedDate(new Date());
    },
  },
  async mounted() {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    this.products = response.products;
  },
};
</script>
<template>
  <div class="products-section">
    <h2 class="section-header">
      <p>Products</p>
      <p class="time">{{ today }}</p>
    </h2>
    <div class="products" v-if="products.length">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <LoadingSpinner v-else />
  </div>
</template>

<style lang="scss">
.products-section {
  padding: 0 24px 0 24px;
  background-color: var(--projects-section);
  margin-left: 10px;
  flex: 2;
  width: 100%;
  border-radius: 8px;
  position: relative;
  overflow: auto;
  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: var(--main-color);
  .time {
    font-size: 12px;
    color: var(--secondary-color);
  }
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 25px;
}
</style>
