<template>
  <MyLoader v-if="isLoading" />
  <MyDialog v-model:isVisible="isErrorVisible">
    Error! Failed to fetch!
  </MyDialog>
  <MyCard>
    <h2 class="text-center text-2xl mb-8">You need to login or sign up for visit the requests page</h2>
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col mb-6 mx-auto w-4/6">
        <label for="email">Email:</label>
        <input
          class="border border-gray-400"
          id="email"
          type="email"
          v-model.trim="email"
        >
        <label for="password">Password:</label>
        <input
          class="border border-gray-400"
          id="password"
          type="password"
          v-model.trim="password"
        >
        <p class="text-red-400" v-if="!isValidForm">*Please, enter a correct value</p>
      </div>
      <div class="flex justify-between mx-auto w-4/6">
        <MyButton
          type="button"
          mode="primary-black"
          @click="switchForm"
        >
          {{ modeOfForm === 'login' ? 'Sign up' : 'Login' }}
        </MyButton>
        <MyButton>
          {{ modeOfForm === 'login' ? 'Login' : 'Sign up' }}
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
      email: '',
      password: '',
      isValidForm: true,
      modeOfForm: 'login',
      isLoading: false,
      isErrorVisible: false
    }
  },

  methods: {
    ...mapActions({
      signup: 'signup',
      login: 'login'
    }),

    async onSubmit () {
      try {
        if (this.password.length <= 8 || this.email.length === 0 || !this.email.includes('@')) {
          this.isValidForm = false
          console.log(123)

          return
        } else {
          this.isValidForm = true
          this.isLoading = true

          const authData = {
            email: this.email,
            password: this.password
          }

          if (this.modeOfForm === 'login') {
            await this.login(authData)
          } else if (this.modeOfForm === 'signUp') {
            await this.signup(authData)
          }

          this.$router.push('/coaches')
        }
      } catch (error) {
        console.log(error)
        this.isErrorVisible = true
      } finally {
        this.email = ''
        this.password = ''
        this.isLoading = false
      }
    },

    switchForm () {
      if (this.modeOfForm === 'login') {
        this.modeOfForm = 'signUp'
      } else if (this.modeOfForm === 'signUp') {
        this.modeOfForm = 'login'
      }
    }
  }
}
</script>
