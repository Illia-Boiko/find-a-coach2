<template>
  <MyLoader v-if="isLoading" />
  <MyDialog v-model:isVisible="isErrorVisible">
    Error! Failed to fetch!
  </MyDialog>
  <MyCard>
    <form @submit.prevent="downloadRequests" class="mb-8">
      <label for="selectedCoach">{{'Requests to: '}}</label>
      <select
        v-model="selectedCoach"
        id="selectedCoach"
        class="border border-gray-400"
      >
        <option disabled value="">Choose a coach</option>
        <option
          v-for="coach in coaches"
          :key="coach.id"
          :value="coach.id"
        >
          {{ coach.firstName + ' ' + coach.lastName }}
        </option>
      </select>
      <MyButton class="ml-4">Download</MyButton>
      <p v-if="!isValidSelect" class="text-red-500">*Please choose a value</p>
    </form>
    <ul class="flex flex-col gap-8">
      <RequestItem
        v-for="request in requests"
        :key="request.id"
        :email="request.email"
        :message="request.message"
      />
      <p v-if="!requests.length">List of requests is empty... Please choose a coach and download requests</p>
    </ul>
  </MyCard>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import RequestItem from './RequestItem.vue'

export default {
  components: { RequestItem },
  name: 'RequestList',

  data () {
    return {
      requests: [],
      isLoading: false,
      isErrorVisible: false,
      selectedCoach: '',
      isValidSelect: true
    }
  },

  computed: {
    ...mapGetters({
      requestsFromServer: 'getRequestsArray',
      coaches: 'getCoaches'
    })
  },

  methods: {
    ...mapActions([
      'loadRequests',
      'loadCoaches'
    ]),

    async downloadRequests () {
      if (this.selectedCoach === '') {
        this.isValidSelect = false
        return
      }

      this.isLoading = true

      try {
        await this.loadRequests(this.selectedCoach)
        this.requests = [...this.requestsFromServer].reverse()
      } catch (error) {
        console.log(error)
        this.isErrorVisible = true
      } finally {
        this.isLoading = false
      }
    }
  },

  async created () {
    this.isLoading = true
    console.log(this.coaches)

    try {
      await this.loadCoaches()
    } catch (error) {
      console.log(error)
      this.isErrorVisible = true
    } finally {
      this.isLoading = false
    }
  }
}
</script>
