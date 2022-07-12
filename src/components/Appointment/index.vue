<template>
  <ul>
    <AppointmentList v-for="i in 10" :key="i" />
  </ul>
</template>

<script>
import AppointmentList from "./AppointmentList.vue";
export default { components: { AppointmentList } };
</script>

<style>
ul {
  margin: 15px 10px;
}
</style>
