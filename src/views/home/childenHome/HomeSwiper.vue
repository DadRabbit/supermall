<template>
  <div>
  <swiper><!--轮播图组件-->
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image">
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
