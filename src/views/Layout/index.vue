<template>
    <!-- 导入下面结构-->
   <div id="layout" :class="[menuStatus ? 'close' : 'open']">
       <LayoutNav />
       <div class="content">
           <LayoutHeader />
           <LayoutMain />
       </div>
   </div>
</template>

<script>
import { computed} from '@vue/composition-api';

    //组件、引入结构导航菜单，内容，和头
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
import LayoutNav from './Components/Nav'

export default {

    name: 'layout',

    components:{LayoutHeader,LayoutMain,LayoutNav},
    setup(props,{root}){
        //配置点击隐藏
        const menuStatus = computed(()=>
            root.$store.state.app.isCollapse);


        return {
            menuStatus
        }
        }}

</script>

<style scoped>
#layout{
    display: flex;
    background-color: #f7f7f7 ;
}
.content {
    flex: 1;
}

</style>