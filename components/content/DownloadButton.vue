<template>
  <a
    :href="fileUrl + '?dl='"
    target="_self"
    rel="noreferrer"
    class="link-button"
  >
    <font-awesome-icon icon="file-download" />
    <span>{{ title }}</span>
  </a>
</template>

<script>
  export default {
    props: ['fileUrl', 'title'],
  }
</script>

<style scoped>
  .link-button {
    text-decoration: none !important;
    color: #3F3732 !important;

    display: block;

    border: 1px solid #3F3732;
    border-radius: 3px;
    padding: 6px 15px 5px 15px;

    background-color: #fff;

    font-size: 18px;
    line-height: 30px;

    max-width: 860px;
    margin: 0 auto;

    margin-top: 10px;
    margin-bottom: 10px;

    animation: none;
    transition: none;
  }
  .link-button:hover {
    /* box-shadow: 0 0 2px 1px rgba(210, 210, 210, 0.7); */
  }
  .link-button:hover span {
    color: #3F3732 !important;
    text-decoration: underline !important;
  }
  .link-button span {
    padding-left: 10px;
  }
</style>
