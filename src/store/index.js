import { createStore } from 'vuex'
import appointments from './modules/appointments'
import agents from './modules/agents'

export default createStore({
  modules: {
    appointments,
    agents
  }
})
