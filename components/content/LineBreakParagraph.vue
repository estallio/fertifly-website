<template>
  <br v-if="children.length === 1 && children[0].text === ''" />
  <p v-else><slot></slot></p>
</template>

<script>
  export default {
    props: ['children'],
  }
</script>

<style scoped>
</style>
