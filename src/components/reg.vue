<template>
  <div>
    <header>
      <a href="javascript:history.go(-1);" class="iconfont backIcon">&lt;</a>
      <h1>注册</h1>
    </header>
    <div style="height:1rem;"></div>
    <mark class="formMark">这里放电话做什么，请联系400-8200-5385</mark>
    <ul class="formarea">
      <li>
        <label class="lit">账号：</label>
        <input type="tel" placeholder="手机号码" class="textbox">
      </li>
      <li>
        <label class="lit">密码：</label>
        <input type="password" placeholder="设置密码" class="textbox">
      </li>
      <li>
        <label class="lit">确认密码：</label>
        <input type="password" placeholder="确认密码" class="textbox">
      </li>
      <li>
        <label class="lit">所在城市：</label>
        <select>
          <optgroup label="山东省">
            <option>德州市</option>
          </optgroup>
        </select>
      </li>
      <li>
        <label class="lit">餐馆名称：</label>
        <input type="text" placeholder="餐馆名称" class="textbox">
      </li>
      <li>
        <label class="lit">收货人：</label>
        <input type="text" placeholder="收件人真实姓名" class="textbox">
      </li>
      <li>
        <label class="lit">联系电话：</label>
        <input type="tel" placeholder="联系电话" class="textbox">
      </li>
      <li>
        <label class="lit">收货地址：</label>
        <input type="text" placeholder="区-街道-小区-门牌号" class="textbox">
      </li>
      <li class="liLink">
        <a href="article.html" class="fl">《用户协议》</a>
        <a href="login.html" class="fr">已有账号，登陆</a>
      </li>
      <li>
        <input type="button" value="立即注册">
      </li>
    </ul>
    <div style="height:1.2rem;"></div>
  </div>
</template>