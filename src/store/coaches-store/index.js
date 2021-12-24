import { coachesGetters } from './coaches.getters'
import { coachesMutations } from './coaches.mutations'
import { coachesActions } from './coaches.actions'

export const coachesModule = {
  state () {
    return {
      coaches: []
    }
  },

  getters: coachesGetters,
  mutations: coachesMutations,
  actions: coachesActions
}
