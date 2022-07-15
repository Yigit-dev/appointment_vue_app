<template>
  <input type="text" />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 36px;
  border-radius: 7px;
  padding: 0 12px;
  font-size: 13px;
  transition: 300ms border-color;
  background: var(--c-input);
  color: var(--c-text);
  transition: 300ms all;
  &:focus {
    transition: 300ms all;
    border: 1px solid var(--brand-color);
    border-color: var(--brand-color);
    caret-color: var(--brand-color);
  }
  &::placeholder {
    color: #495057;
  }
}
</style>
