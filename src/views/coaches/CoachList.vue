<template>
  <MyLoader v-if="isLoading" />
  <MyDialog v-model:isVisible="isErrorVisible">
    Error! Failed to fetch!
  </MyDialog>
  <MyCard>
    <div class="flex justify-between">
      <CoachFilter @getFiltered="getFilteredCoaches" />
      <MyButton class="h-8" mode="primary-black" @click="refresh">Refresh</MyButton>
    </div>

    <ul class="flex flex-col gap-8">
      <CoachItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :hourlyRate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </ul>
    <p v-if="!filteredCoaches.length">List of coaches is empty... Please, choose some selectors.</p>
  </MyCard>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CoachItem from './CoachItem.vue'
import CoachFilter from './CoachFilter.vue'

export default {
  data () {
    return {
      filteredCoaches: [],
      isLoading: false,
      isErrorVisible: false
    }
  },

  components: {
    CoachItem,
    CoachFilter
  },

  computed: {
    ...mapGetters({
      coaches: 'getCoaches'
    })
  },

  methods: {
    ...mapActions({
      loadCoaches: 'loadCoaches'
    }),

    getFilteredCoaches (params) {
      this.filteredCoaches = this.coaches.filter(coach => {
        if (coach.areas.includes('frontend') && params.frontend) {
          return true
        }
        if (coach.areas.includes('backend') && params.backend) {
          return true
        }
        if (coach.areas.includes('career') && params.career) {
          return true
        }

        return false
      })
    },

    async refresh () {
      this.isLoading = true

      try {
        await this.loadCoaches()
        this.filteredCoaches = [...this.coaches]
      } catch (error) {
        console.log(error)
        this.isErrorVisible = true
      } finally {
        this.isLoading = false
      }
    }
  },

  mounted () {
    this.filteredCoaches = [...this.coaches]
  },

  async created () {
    await this.refresh()
  }
}
</script>
