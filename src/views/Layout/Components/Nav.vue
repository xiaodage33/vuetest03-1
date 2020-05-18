<template>
    <div id="nav-wrap">

        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#fff"
                router>

            <template v-for="(item, index) in routers">
            <!--一级菜单 循环得到菜单名-->
            <el-submenu  v-if="!item.hidden" :key="item.id" :index="index+''">
                <template slot="title">
                    <i :class="item.meta.icon"></i>  <!--:class="item.meta.icon" 图标在一级菜单显示-->
                    <span>{{ item.meta.name }}</span>
                </template>
                <!--子级菜单在childern里面得到名字v-for如果有主菜单，二级菜单也配置图标后有显示-->
                <el-menu-item v-for="subItem in item.children" :key="subItem.id"   :index="subItem.path" :class="item.meta.icon">{{subItem.meta.name}}</el-menu-item>   <!---index="subItem.path"做子菜单的路径-->


            </el-submenu>
            </template>
        </el-menu>

    <svg-icon />
    </div>

</template>

<script>
import { reactive, ref,isRef,toRefs,onMounted} from '@vue/composition-api';
    export default {
        name: "Nav",

    setup(props,{ root }){
        //data数据  //打印路由
        const isCollapse = ref(false);  //控制菜单栏是否展开
        const routers = reactive(root.$router.options.routes); //取到地址赋值，因为是对象
        // console.log(root.$router)


        //函数
        const handleOpen = (key,keyPath) =>{
            console.log(key,keyPath);
        }
        const handleCose=(key,keyPath)=>{
            console.log(key,keyPath)
        }
        const handleClose = (key,keyPath)=>{
            console.log(key,keyPath);
        }

        return{
            isCollapse,
            handleOpen,
            handleClose,
            routers

        }



    }
    }



</script>

<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    #nav-wrap{
        position: fixed;
        top: 0;
        left:0;
        width: $navMenu;
        height:100vh;
        background-color: #344a5f;


    }



</style>