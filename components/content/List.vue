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
    font-size: 18px;
    line-height: 30px;
  }
  ul, ol {
    margin-bottom: 0;
  }
</style>
