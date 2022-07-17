import { appAxios } from '@/utils/appAxios'

export default {
  state: {
    appointments: []
  },
  getters: {},
  mutations: {
    LOAD_APPOINTMENTS(state, data) {
      state.appointments = data.records
    }
  },
  actions: {
    loadAppointments({ commit }) {
      appAxios
        .get('/Appointments')
        .then((response) => {
          commit('LOAD_APPOINTMENTS', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    createAppointment({ state }, payload) {
      console.log(state)
      appAxios
        .post('/Appointments', payload)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateAppointment({ state }, payload) {
      console.log(state)
      console.log('t', payload)
      try {
        appAxios.patch('/Appointments', payload)
      } catch (err) {
        console.log(err)
      }
    },
    deleteAppointment({ state }, id) {
      console.log(state)
      try {
        appAxios.delete('/Appointments/' + id)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {}
}

/*
  *******************************
          QUERY EXAMPLE
  *******************************
  computed: {
    ...mapState(['appointments' 'agents'])
  },
  created(){
    this.$store.dispatch('loadAppointments')
    this.$store.dispatch("loadAgents");
    this.$store.dispatch('deleteAppointment', 'recDGNY0Jmdl9tH2c')
    const data = {
      records: [
        {
          id: 'recHfeNIKfHsHo3Fa', // just for update
          fields: {
            appointment_postcode: 'testtesttest'
          }
        }
      ]
    }
    this.$store.dispatch('createAppointment', data)
    this.$store.dispatch('updateAppointment', data)
  }
*/
