<template>
  <div class="header clearfix">
    <nav></nav>
    <h3 class="text-muted">Bookmarker</h3>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}
/* Make the masthead heading the same height as the navigation */
.header h3 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
  color: red;
}

@media screen and (min-width: 768px) {
  .header {
    margin-bottom: 30px;
  }
}
</style>
