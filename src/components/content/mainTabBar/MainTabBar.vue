<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~img/tabbarImg/home.svg" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/homeActive.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~img/tabbarImg/category.svg" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/categoryActive.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~img/tabbarImg/cart.svg" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/cartActive.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~img/tabbarImg/profile.svg" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/profileActive.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
    export default {
      name: "MainTabBar",
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
