<template>
  <br v-if="children.length === 1 && children[0].text === ''" />
  <Fragment v-else><slot></slot></Fragment>
</template>

<script>
  export default {
    props: ['children'],
  }
</script>

<style scoped>
</style>
