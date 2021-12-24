<template>
  <li>
    <MyCard mode="pink" class="flex flex-col gap-4 items w-4/6 mx-auto">
      <h3 class="text-2xl text-center">{{ firstName + ' ' + lastName }}</h3>
      <p>{{ '$' + hourlyRate + '/hour' }}</p>
      <div class="flex">
        <div
          class="py-2 px-4 mr-2"
          v-for="direction in areas"
          :class="directionColor(direction)"
          :key="direction"
        >
          {{ direction }}
        </div>
      </div>
      <div class="flex justify-between">
        <router-link :to="'/coaches/' + id + '/contact'">
          <MyButton>Contact</MyButton>
        </router-link>
        <router-link :to="'/coaches/' + id">
          <MyButton mode="primary-black">Details</MyButton>
        </router-link>
      </div>
    </MyCard>
  </li>
</template>

<script>
import { directionColor } from '@/core/functions.js'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    hourlyRate: {
      type: Number,
      required: true
    },

    areas: {
      type: Array,
      required: true
    }
  },

  methods: {
    directionColor
  }
}
</script>
