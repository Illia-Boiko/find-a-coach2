import axios from 'axios'

export const requestsActions = {
  async loadRequests (context, payload) {
    console.log(context)

    const token = context.getters.getToken
    const response = await axios.get(`https://vue-http-demo-88-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload}.json?auth=` + token)
    const responseData = response.data
    const requestsArray = []

    for (const key in responseData) {
      const newRequest = {
        id: key,
        email: responseData[key].userEmail,
        message: responseData[key].message
      }

      requestsArray.push(newRequest)
    }

    context.commit('loadRequests', requestsArray)
  },

  async addRequest ({ commit }, payload) {
    const response = await axios.post(`https://vue-http-demo-88-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
      message: payload.message,
      userEmail: payload.email
    })
    console.log(response.data)
  }
}
