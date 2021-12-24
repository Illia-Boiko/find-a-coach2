import { authGetters } from './auth.getters'
import { authMutations } from './auth.mutations'
import { authActions } from './auth.actions'

export const authModule = {
  state () {
    return {
      token: null,
      userId: null,
      tokenExpiration: null
    }
  },

  getters: authGetters,
  mutations: authMutations,
  actions: authActions
}
