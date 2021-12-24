<template>
  <div class="mb-8">
    <p class="text-xl">Find your coach</p>
    <input id="frontend" v-model="areasOfWork.frontend" type="checkbox" @change="getFiltered" value="frontend">
    <label for="frontend">
      Frontend
    </label>
    <input id="backend" v-model="areasOfWork.backend" type="checkbox" @change="getFiltered" value="backend">
    <label for="backend">
      Backend
    </label>
    <input id="career" v-model="areasOfWork.career" type="checkbox" @change="getFiltered" value="career">
    <label for="career">
      Career
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      areasOfWork: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },

  name: 'CoachFilter',

  methods: {
    getFiltered () {
      this.$emit('getFiltered', this.areasOfWork)
    }
  },

  emits: ['getFiltered']
}
</script>
