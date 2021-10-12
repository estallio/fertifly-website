<template>
  <a
    :href="fileUrl + '?dl='"
    target="_self"
    rel="noreferrer"
    class="file-link"
  >
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: ['fileUrl'],
  }
</script>

<style scoped>
  .file-link {
    text-decoration: underline;
    color: #0d8d2d;

    font-size: 18px;
    line-height: 30px;
  }
</style>
