<template>
  <div id="index">
    <nav-bar><div slot="slot-center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

    export default {
        name: "Home",
        components:{
          NavBar
        }
    }
</script>

<style scoped>

</style>
