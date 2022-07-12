<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>
<script>
export default {
  name: "CustomText",
  props: {
    tag: {
      types: String,
      default: "span",
    },
    size: {
      type: String,
      default: "normal",
      validator: (value) => ["xxl", "xl", "l", "m", "s"].indexOf(value) !== -1,
    },
  },
};
</script>
<style scoped>
.xxl {
  font-size: 28px;
}
.xl {
  font-size: 24px;
}

.l {
  font-size: 18px;
}

.m {
  font-size: 15px;
}
.s {
  font-size: 13px;
}
</style>
