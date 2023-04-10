<script setup lang="ts">
import AppHeader from "@/components/common/AppHeader.vue";
import AppSidebar from "@/components/common/AppSidebar.vue";
import ProductsSection from "@/components/Products/ProductsSection.vue";
import MessagesSection from "@/components/Messages/MessagesSection.vue";
</script>

<template>
  <main>
    <div class="app-container">
      <AppHeader />
      <div class="app-content">
        <AppSidebar />
        <ProductsSection />
        <MessagesSection />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
