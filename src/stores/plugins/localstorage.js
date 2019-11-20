var localStorageVuexPluginThrottleTimeout;

/**
 * Local Storage Vuex Plugin
 * Saves the state to local storage every time it is saved, and reloads it on startup
 */
const localStorageVuexPlugin = store => {
  const gameKey = "cashflow-current-game";

  // Initialize state from the last game, if it's there
  const savedGameJson = localStorage.getItem(gameKey);
  if (savedGameJson) {
    const savedGame = JSON.parse(savedGameJson);
    store.replaceState(savedGame);
    // console.log("Loaded saved game", savedGame);
  }

  // Save the state
  const commitToLocalStorage = data => {
    // console.log("Saving state to localStorage");
    localStorage.setItem(gameKey, JSON.stringify(data));
  };

  // Subscribe to the Vuex plugin point
  store.subscribe((mutation, state) => {
    // debounce quick successive calls to save state - they can fire when the UI is bored
    if (localStorageVuexPluginThrottleTimeout) window.clearTimeout(localStorageVuexPluginThrottleTimeout);
    localStorageVuexPluginThrottleTimeout = window.setTimeout(() => commitToLocalStorage(state), 456);
  });
};

export default localStorageVuexPlugin;
