<template>
    <MyLoader v-if="isLoading" />
    <MyDialog v-model:isVisible="isErrorVisible">
      Error! Failed to fetch!
    </MyDialog>
    <MyCard class="mb-8">
      <h2 class="text-center text-2xl mb-8">Add new coach</h2>
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col w-4/6 mx-auto mb-4">
          <label for="firstname">Firstname</label>
          <input
            v-model="firstName"
            class="border border-gray-400"
            id="firstname"
            type="text"
          >
          <label for="lastname">Lastname</label>
          <input
            v-model="lastName"
            class="border border-gray-400"
            id="lastname"
            type="text"
          >
          <label for="description">Description</label>
          <textarea
            v-model="description"
            name="description"
            id="description"
            cols="30"
            rows="5"
            class="border border-gray-400"
          ></textarea>
          <label for="rate">Hourly rate</label>
          <input
            v-model="hourlyRate"
            type="number"
            class="border border-gray-400"
          >
          <h3 class="text-xl">Areas of Expertise</h3>
          <div>
            <input v-model="areas" id="addFrontend" type="checkbox" value="frontend">
            <label for="addFrontend">
              Frontend
            </label>
          </div>
          <div>
            <input v-model="areas" id="addBackend" type="checkbox" value="backend">
            <label for="addBackend">
              Backend
            </label>
          </div>
          <div>
            <input v-model="areas" id="addCareer" type="checkbox" value="career">
            <label for="addCareer">
              Career
            </label>
          </div>
          <p v-if="!isFormValid" class="text-red-500">*Please fill in all fields</p>
        </div>

        <div class="flex justify-between mx-auto w-4/6">
          <router-link to="/coaches">
            <MyButton
              type="button"
              mode="primary-black"
            >
              Back
            </MyButton>
          </router-link>
          <MyButton>
            Add
          </MyButton>
        </div>
      </form>
    </MyCard>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      hourlyRate: null,
      description: '',
      areas: [],
      isLoading: false,
      isErrorVisible: false,
      isFormValid: true
    }
  },

  methods: {
    ...mapActions({
      addCoach: 'addCoach'
    }),

    resetForm () {
      this.firstName = ''
      this.lastName = ''
      this.hourlyRate = null
      this.description = ''
      this.areas = []
    },

    async onSubmit () {
      if (this.firstName === '' ||
        this.lastName === '' ||
        this.hourlyRate === null ||
        this.description === '' ||
        this.areas.length === 0) {
        this.isFormValid = false
        return
      }

      this.isLoading = true

      try {
        const newCoach = {
          firstName: this.firstName,
          lastName: this.lastName,
          hourlyRate: this.hourlyRate,
          description: this.description,
          areas: this.areas
        }

        this.addCoach(newCoach)
      } catch (error) {
        console.log(error)
        this.isErrorVisible = true
      } finally {
        this.resetForm()
        this.isLoading = false
        this.isFormValid = true
        this.$router.push('/coaches')
      }
    }
  }
}
</script>
