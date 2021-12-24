export const requestsMutations = {
  loadRequests (state, payload) {
    state.requests = [...payload]
  },

  addRequest (state, payload) {
    state.requests.push(payload)
  }
}
