<template>
  <br v-if="children.length === 1 && children[0].text === ''" />
  <span v-else><slot></slot></span>
</template>

<script>
  export default {
    props: ['children'],
  }
</script>

<style scoped>
</style>
