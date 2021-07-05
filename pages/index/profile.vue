<template>
  <nuxt-child />
</template>

<script>
export default {
  name: 'profile-entry',
  middleware: ['authenticated'],
}
</script>