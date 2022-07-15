<template>
  <section id="createAppointment" class="pageAnimation">
    <h1>Create Appointment</h1>
    <CustomInput />

    <CustomSelectBox
      :options="['option1', 'option2', 'option3', 'option4']"
      :default="'option1'"
    />
  </section>
</template>
<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomSelectBox from "../components/CustomSelectBox.vue";
export default {
  components: { CustomInput, CustomSelectBox },
};
</script>
