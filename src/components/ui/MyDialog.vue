<template>
  <div
    v-if="isVisible"
    @click="hideDialog"
    class="fixed bg-gray-500 top-0 right-0 left-0 bottom-0 flex items-center bg-opacity-40"
  >
    <MyCard @click.stop class="flex justify-between gap-8">
      <p class="text-3xl">
        <slot></slot>
      </p>
      <span class="self-center cursor-pointer" @click="hideDialog">X</span>
    </MyCard>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',

  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    hideDialog () {
      this.$emit('update:isVisible', false)
    }
  }
}
</script>
