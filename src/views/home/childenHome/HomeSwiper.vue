<template>
  <div>
  <swiper><!--轮播图组件-->
    <swiper-item v-for="(swiperItem,index) in banners" :key="index" >
      <a :href="swiperItem.link">
        <img :src="swiperItem.image">
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"

    export default {
        name: "HomeSwiper",
        props:{
          banners:{
            type:Array,
            defaule(){
              return []
            }
          }
        },
      components:{
        Swiper,
        SwiperItem
      },
    }
</script>

<style scoped>

</style>
