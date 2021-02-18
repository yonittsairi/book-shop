<template>
  <section v-if="book">
    <router-link :to="url">
      <ul class="card">
        <li>
          <!-- <b>{{ book.description }}</b> -->
          <img :src="book.thumbnail" />
        </li>
        <h3>{{ book.title }}</h3>
        <li>
          {{ book.listPrice.amount }}
          <span>{{ currency }}</span>
        </li>
      </ul></router-link
    >
  </section>
</template>

<script>
export default {
  props: { book: Object },
  data() {
    return {};
  },
  created() {
    // console.log(this.book);
  },
  methods: {
    selected() {
      this.$emit("selected", this.book);
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
    url() {
      let url = "/details/" + this.book.id;
      return url;
    },
  },
};
</script>