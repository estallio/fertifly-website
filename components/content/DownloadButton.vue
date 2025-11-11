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
    text-decoration: none;

    color: #3F3732;
    background-color: #edddad;

    display: block;

    border-radius: 3px;
    padding: 6px 15px 5px 15px;

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
    background-color: #3F3732;
    color: #FFFEF3;
  }
  .link-button span {
    padding-left: 10px;
  }
</style>
