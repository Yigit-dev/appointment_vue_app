<template>
  <section id="createAppointment" class="pageAnimation">
    <h1>Create Appointment</h1>
    <div class="wrap xl-2 lg-1">
      <div class="col">
        <form>
          <p>Please enquire here.</p>
          <div class="wrap xl-2 md-1 xl-gutter-24">
            <div class="col">
              <CustomInput label="First Name" />
            </div>
            <div class="col">
              <CustomInput label="Last Name" />
            </div>
          </div>
          <CustomInput label="Email" type="email" />
          <CustomInput label="Phone" type="tel" />
          <CustomSelectBox
            label="Agent"
            :options="this._agentName"
            :default="'agent1'"
          />
          <Button color="var(--c-orange)">
            <CustomText>Sent</CustomText>
          </Button>
        </form>
      </div>
      <div class="col">
        <div>
          <h1>Section 2</h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomSelectBox from "@/components/CustomSelectBox.vue";
import Button from "@/components/Button.vue";
import CustomText from "@/components/CustomText.vue";
// import { mapMutations } from "vuex";
export default {
  components: { CustomInput, CustomSelectBox, Button, CustomText },
  computed: {},
  async created() {
    await this.$store.dispatch("loadAgents");
  },
};
</script>

<style lang="scss">
form {
  width: 90%;
  background: var(--c-form);
  border-radius: 16px;
  margin: 20px 0px;
  padding: 40px 20px 64px;
  @media screen and (max-width: 929px) {
    padding: 40px 10px 64px;
    width: 100%;
  }
  label {
    display: block;
    padding-top: 24px;
    padding-bottom: 12px;
  }
  button {
    margin-top: 36px;
  }
}
</style>
