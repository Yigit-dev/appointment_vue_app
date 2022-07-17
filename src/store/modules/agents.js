import { appAxios } from '@/utils/appAxios'

export default {
  state: {
    agents: []
  },
  getters: {},
  mutations: {
    LOAD_AGENTS(state, data) {
      state.agents = data.records
    }
  },
  actions: {
    loadAgents({ commit }) {
      appAxios
        .get('/Agents')
        .then((response) => {
          commit('LOAD_AGENTS', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {}
}
