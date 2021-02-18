<template>
  <section>
    <form>
      <label>
        Add Book
        <input
          name="title"
          @input.prevent="findBooks(title)"
          v-model="title"
          placeholder="Search"
        />
      </label>
    </form>
    <section class="container">
      <section v-if="books" class="card-list">
        <ul
          v-for="book in books"
          @click="saveBook(book)"
          :key="book.id"
          class="card"
        >
          <img v-bind:src="book.volumeInfo.imageLinks.thumbnail" />
          <h3>{{ book.volumeInfo.title }}</h3>
          <h3>{{ book.volumeInfo.language }}</h3>
          <h3>{{ book.volumeInfo.pageCount }}</h3>
          <h3>{{ book.volumeInfo.publishDate }}</h3>
          <li>
            {{ book.saleInfo.amount }}
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import { bookService } from "@/services/book.service.js";
import { Utils } from "@/services/utils.service.js";

export default {
  props: [],
  name: "BookAdd",
  data() {
    return {
      title: "",
      books: [],
    };
  },
  created() {},
  methods: {
    async findBooks(search) {
      console.log(search);
      let books = await bookService.findBooks(search);
      this.books = books;
    },
    async saveBook(book) {
      var amount = Utils.getRandomInt(1, 100);
      var bookTo = {
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors,
        publishedDate: book.volumeInfo.publishDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        categories: book.volumeInfo.categories,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        language: book.volumeInfo.language,
        listPrice: {
          amount: amount,
          currencyCode: "ILS",
          isOnSale: true,
        },
      };
      console.log(bookTo);
      let a = await this.$store.dispatch({
        type: "saveBook",
        book: { ...bookTo },
      });
      this.$router.push("/Books");
    },
  },
};
</script>