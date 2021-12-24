<template>
  <h2 class="text-center text-4xl mb-8">All Coaches</h2>
  <!-- <MyCard class="mb-8"> -->
    <div v-if="isAddFormVisible" class="flex flex-col mx-auto mb-4">
      <router-link v-if="$store.getters.isLogged" class="self-end" to="/coaches/addnewcoach">
        <MyButton>Add new coach</MyButton>
      </router-link>
    </div>
    <router-view></router-view>
  <!-- </MyCard> -->
  <CoachList />
</template>

<script>
import CoachList from './CoachList.vue'

export default {
  components: { CoachList },
  name: 'AllCoachesPage',

  computed: {
    isAddFormVisible () {
      return !this.$route.path.includes('addnewcoach')
    }
  }
}
</script>
