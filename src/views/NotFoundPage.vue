<template>
  <h2 class="text-4xl mb-2">Not found page.</h2>
  <p class="text-xl">Try to visit:
    <router-link to="/">
      <MyButton>Coaches</MyButton>
    </router-link>
      or
    <router-link to="/requests">
      <MyButton>Requests</MyButton>
    </router-link>
  </p>
</template>
