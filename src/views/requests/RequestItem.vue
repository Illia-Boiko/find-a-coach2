<template>
  <li>
    <MyCard mode="pink" class="flex flex-col gap-4 items w-4/6">
      <h3 class="text-2xl text-center">
        {{ email }}
      </h3>
      <p>
        {{ message }}
      </p>
    </MyCard>
  </li>
</template>

<script>
export default {
  name: 'RequestItem',

  props: {
    email: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    }
  }
}
</script>
