<template>
  <section id="appointment" class="pageAnimation">
    <CustomText tag="h1" size="xxl">Appointment</CustomText>
    <Appointment />
  </section>
</template>

<script>
import Appointment from "@/components/Appointment/";
import CustomText from "@/components/CustomText.vue";
export default {
  components: {
    Appointment,
    CustomText,
  },
};
</script>
