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
  border-radius: 4px;
  border: 1px solid #ced4da;
  padding: 0 12px;
  font-size: 13px;
  transition: 300ms border-color;
  &:focus {
    border-color: var(--brand-color);
    caret-color: var(--brand-color);
  }

  &::placeholder {
    color: #495057;
  }
}
</style>
