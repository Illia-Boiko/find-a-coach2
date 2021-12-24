import { requestsGetters } from './requests.getters'
import { requestsMutations } from './requests.mutations'
import { requestsActions } from './requests.actions'

export const requestsModule = {
  state () {
    return {
      requests: []
    }
  },

  getters: requestsGetters,
  mutations: requestsMutations,
  actions: requestsActions
}
