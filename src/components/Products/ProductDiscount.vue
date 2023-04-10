<script setup>
import { computed } from "vue";

const props = defineProps({
  discount: {
    type: Number,
    required: true,
  },
});
const formattedDiscount = computed(() => `-${props.discount}%`);
</script>

<template>
  <span class="flag-discount">{{ formattedDiscount }}</span>
</template>

<style lang="scss">
.flag-discount {
  border-radius: 6px 0 0 6px;
  color: #fff;
  display: block;

  padding: 5px 10px;
  background: #d62466;
  font-size: 12px;
  font-weight: 400;
  position: relative;
  margin-left: 10px;
}
.flag-discount::before,
.flag-discount::after {
  content: "";
  position: absolute;
  left: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  display: block;
}
.flag-discount::before {
  top: 0;
  border-width: 22px 15px 0 0;
  border-color: #d62466 transparent transparent transparent;
}
.flag-discount::after {
  bottom: 0;
  border-width: 0 15px 22px 0;
  border-color: transparent transparent #d62466 transparent;
}
</style>
