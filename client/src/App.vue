<template>
  <div id="app" class="container">
    <Header/>
    <Bookmark/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Bookmark from "./components/Bookmark";
export default {
  name: "app",
  components: {
    Header,
    Bookmark
  }
};
</script>

<style>
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .container {
    max-width: 730px;
  }
}

@media screen and (min-width: 768px) {
  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
