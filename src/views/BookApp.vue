<template>
  <section class="home">
    <!-- <h1>Book Shop</h1> -->
    <book-filter @filtered="loadBooks"> </book-filter>
    <book-list :books="booksToShow"></book-list>
  </section>
</template>

<script>
// import { bookService } from "@/services/book.service.js";
import BookList from "../cmps/BookList.vue";
import BookFilter from "../cmps/BookFilter.vue";

export default {
  name: "BookApp",
  components: { BookList, BookFilter },
  props: [],
  data() {
    return {};
  },

  async created() {
    this.loadBooks();
  },
  methods: {
    async loadBooks() {
      await this.$store.dispatch({ type: "loadBooks" });
    },
    async removeBook(bookId) {
      await this.$store.dispatch({ type: "removeBook", bookId });
    },
    setFilter(filterBy) {
      console.log(filterBy);
      this.$store.commit({ type: "setFilter", filterBy });
    },
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
  },
};
</script>