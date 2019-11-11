export default {
  namespaced: true,
  state: {
    profession: "",
    player: "",
    auditor: ""
  },
  getters: {},
  mutations: {
    changeProfession: (state, payload) => (state.profession = payload),
    changePlayer: (state, payload) => (state.player = payload),
    changeAuditor: (state, payload) => (state.auditor = payload)
  }
};
