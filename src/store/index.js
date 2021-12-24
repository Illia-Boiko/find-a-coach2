import { createStore } from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { coachesModule } from './coaches-store'
import { authModule } from './auth-store'
import { requestsModule } from './requests-store'

export default createStore({
  modules: {
    coachesModule,
    authModule,
    requestsModule
  },

  getters,
  mutations,
  actions
})
