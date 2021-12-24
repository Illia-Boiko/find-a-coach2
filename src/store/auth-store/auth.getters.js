export const authGetters = {
  getUserId (state) {
    return state.UserId
  },

  getToken (state) {
    return state.token
  },

  isLogged (state) {
    return !!state.token
  }
}
