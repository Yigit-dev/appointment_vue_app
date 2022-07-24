<template>
  <label>{{ label }}</label>
  <Datepicker
    @input="$emit('update:modelValue', $event.target.value)"
    :previewFormat="format"
  ></Datepicker>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import { ref } from "vue";

export default {
  components: { Datepicker },
  props: ["label"],
  setup() {
    const date = ref(new Date());
    // In case of a range picker, you'll receive [Date, Date]
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `Selected date is ${year}-${month}-${day}`;
    };

    return {
      date,
      format,
    };
  },
};
</script>

<style>
.dp__theme_dark,
.dp__theme_light {
  --dp-background-color: var(--c-input);
  --dp-text-color: var(--c-text);
  --dp-hover-color: var(--brand-color);
  --dp-hover-text-color: var(--c-text);
  --dp-hover-icon-color: var(--c-text);
  --dp-success-color: var(--brand-color);
  --dp-border-color: var(--brand-color);
  --dp-border-color-hover: var(--brand-color);
}
.dp__input {
  height: 36px;
  border: none;
  border-radius: 7px;
}
.dp__input_focus {
  border: 1px solid var(--brand-color);
}
</style>
