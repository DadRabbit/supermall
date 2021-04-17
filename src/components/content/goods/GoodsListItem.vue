<template>
    <div class="goods-list-item">
        <img :src="goodsItem.show.img" alt="" class="goods-list-img" @click="goToBuy">
        <p class="goodsItem-title">{{goodsItem.title}}</p>
        <div class="goods-list-price" >
          <span class="text-pink">￥{{goodsItem.price}}</span>
          <div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      methods:{
        goToBuy(){
          console.log('aaa')
        }
      }
    }
</script>

<style scoped>

  .goods-list-item {
    width: 49%;
    height: auto;
    padding-top: 6px;
    font-size: 14px;
  }
  .goods-list-img{
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .goods-list-price {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
  }
  .collect-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(~assets/img/home/collect_icon.png) no-repeat;
    background-size: cover;
    vertical-align: bottom;
  }
  .text-pink{
    color: #e87388;
  }

</style>
