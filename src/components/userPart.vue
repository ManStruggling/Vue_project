<template>
  <div>
    <user-top></user-top>
    <user></user>
    <user-set></user-set>
  </div>
</template>

<script>
import store from "../store";

import user from "./user";
import userSet from "./userSet";
import userTop from "./userTop";
export default {
  components: {
    user,
    userSet,
    userTop
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.user.auth) {
      next();
    } else {
      next("/login");
    }
  }
};
</script>