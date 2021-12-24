<template>
  <div class="bg-gray-100 rounded-3xl shadow-xl p-8 mx-auto" :class="typeOfCard">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCard',

  props: {
    mode: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    typeOfCard () {
      return this.mode === 'pink'
        ? 'border-t border-pink-400'
        : ''
    }
  }
}
</script>
