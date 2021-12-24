import axios from 'axios'

export const coachesActions = {
  async loadCoaches ({ commit }) {
    const response = await axios.get('https://vue-http-demo-88-default-rtdb.europe-west1.firebasedatabase.app/coaches.json')
    const responseData = response.data
    const coachesArray = []

    for (const key in responseData) {
      const newCoach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        hourlyRate: responseData[key].hourlyRate,
        description: responseData[key].description,
        areas: responseData[key].areas.sort((a, b) => (b.length - a.length))
      }

      coachesArray.push(newCoach)
    }

    commit('loadCoaches', coachesArray)
  },

  async addCoach (context, payload) {
    const token = context.getters.getToken

    const response = await axios.post('https://vue-http-demo-88-default-rtdb.europe-west1.firebasedatabase.app/coaches/.json?auth=' + token, {
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.hourlyRate,
      description: payload.description,
      areas: payload.areas
    })
    console.log(response.data)
  }
}
