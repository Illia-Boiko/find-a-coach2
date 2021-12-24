export const coachesMutations = {
  loadCoaches (state, payload) {
    state.coaches = [...payload]
  },

  addCoach (state, payload) {
    state.coaches.push(payload)
  }
}
