<template>
  <section v-if="book" class="details">
    <div class="flex space-between align-center">
      <div>
        <a @click="sendBack()" class="button"> back</a>
        <a @click="openReview()" class="button">{{ add }}</a>
      </div>
    </div>
    <div class="card">
      <img :src="book.thumbnail" />
      <div class="text">
        <div>
          <h3>{{ book.title }}</h3>
          <div>{{ book.description }}</div>
        </div>
        <div>
          {{ book.listPrice.amount }}
          <span>{{ currency }}</span>
        </div>
      </div>
      <div v-if="show" class="flex">
        <div class="flex space-between">
          <div>
            <a class="button">
              <router-link v-bind:to="prevP">Prev </router-link></a
            >
          </div>
          <div>
            <a class="button">
              <router-link v-bind:to="nextP">{{ next }} </router-link></a
            >
          </div>
        </div>
      </div>
    </div>
    <book-review v-if="book.reviews" :reviews="book.reviews"> </book-review>
    <review-add
      v-if="review"
      @openReview="openReview"
      :book="book"
    ></review-add>
  </section>
</template>

<script>
import { bookService } from "@/services/book.service.js";
import ReviewAdd from "../cmps/ReviewAdd.vue";
import BookReview from "../cmps/BookReview.vue";
import eventBus from "@/services/eventBus.service.js";

export default {
  components: { ReviewAdd, BookReview },
  // name: "details",
  props: [],
  data() {
    return {
      book: "",
      review: false,
      add: "Add Review",
      next: "next",
      idx: "",
      nextP: "",
      prevP: "",
      show: true,
    };
  },
  async created() {
    console.log(this.$route.params);
    console.log(this.$route.params.id);
    this.book = await bookService.get(this.$route.params.id);
    // console.log(this.book);
    var books = this.$store.getters.booksToShow;
    console.log(books);
    var idx = books.findIndex((book) => book.id === this.$route.params.id);
    this.idx = idx;
    if (idx >= 0 && idx < books.length - 1)
      this.nextP = "/Details/" + books[idx + 1].id;
    if (idx > 0 && idx <= books.length - 1)
      this.prevP = "/Details/" + books[idx - 1].id;
  },
  methods: {
    openReview() {
      console.log(this.review);
      this.review = !this.review;
      this.add = this.add === "close" ? "add Review" : "close";
      this.show = !this.show;
    },
    sendBack() {
      console.log("hi");
      eventBus.$emit("visited", this.book.title);
      this.$router.push("/Books");
    },
  },
  computed: {
    currency() {
      let currency;
      switch (this.book.listPrice.currencyCode) {
        case "ILS":
          currency = "₪";
          break;
        case "EUR":
          currency = "€";
          break;
        case "USD":
          currency = "$";
          break;
        default:
          currency = "currency";
      }
      return currency;
    },
  },

  watch: {
    async "$route.params.id"(newVal, oldVal) {
      var books = this.$store.getters.booksToShow;
      var idx = books.findIndex((book) => book.id === this.$route.params.id);
      this.idx = idx;
      if (idx >= 0 && idx < books.length - 1)
        this.nextP = "/Details/" + books[idx + 1].id;
      if (idx > 0 && idx <= books.length - 1)
        this.prevP = "/Details/" + books[idx - 1].id;
      console.log(this.$route.params);
      console.log(this.$route.params.id);
      this.book = await bookService.get(this.$route.params.id);
    },
  },
};
</script>