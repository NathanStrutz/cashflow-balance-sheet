const initialState = () => ({
  profession: "",
  player: "",
  auditor: ""
});

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    changeProfession: (state, payload) => (state.profession = payload),
    changePlayer: (state, payload) => (state.player = payload),
    changeAuditor: (state, payload) => (state.auditor = payload)
  }
};
