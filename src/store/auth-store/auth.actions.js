import axios from 'axios'

export const authActions = {
  async login ({ commit }, payload) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmYPgIOZLF5g60FDwpv-uGRI7PAP29j9k', {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    })

    const responseData = response.data
    console.log(responseData)

    commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },

  async signup ({ commit }, payload) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmYPgIOZLF5g60FDwpv-uGRI7PAP29j9k', {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    })

    const responseData = response.data
    console.log(responseData)

    commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  }
}
