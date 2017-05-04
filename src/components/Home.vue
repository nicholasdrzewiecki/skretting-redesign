<template>
<div class="posts">
  <div class="post">
    <div class="post-head">
      <i class="ion-home"></i>
      <h4>Home</h4>
    </div>
    <div class="post-body">
      <p>{{date}}</p>
    </div>
  </div>
</div>
</template>

<script>
import moment from "moment"

export default {
  data() {
    return {
      date: moment().format("dddd, LL, h:mm:ss a")
    }
  },
  methods: {
    time() {
      this.date = moment().format("dddd, LL, h:mm:ss a");
    }
  },
  mounted() {
    window.setInterval(this.time, 1000);
  }
}
</script>
