<script setup>
import { debounce } from "debounce";
import SearchResults from "./SearchResults.vue";
import icon from "@/components/common/icons/icon.vue";

import { ref, watch } from "vue";

const searchTerm = ref("");
const products = ref([]);

watch(searchTerm, () => {
  performSearch();
});

const performSearch = debounce(async function () {
  if (searchTerm.value === "") {
    products.value = [];
    return;
  }
  if (searchTerm.value.length < 2) {
    return;
  }
  const searchUrl = getSearchUrl();
  const response = await (await fetch(searchUrl)).json();

  products.value = response.products;
}, 600);

function getSearchUrl() {
  const url = "https://dummyjson.com/products/search";
  const params = {
    q: searchTerm.value,
    limit: "5",
  };

  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams}`;
}
function clearSearch() {
  searchTerm.value = "";
  products.value = [];
}
</script>

<template>
  <div class="search-wrapper">
    <form @submit.prevent="performSearch" class="search-form">
      <input
        class="search-input"
        type="text"
        placeholder="Search"
        v-model="searchTerm"
      />
      <icon
        v-if="searchTerm !== ''"
        name="close"
        @click="clearSearch"
        class="search-input__clear"
      />
      <icon
        v-else
        name="search"
        @click="clearSearch"
        class="search-input__clear"
      />
    </form>
    <SearchResults v-if="products.length" :products="products" />
  </div>
</template>

<style lang="scss">
.search-wrapper {
  position: relative;
}
.search-form {
  border-radius: 8px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  max-width: 100%;
  color: var(--light-font);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;

  .dark & {
    box-shadow: none;
  }
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);

  &:placeholder {
    color: var(--main-color);
    opacity: 0.6;
  }
  &__clear {
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
