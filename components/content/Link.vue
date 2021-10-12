<template>
  <a
    :href="linkUrl"
    :target="sameTab ? '_self' : '_blank'"
    rel="noreferrer"
    class="link"
  >
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: ['linkUrl', 'sameTab'],
  }
</script>

<style scoped>
  .link {
    text-decoration: underline;
    color: #0d8d2d;

    font-size: 18px;
    line-height: 30px;
  }
</style>
