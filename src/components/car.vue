<template>
  <div>
    <car-top></car-top>
    <car-list :list='list'></car-list>
    <count></count>
  </div>
</template>

<script>
import carTop from "./carTop";
import carList from "./carList";
import count from "./count";
export default {
  components: {
    carTop,
    carList,
    count
  },
  data(){
    return {
      list:[]
    }
  },
  mounted() {
    this.$http({
      url: "/data/car_list.data"
    }).then(res => {
      this.list = res.data;
    });
  }
};
</script>