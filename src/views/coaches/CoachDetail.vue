<template>
  <section>
    <MyCard class="flex flex-col gap-8">
      <MyCard mode="pink" class="flex flex-col gap-4 items w-4/6">
        <h3 class="text-3xl text-center">{{ selectedCoach.firstName + ' ' + selectedCoach.lastName }}</h3>
        <p>{{ '$' + selectedCoach.hourlyRate + '/hour' }}</p>
      </MyCard>
      <MyCard mode="pink" class="flex flex-col gap-4 items w-4/6">
        <div class="flex justify-between">
          <p class="text-xl">Interested? Contact me!</p>
          <router-link v-show="!isFormVisible" :to="'/coaches/' + selectedCoach.id">
            X
          </router-link>
        </div>
        <router-link :to="'/coaches/' + selectedCoach.id + '/contact'">
          <MyButton v-show="isFormVisible">Contact</MyButton>
        </router-link>
        <router-view></router-view>
      </MyCard>
      <MyCard mode="pink" class="flex flex-col gap-4 items w-4/6">

      <div class="flex">
        <div
          class="py-2 px-4 mr-2"
          v-for="direction in selectedCoach.areas"
          :class="directionColor(direction)"
          :key="direction"
        >
          {{ direction }}
        </div>
      </div>
        <p>{{ selectedCoach.description }}</p>
      </MyCard>
    </MyCard>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { directionColor } from '@/core/functions.js'

export default {
  data () {
    return {
      selectedCoach: null
    }
  },

  computed: {
    ...mapGetters({
      coaches: 'getCoaches'
    }),

    isFormVisible () {
      return !this.$route.path.includes('contact')
    }
  },

  props: ['coachId'],

  methods: {
    loadCoach (route) {
      const selected = route
      this.selectedCoach = this.coaches.find(coach => coach.id === selected)
    },

    directionColor
  },

  watch: {
    coachId (newRoute) {
      this.loadCoach(newRoute)
    }
  },

  created () {
    this.loadCoach(this.coachId)
  }
}
</script>
