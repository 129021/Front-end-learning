<template>
  <div id="app">
    <router-view/>
    <!-- html忽略大小写，大写这里用短横线代替 -->

    <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="yellow"> 
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
