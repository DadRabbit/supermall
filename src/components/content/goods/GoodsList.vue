<template>
  <div class="goods">
    <div class="goods-item">
       <goods-list-item v-for="(goodListItem,index) in goods" :goods-item="goodListItem" :key="index"/>
    </div>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

    export default {
        name: "GoodsList",
      props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
        GoodsListItem
      }
    }
</script>

<style scoped>
  .goods-item{
    display: flex;
    flex-wrap: wrap;
  }
</style>
