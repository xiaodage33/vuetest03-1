<template>
   <div>
    <LayoutHeader/>
    <LayoutMain/>
    <LayoutNav/>
       <div> ppppp:  <div> index.vue  写结构  </div>
   </div>
   </div>
</template>

<script>
    //组件、引入结构导航菜单，内容，和头
import LayoutHeader from './Compoents/header'
import LayoutMain from './Compoents/Main'
import LayoutNav from './Compoents/Nav'




    export default {
    compoents:{LayoutHeader,LayoutMain,LayoutNav},
        name: "layout",
        setup(){

        }
    }
</script>

<style scoped>

</style>