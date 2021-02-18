<template>
  <form class="form" action="">
    <div class="flex column align-center">
      <h1>Your Review</h1>
      <fieldset class="rating">
        <input
          id="demo-1"
          v-model="rev.rate"
          type="radio"
          name="rate"
          value="1"
        />
        <label htmlFor="demo-1">1 star</label>
        <input
          id="demo-2"
          v-model.number="rev.rate"
          type="radio"
          name="rate"
          value="2"
        />
        <label htmlFor="demo-2">2 stars</label>
        <input
          id="demo-3"
          v-model.number="rev.rate"
          type="radio"
          name="rate"
          value="3"
        />
        <label htmlFor="demo-3">3 stars</label>
        <input
          id="demo-4"
          v-model.number="rev.rate"
          type="radio"
          name="rate"
          value="4"
        />
        <label htmlFor="demo-4">4 stars</label>
        <input
          id="demo-5"
          v-model.number="rev.rate"
          type="radio"
          name="rate"
          value="5"
        />
        <label htmlFor="demo-5">5 stars</label>
        <div class="stars flex space-between">
          <label htmlFor="demo-1" aria-label="1 star" title="1 star"></label>
          <label htmlFor="demo-2" aria-label="2 stars" title="2 stars"></label>
          <label htmlFor="demo-3" aria-label="3 stars" title="3 stars"></label>
          <label htmlFor="demo-4" aria-label="4 stars" title="4 stars"></label>
          <label htmlFor="demo-5" aria-label="5 stars" title="5 stars"></label>
        </div>
      </fieldset>

      <div class="flex column">
        <textarea
          v-model="rev.txt"
          name="txt"
          class="textarea"
          cols="41"
          rows="800"
          type="text"
          required="{true}"
          placeholder="Leave Yor Review"
        ></textarea>
      </div>
      <a class="button" @click="addReview(rev)">add</a>
    </div>
  </form>
</template>

<script>
import { bookService } from "@/services/book.service.js";
import eventBus from "@/services/eventBus.service.js";
import { Utils } from "@/services/utils.service.js";

export default {
  props: { book: Object },
  data() {
    return { rev: { rate: 0, txt: "" } };
  },
  created() {
    console.log(this.book);
  },
  methods: {
    addReview(rev) {
      let book = { ...this.book };
      // console.log(book);
      let id = Utils.getRandomId();
      let review = { id: id, ...rev };

      if (book.reviews && book.reviews.length > 0) {
        book.reviews.push(review);
      }
      // console.log(book);
      else {
        book.reviews = [];
        book.reviews.push(review);
      }
      bookService.save(book);
      this.$emit("openReview");
      eventBus.$emit("visited", this.book.title + " review added");
    },
  },
  computed: {},
};
</script>