<template>
  <header
    class="header bg-gradient-to-r from-indigo-400 via-red-300 to-pink-500
    relative top-0 left-0 right-0 flex justify-between items-center text-white px-28"
  >
    <router-link to="/">
      <h1 class="text-4xl font-medium cursor-pointer hover:text-gray-200">Find a coach</h1>
    </router-link>
    <nav class="flex gap-3">
      <router-link to="/">
        <MyButton mode="primary">All Coaches</MyButton>
      </router-link>
      <router-link v-if="$store.getters.isLogged" to="/requests">
        <MyButton mode="primary">Requests</MyButton>
      </router-link>
      <router-link v-if="!$store.getters.isLogged" to="/auth">
        <MyButton mode="primary">Authorization</MyButton>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>
