<template>
    <div class="myBettleScoroll">
      <div class="wrapper" ref="refWrapper">
        <div>
        <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "myBettleScoroll",
        props:{
          probeType:{
            type:Number,
            default:0
          },
          pullUpLoad:false
        },
        data(){
          return {
            bscroll:null
          }
        },
        mounted() {
          this.bscroll = new BScroll(this.$refs.refWrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad
          })

          this.bscroll.on('scroll',(position) => {
            this.$emit('scroll',position)
          })

          this.bscroll.on('pullingUp',() => {
            console.log('上拉加载更多');
            this.$emit('onloadData')
          })
        },
        methods:{
            finishPullUpAAA(){
              this.bscroll.finishPullUp()
              console.log('AAA')
            }
        }
    }
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: -2px;
    left: 0;
    right: 0;
  }
</style>
