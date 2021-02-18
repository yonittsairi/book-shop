<template>
  <section>
    <form class="filter">
      <label>
        <input
          class="in"
          name="title"
          @input="st()"
          placeholder="Search"
          v-model.number="filterBy.title"
        />
      </label>
      <label>
        From Price:
        <input
          class="in"
          min="100"
          name="minPrice"
          type="number"
          placeholder=""
          v-model.number="filterBy.minPrice"
          @input="st()"
        />
      </label>

      <label>
        To Price:
        <input
          class="in"
          name="maxPrice"
          type="number"
          @input="st()"
          v-model.number="filterBy.maxPrice"
        />
      </label>
      <!-- <font-awesome-icon icon="user-secret" /> -->
      <span> <font-awesome-icon icon="search" size="lg" /></span>
    </form>
  </section>
</template>

<script>
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
export default {
  props: [],
  data() {
    return {
      filterBy: {
        title: "",
        minPrice: 0,
        maxPrice: Infinity,
      },
    };
  },
  methods: {
    st() {
      this.$store.dispatch({ type: "loadBooks", filterBy: this.filterBy });
    },
  },
};
</script>