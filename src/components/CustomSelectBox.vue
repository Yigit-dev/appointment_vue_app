<template>
  <label>{{ label }}</label>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>

    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options?.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: var(--c-input);
  border-radius: 12px;
  /* border: 1px solid var(--border-color); */
  color: var(--c-text);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid var(--brand-color);
  border-radius: 12px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-radius: 3px;
  border-color: var(--c-text) transparent transparent transparent;
}

.custom-select .items {
  color: var(--c-text);
  border-radius: 7px;
  overflow: hidden;
  position: absolute;
  background-color: var(--c-input);
  padding: 1.5em;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: var(--c-text);
  padding-left: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 12px;
  transition: 200ms all ease;
}

.custom-select .items div:hover {
  background-color: var(--c-input-shadow);
  transition: 300ms all ease;
}

.selectHide {
  display: none;
}
</style>
