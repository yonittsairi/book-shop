<template>
  <section class="flex column card review">
    <h3>
      Reviews <span> {{ star }}{{ sum }}</span> <span>({{ length }})</span>
    </h3>
    <div class="flex wrap">
      <div
        class="flex align-center space-between"
        v-for="review in reviews"
        :key="review.id"
      >
        <div class="star">
          {{ star.repeat(review.rate) }}
        </div>
        <span> {{ review.txt }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { reviews: Array },
  data() {
    return {
      star: "★",
    };
  },
  methods: {},
  computed: {
    length() {
      return this.reviews.length;
    },
    sum() {
      let i = this.reviews.reduce((acc, item) => {
        console.log(item.rate);
        acc += +item.rate;
        console.log(acc);
        return acc;
      }, 0);
      return (i / +this.reviews.length).toFixed(1);
    },
  },
};
</script>