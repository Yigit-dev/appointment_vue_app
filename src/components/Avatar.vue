<template>
  <div>
    <img src="@/assets/yigit-light.jpg" :width="size" :height="size" alt="" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["size"],
};
</script>

<style scoped>
img {
  border-radius: 100%;
  border: 2px solid var(--c-purple);
  flex-shrink: 0;
  object-fit: cover;
}
</style>
