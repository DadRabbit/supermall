<template>
  <div id="home">
      <nav-bar class="shopping">
        <div slot="slot-center">购物街</div>
  <!--      <div slot="slot-left"/>
        <div slot="slot-right"></div>-->
      </nav-bar>
      <home-swiper :banners="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature></home-feature>
      <TabControl :titles="['流行','新款','精选']" class="tab-control"></TabControl>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>



  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childenHome/HomeSwiper";
  import HomeRecommendView from "./childenHome/HomeRecommendView";
  import HomeFeature from "./childenHome/HomeFeature";

  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata,
    getHomeGoods} from "network4axios/home";

  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      TabControl
    },
    created(){
      this.getHomeMultidataMethod()
      this.getHomeGoodsMethod('pop')
      this.getHomeGoodsMethod('new')
      this.getHomeGoodsMethod('sell')
    },
    methods:{
      getHomeMultidataMethod(){
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoodsMethod(type){
        let page = this.goods[type].page +1
        getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
  /*        console.log(this.goods[type].list);*/
        })
      }
    }
  }


</script>

<style scoped>
  #home{
    padding-top: 44px;
    margin: 0;
  }
  .shopping{
    background-color: #e87388;
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }

</style>
