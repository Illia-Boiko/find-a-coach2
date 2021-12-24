<template>
  <MyLoader v-if="isLoading" />
  <MyDialog v-model:isVisible="isErrorVisible">
    Error! Failed to fetch!
  </MyDialog>
  <form @submit.prevent="addNewRequest">
    <div class="flex flex-col mb-6 mx-auto">
      <label for="emailForRequest">Your email</label>
      <input
        class="border border-gray-400"
        id="emailForRequest"
        type="text"
        v-model="email"
      >
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="3"
        class="border border-gray-400 mb-4"
        v-model="message"
       ></textarea>
        <MyButton class="w-min whitespace-nowrap">
          Send a message
        </MyButton>
      <!-- <p class="text-red-400" v-if="!isValidForm">*Please, enter a correct value</p> -->
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      message: '',
      isLoading: false,
      isErrorVisible: false
    }
  },

  methods: {
    ...mapActions({
      addRequest: 'addRequest'
    }),

    async addNewRequest () {
      this.isLoading = true

      try {
        const newRequest = {
          email: this.email,
          message: this.message,
          coachId: this.$route.params.coachId
        }

        await this.addRequest(newRequest)
      } catch (error) {
        this.isErrorVisible = true
      } finally {
        this.email = ''
        this.message = ''
        this.isLoading = false
      }
    }
  }
}
</script>
