<template>
  <section id="createAppointment" class="pageAnimation">
    <h1>Create Appointment</h1>
    <div class="wrap xl-2 lg-1">
      <div class="col">
        <form>
          <p>Please enquire here.</p>
          <div class="wrap xl-2 md-1 xl-gutter-24">
            <div class="col">
              <CustomInput label="Name" v-model="name" />
            </div>
            <div class="col">
              <CustomInput label="Surname" v-model="surname" />
            </div>
          </div>
          <CustomInput label="Email" type="email" v-model="email" />
          <CustomInput label="Phone" type="tel" v-model="phone" />
          <CustomInput label="Post Code" v-model="postcode" />
          <DatePicker label="Date" v-model="date" />
          <CustomSelectBox
            label="Agent"
            @data="changeAgent"
            :options="this._agent"
            :default="'Select Agent'"
          />
          <Button @click="sendForm" color="var(--c-orange)">
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
import { mapGetters } from "vuex";
import DatePicker from "../components/DatePicker.vue";

export default {
  components: {
    CustomInput,
    CustomSelectBox,
    Button,
    CustomText,
    DatePicker,
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
      postcode: "",
      date: "",
      agent_id: "",
      agent_name: "",
      agent_surname: "",
    };
  },
  computed: {
    ...mapGetters(["_agent"]),
  },
  async created() {
    await this.$store.dispatch("loadAgents");
  },
  methods: {
    changeAgent(agent) {
      // data from custom select box
      this.agent_id = agent.agent_id;
      this.agent_name = agent.agent_name;
      this.agent_surname = agent.agent_surname;
    },
    sendForm(e) {
      e.preventDefault();
      const data = {
        records: [
          {
            fields: {
              // agent_id: [this.agent_id],
              // agent_name: [this.agent_name],
              // agent_surname: [this.agent_surname],
              contact_name: [this.name],
              // contact_surname: [this.surname],
              // contact_email: [this.email],
              // contact_phone: [this.phone],
              // appointment_date: this.date,
              appointment_postcode: this.postcode,
            },
          },
        ],
      };
      console.log(data);
      this.$store.dispatch("createAppointment", data);
    },
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
