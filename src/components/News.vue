<template>
<div class="posts">
  <div class="post">
    <div class="post-head">
      <i class="ion-android-globe"></i>
      <h4>News</h4>
    </div>
    <div class="post-body">
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="post" v-for="post in posts">
    <div class="post-head">
      <h4>{{post.title | capitalize}}</h4>
    </div>
    <div class="post-body">
      <p>{{post.body | capitalize}}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  filters: {
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
</script>
