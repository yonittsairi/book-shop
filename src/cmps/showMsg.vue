<template>
  <section v-show="msg" class="msg">You have just viewd: {{ msg }}</section>
</template>

<script>
import eventBus from "@/services/eventBus.service.js";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    setMsg(msgStr) {
      this.msg = msgStr;
      setTimeout(() => {
        this.msg = "";
      }, 3000);
    },
  },
  created() {
    //showMsg
    eventBus.$on("visited", this.setMsg);
  },
  destroyed() {
    eventBus.$off("visited", this.setMsg);
  },
};
</script>

