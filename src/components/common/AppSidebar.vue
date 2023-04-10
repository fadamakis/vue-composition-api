<script>
import Icon from "@/components/common/icons/icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<template>
  <div class="app-sidebar">
    <a href="#" class="app-sidebar-link active">
      <Icon name="home" />
    </a>
    <a href="#" class="app-sidebar-link">
      <Icon name="pie" />
    </a>
    <a href="#" class="app-sidebar-link">
      <Icon name="calendar" />
    </a>
    <a href="#" class="app-sidebar-link">
      <Icon name="settings" />
    </a>
  </div>
</template>

<style lang="scss">
.app-sidebar {
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-link {
    color: var(--main-color);
    color: var(--link-color);
    margin: 16px 0;
    transition: 0.2s;
    border-radius: 50%;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--link-color-hover);
      color: var(--link-color-active);
    }

    &.active {
      background-color: var(--link-color-active-bg);
      color: var(--link-color-active);
    }
  }
}
</style>
