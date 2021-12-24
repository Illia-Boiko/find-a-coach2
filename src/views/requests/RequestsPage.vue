<template>
  <h2 class="text-center text-4xl mb-8">Requests</h2>
  <RequestList />
</template>

<script>
import RequestList from './RequestList.vue'

export default {
  components: { RequestList },
  name: 'RequestsPage'
}
</script>
