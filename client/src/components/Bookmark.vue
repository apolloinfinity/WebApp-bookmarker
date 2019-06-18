<template>
  <div>
    <b-jumbotron>
      <h2>Bookmark you favorite websites</h2>
      <AddBookmark/>
    </b-jumbotron>
  </div>
</template>

<script>
import AddBookmark from "./AddBookmark";
export default {
  name: "Bookmark",
  components: {
    AddBookmark
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .jumbotron {
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }

  .jumbotron .btn {
    padding: 14px 24px;
    font-size: 21px;
  }
}
</style>
