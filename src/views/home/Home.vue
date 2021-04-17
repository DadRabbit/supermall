<template>
  <div id="home" >
      <nav-bar class="shopping">
        <div slot="slot-center">购物街</div>
  <!--      <div slot="slot-left"/>
        <div slot="slot-right"></div>-->
      </nav-bar>
    <MyBettleScoroll class="content" ref="scroll" :probeType="probeType" :pull-up-load="true"
                     @scroll="contentScroll" @onloadData="queryMoreGoods">
        <home-swiper :banners="banners"/>
        <home-recommend-view :recommends="recommends"/>
        <home-feature></home-feature>
        <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></TabControl>
        <GoodsList :goods="showGoods"></GoodsList>
    </MyBettleScoroll >
    <BackTop class="backTop" @click.native="backClick" v-show="backTopIsShow"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childenHome/HomeSwiper";
  import HomeRecommendView from "./childenHome/HomeRecommendView";
  import HomeFeature from "./childenHome/HomeFeature";
  import MyBettleScoroll from "components/common/myBettleScoroll/MyBettleScoroll";
  import BackTop from "components/content/backTop/BackTop";

  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";



  import {getHomeMultidata,
    getHomeGoods} from "network4axios/home";

  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        probeType:3,
        queryList:{
          popList:[
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
            {show:{img:'https://s17.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg'},title:'2018秋季新款套装韩版宽松套头可爱卫衣女气质俏皮甜美上衣加高腰半身裙子两件套潮',price:129.00,cfav:12},
          ],
          newList:[
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
            {show:{img:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'},title:'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',price:129.00,cfav:12},
          ],
          sellList:[
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
            {show:{img:'https://s18.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'},title:'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',price:129.00,cfav:12},
          ]
        },
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        backTopIsShow:false,
        currentType:'pop'
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      TabControl,
      GoodsList,
      MyBettleScoroll,
      BackTop
    },
    created(){
      this.getHomeMultidataMethod()
      this.getHomeGoodsMethod('pop')
      this.getHomeGoodsMethod('new')
      this.getHomeGoodsMethod('sell')
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
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
        if (this.goods[type].page < 2) {
          getHomeGoods(type, page).then(res => {
            //接口变更了无法获取数据
            /*this.goods[type].list.push(...tres.data.list)*/
            switch (type) {
              case 'pop':
                this.goods[type].list.push(...this.queryList.popList)
                break
              case 'new':
                this.goods[type].list.push(...this.queryList.newList)
                break
              case 'sell':
                this.goods[type].list.push(...this.queryList.sellList)
                break
            }
          })
        }
        this.goods[type].page += 1
        if (this.goods[type].page > 1) {
          this.goods[type].list.push(...this.queryList.newList)
        }
      },
      queryMoreGoods(){
        this.getHomeGoodsMethod(this.currentType)
        setTimeout(() => {
          this.$refs.scroll.finishPullUpAAA()
        },2000)
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            console.log(this.currentType)
                break
          case 1:
            this.currentType = 'new'
            console.log(this.currentType)
                break
          case 2:
            this.currentType = 'sell'
            console.log(this.currentType)
        }
      },
      backClick(){
        this.$refs.scroll.bscroll.scrollTo(0,0,500)
      },
      contentScroll(position){
  /*      console.log(position.y);*/
        if (position.y < -500){
          this.backTopIsShow = true
        }else {
          this.backTopIsShow = false
        }
      }
    }
  }


</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    overflow: hidden;
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
