import { appAxios } from "@/utils/appAxios";

export default {
  state: {
    agents: [],
  },
  getters: {
    _agent: (state) => state.agents.map((item) => item.fields),
  },
  mutations: {
    LOAD_AGENTS(state, data) {
      state.agents = data.records;
    },
  },
  actions: {
    async loadAgents({ commit }) {
      await appAxios
        .get("/Agents")
        .then((response) => {
          commit("LOAD_AGENTS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
};
