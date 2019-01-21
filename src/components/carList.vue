<template>
  <div>
    <dl class="cart">
      <dt>
        <label>
          <input type="checkbox">全选
        </label>
        <a class="edit">编辑</a>
      </dt>
      <dd v-for="(item,index) of list" :key=index>
        <input type="checkbox">
        <router-link to="/detail" class="goodsPic">
          <img :src="item.url">
        </router-link>
        <div class="goodsInfor">
          <h2>
            <router-link to="/detail">{{item.name}}</router-link>
            <span>{{item.count}}</span>
          </h2>
          <div class="priceArea">
            <strong>{{item.nowPrice}}</strong>
            <del>{{item.oldPrice}}</del>
          </div>
          <div class="numberWidget">
            <input type="button" value="-" class="minus">
            <input type="text" value="1" disabled class="number">
            <input type="button" value="+" class="plus">
          </div>
        </div>
        <a class="delBtn">删除</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props:['list']
}
</script>