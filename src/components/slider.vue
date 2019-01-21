<template>
  <swipe id="slide" class="my-swipe" :speed="100" :auto="2000">
    <swipe-item class="slide1">
      <img src="../assets/upload/slide001.jpg" alt style="width:100%;height:100%;">
    </swipe-item>
    <swipe-item class="slide2">
      <img src="../assets/upload/slide002.jpg" alt style="width:100%;height:100%;">
    </swipe-item>
  </swipe>
</template>

<script scoped>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";

export default {
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  },
  mounted() {

  },

};
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
