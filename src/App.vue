<template>
  <div id="app">
    <div class="head">
      <h1>Bookshop</h1>
      <div class="nav">
        <router-link to="/"> Home </router-link>
        <router-link to="/About"> About </router-link>
        <router-link to="/Books"> Buy Books </router-link>
        <router-link to="/BookAdd"> Add Books </router-link>
      </div>
    </div>
    <show-msg></show-msg>
    <div class="guf"><router-view></router-view></div>
  </div>
</template>
<script>
import BookApp from "@/views/BookApp.vue";
import BookDetails from "@/views/BookDetails.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ShowMsg from "./cmps/showMsg.vue";

export default {
  components: {
    BookApp,
    BookDetails,
    Home,
    About,
    ShowMsg,
  },
  created() {
    this.$store.dispatch({ type: "loadBooks" });
  },
};
</script>



