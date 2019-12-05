# Cash Flow Store Plugins

Custom Vuex plugins for working with the application's state.

- ## Local Storage

  Persists Vuex state in browser LocalStorage after a short interaction delay

- ## Reset State

  Listens to a special `RESET_STATE` action to replace the state with an initial/empty version of the state; pay attention to the loading order - this one needs to take a snapshot before any other plugins apply changes to it
