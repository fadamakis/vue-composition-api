<script setup>
import ProductDiscount from "./ProductDiscount.vue";
import ProductRating from "./ProductRating.vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<script>
export default {
  name: "ProductCard",
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="product.thumbnail" />
    </div>
    <ProductRating :rating="product.rating" />
    <div class="card-content">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-description">{{ product.description }}</p>

      <div class="card-details">
        <div class="price-container">
          <div class="price">{{ product.price }}€</div>

          <ProductDiscount
            v-if="product.discountPercentage > 0"
            :discount="product.discountPercentage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.card-image {
  width: 100%;
  height: 110px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover img {
  transform: scale(1.05);
  cursor: pointer;
}

.card-content {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.card-description {
  font-size: 13px;
  margin: 0;
}

.card-details {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.price-container {
  display: flex;
  align-items: center;
}

.price {
  font-size: 18px;
  font-weight: bold;
}

.discount {
  font-size: 14px;
  margin-left: 10px;
  color: #888;
}

.rating-container {
  display: flex;
  align-items: center;
  margin: 10px 10px -10px 10px;
}

.rating {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ffc107;
}

.rating i {
  margin-right: 2px;
}
.reviews-rating {
  font-size: 13px;
  margin-left: 5px;
  color: #888;
}

.availability {
  font-size: 13px;
  color: #888;
}
</style>
