<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~img/tabbarImg/home01.png" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/home01_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~img/tabbarImg/category01.png" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/category01_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~img/tabbarImg/cart01.png" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/cart01_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~img/tabbarImg/profile01.png" alt="">
      <img slot="item-iconActive" src="~img/tabbarImg/profile01_active.png" alt="">
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
