<template>
  <div>
    <div class="pro_bigImg">
      <img src="../assets/upload/goods007.jpg">
    </div>
    <section class="pro_baseInfor">
      <h2>白沙500g小粒花生米</h2>
      <p>
        <strong>39.80</strong>
        <del>49.80</del>
      </p>
    </section>
    <dl class="pro_attr">
      <dt>产品属性信息</dt>
      <dd>
        <ul>
          <li>
            <span>上市时间</span>
            <em>2015年09月</em>
          </li>
          <li>
            <span>产品规格</span>
            <em>1斤装</em>
          </li>
          <li>
            <span>产品重量</span>
            <em>0.5kg</em>
          </li>
          <li>
            <span>包装方式</span>
            <em>散装</em>
          </li>
          <li>
            <span>保质期</span>
            <em>6个月</em>
          </li>
          <li>
            <span>所属品牌</span>
            <em>三星</em>
          </li>
        </ul>
      </dd>
    </dl>
    <aside class="btmNav">
      <a style="background:#64ab5b;color:white;text-shadow:none;">加入购物车</a>
      <a style="background:#87a983;color:white;text-shadow:none;">加入常购单</a>
    </aside>
    <div style="height: 1.5rem;"></div>
  </div>
</template>

<script>
import $ from "../assets/js/jquery-1.7.2";
export default {
  mounted() {
    $(".des_icon").click(function() {
      $(this).toggleClass("asc_icon");
    });
    $(".drop_icon").click(function() {
      $(".drop_list").toggle();
      $(".drop_list li a").click(function() {
        $(this)
          .parents(".drop_list")
          .hide();
      });
    });
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