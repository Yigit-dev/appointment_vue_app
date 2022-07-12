<template>
  <button :style="{ 'background-color': color }" :class="size">
    <slot />
  </button>
</template>
<script>
export default {
  name: "CustomText",
  props: {
    color: {
      types: String,
      default: "blue",
    },
    size: {
      type: String,
      default: "normal",
      validator: (value) =>
        ["normal", "small", "xsmall", "xxsmall"].indexOf(value) !== -1,
    },
  },
};
</script>
<style scoped>
button {
  border-radius: 8px;
  color: var(--c-text);
}
.normal {
  padding: 14px;
}
.small {
  padding: 12px;
}
.xsmall {
  padding: 11px;
}
.xxsmall {
  padding: 10px;
}
</style>
