<script>
import star from "./star.vue";
import close from "./close.vue";
import grid from "./grid.vue";
import list from "./list.vue";
import kebab from "./kebab.vue";
import plus from "./plus.vue";
import calendar from "./calendar.vue";
import home from "./home.vue";
import pie from "./pie.vue";
import settings from "./settings.vue";
import add from "./add.vue";
import bell from "./bell.vue";
import round from "./round.vue";
import search from "./search.vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    close,
    star,
    grid,
    list,
    kebab,
    plus,
    calendar,
    home,
    pie,
    settings,
    add,
    bell,
    round,
    search,
  },
};
</script>

<template>
  <component :is="name" />
</template>
