<template>
    <!-- 导入下面结构-->
   <div id="layout">
       <LayoutHeader />
       <LayoutMain />
           <LayoutNav />
   </div>
</template>

<script>
    //组件、引入结构导航菜单，内容，和头
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
import LayoutNav from './Components/Nav'

export default {
    name: 'layout',

    components:{LayoutHeader,LayoutMain,LayoutNav},
    setup(){

        }
    }
</script>

<style scoped>
#layout{
    background-color: #f7f7f7 ;
}


</style>