<template>
  <button
    class="border-solid px-4 transition-colors"
    :class="typeOfButton">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    mode: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    typeOfButton () {
      switch (this.mode) {
        case 'primary':
          return ' border-white border-2 bg-transparent text-white hover:bg-pink-400'
        case 'primary-black':
          return ' border-black border bg-transparent text-black hover:bg-pink-200'
        default:
          return ' border-gray-500 bg-indigo-300 text-black hover:bg-indigo-400'
      }
    }
  }
}
</script>
