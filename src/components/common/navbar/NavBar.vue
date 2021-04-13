<template>
  <div class="nav-bar">
    <div class="nav-bar-left" ><slot name="slot-left"></slot></div>
    <div class="nav-bar-center"><slot name="slot-center"></slot></div>
    <div class="nav-bar-right"><slot name="slot-right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
/*    height: 44px;*/
    line-height: 44px;
    text-align: center;

    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .nav-bar-left,.nav-bar-right{
    width: 60px;
  /*  background-color: red;*/
  }
  .nav-bar-center{
    flex: 1;
/*    background-color: #e87388;*/
  }
</style>
