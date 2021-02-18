<template>
  <section class="container">
    <section class="card-list">
      <book-preview
        v-for="book in books"
        :book="book"
        :key="book.id"
        @selected="selected"
      ></book-preview>
    </section>
  </section>
</template>

<script>
import BookPreview from "./BookPreview.vue";

export default {
  components: { BookPreview },
  props: { books: Array },
  data() {
    return {};
  },
  methods: {
    selected(book) {
      this.$emit("selected", book);
    },
  },
};
</script>