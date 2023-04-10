<script setup>
import TheSearch from "@/components/Search/TheSearch.vue";
import useAuth from "@/composables/useAuth.js";
import ModeSwitch from "@/components/common/ModeSwitch.vue";
import icon from "@/components/common/icons/icon.vue";
const { user } = useAuth();
</script>

<template>
  <header class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">Vue Store</p>
      <TheSearch />
    </div>
    <div class="app-header-right">
      <ModeSwitch />
      <button class="add-btn" title="Add New Project">
        <icon name="plus" />
      </button>
      <button class="notification-btn">
        <icon name="bell" />
      </button>
      <button class="profile-btn">
        <img :src="user.avatar" />
        <span>{{ user.name }}</span>
      </button>
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  position: relative;

  &-left,
  &-right {
    display: flex;
    align-items: center;
  }

  &-left {
    flex-grow: 1;
  }

  &-right button {
    margin-left: 10px;
  }
}

.mode-switch {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-btn {
  color: #fff;
  background-color: var(--button-bg);
  padding: 0;
  border: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn {
  color: var(--main-color);
  padding: 0;
  border: 0;
  background-color: transparent;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-btn {
  padding: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-left: 2px solid #ddd;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 4px;
  }

  span {
    color: var(--main-color);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
}
</style>
