<template>
<div class="bg-gradient-to-r from-indigo-100 to-pink-100">
  <TheHeader />
  <main class="main mx-auto shadow-lg w-3/4 p-8 bg-white">
    <router-view />
  </main>
</div>
</template>

<script>
// import { mapActions } from 'vuex'
import TheHeader from './layouts/TheHeader.vue'

export default {
  components: {
    TheHeader
  }

  // methods: {
  //   ...mapActions({
  //     loadRequests: 'loadRequests'
  //   })
  // },

  // mounted () {
  //   this.loadRequests()
  // }
}
</script>
