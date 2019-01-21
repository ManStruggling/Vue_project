<template>
  <dl class="tab_proList">
    <dt>
      <a class="currStyle">热销</a>
      <a>新品</a>
      <a>打折</a>
    </dt>
    <dd>
      <ul>
        <li v-for="(item,index) in goodsMsg" :key=index>
          <router-link to="detail" class="goodsPic">
            <img :src="item.url">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">{{item.name}}</router-link>
            </h2>
            <p>
              <del>{{item.oldPrice}}</del>
            </p>
            <p>
              <strong class="price">{{item.nowPrice}}</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
      </ul>
    </dd>
    <dd style="display: none;">
      <ul>
        <li>
          <router-link to="detail" class="goodsPic">
            <img src="../assets/upload/goods004.jpg">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">新鲜生菜两斤装特惠</router-link>
            </h2>
            <p>
              <del>5.90</del>
            </p>
            <p>
              <strong class="price">3.90</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
        <li>
          <router-link to="detail" class="goodsPic">
            <img src="../assets/upload/goods008.jpg">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">新鲜生菜两斤装特惠</router-link>
            </h2>
            <p>
              <del>5.90</del>
            </p>
            <p>
              <strong class="price">3.90</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
        <li>
          <router-link to="detail" class="goodsPic">
            <img src="../assets/upload/goods009.jpg">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">新鲜生菜两斤装特惠</router-link>
            </h2>
            <p>
              <del>5.90</del>
            </p>
            <p>
              <strong class="price">3.90</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
      </ul>
    </dd>
    <dd style="display: none;">
      <ul>
        <li>
          <router-link to="detail" class="goodsPic">
            <img src="../assets/upload/goods005.jpg">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">新鲜生菜两斤装特惠</router-link>
            </h2>
            <p>
              <del>5.90</del>
            </p>
            <p>
              <strong class="price">3.90</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
        <li>
          <router-link to="detail" class="goodsPic">
            <img src="../assets/upload/goods006.jpg">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">新鲜生菜两斤装特惠</router-link>
            </h2>
            <p>
              <del>5.90</del>
            </p>
            <p>
              <strong class="price">3.90</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
        <li>
          <router-link to="detail" class="goodsPic">
            <img src="../assets/upload/goods007.jpg">
          </router-link>
          <div class="goodsInfor">
            <h2>
              <router-link to="detail">新鲜生菜两斤装特惠</router-link>
            </h2>
            <p>
              <del>5.90</del>
            </p>
            <p>
              <strong class="price">3.90</strong>
            </p>
            <a class="addToCart">~</a>
          </div>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
import $ from "../assets/js/jquery-1.7.2";
export default {
  props:['goodsMsg'],
  mounted() {
    $(".tab_proList dd")
      .eq(0)
      .show()
      .siblings(".tab_proList dd")
      .hide();
    $(".tab_proList dt a")
      .eq(0)
      .addClass("currStyle");
    $(".tab_proList dt a").click(function() {
      var liindex = $(".tab_proList dt a").index(this);
      $(this)
        .addClass("currStyle")
        .siblings()
        .removeClass("currStyle");
      $(".tab_proList dd")
        .eq(liindex)
        .fadeIn(150)
        .siblings(".tab_proList dd")
        .hide();
    });
    //飞入动画，具体根据实际情况调整
    $(".addToCart").click(function() {
      $(".hoverCart a").html(parseInt($(".hoverCart a").html()) + 1); /*测试+1*/
      var shopOffset = $(".hoverCart").offset();
      var cloneDiv = $(this)
        .parent()
        .siblings(".goodsPic")
        .clone();
      var proOffset = $(this)
        .parent()
        .siblings(".goodsPic")
        .offset();
      cloneDiv.css({
        position: "absolute",
        top: proOffset.top,
        left: proOffset.left
      });
      $(this)
        .parent()
        .siblings(".goodsPic")
        .parent()
        .append(cloneDiv);
      cloneDiv.animate(
        {
          width: 0,
          height: 0,
          left: shopOffset.left,
          top: shopOffset.top,
          opacity: 1
        },
        "slow"
      );
    });
  }
};
</script>