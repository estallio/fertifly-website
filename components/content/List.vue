<template>
  <ul v-if="listItem === 'number'">
    <slot></slot>
  </ul>
  <ol v-else>
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    props: ['listItem'],
  }
</script>

<style scoped>
  li {
    color: #000000;
  }
  ul, ol {
    margin-bottom: 0;
  }
</style>
