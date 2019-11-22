/**
 * Reset State Vuex Plugin
 * Listens in for a "RESET_STATE" mutation and changes the state to what it was when the app started
 * Doesn't work with dynamically added vuex modules, because the initial state didn't have them loaded initially, duh.
 *
 * Please load this plugin first so that it captures the initial state accurately
 */
const resetStateVuexPlugin = store => {
  const emptyState = JSON.stringify(store.state);

  // Subscribe to the Vuex plugin point
  store.subscribe((mutation, state) => {
    if (mutation.type === "RESET_STATE") {
      store.replaceState(JSON.parse(emptyState));
    }
  });
};

export default resetStateVuexPlugin;
