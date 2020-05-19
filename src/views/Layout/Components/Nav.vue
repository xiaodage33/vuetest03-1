<template>
    <div id="nav-wrap">
        <h1 class="logo"> <img src="../../../assets/logo.png" alt="">   </h1>
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
                <el-menu-item v-for="subItem in item.children" :key="subItem.id"   :index="subItem.path" >{{subItem.meta.name}}</el-menu-item>   <!---index="subItem.path"做子菜单的路径  ;;  :class="item.meta.icon"-->


            </el-submenu>
            </template>
        </el-menu>

    <!--<svg-icon :iconClass="item.meta.name" :className="item.meta.name "  />-->
    </div>

</template>

<script>
import { reactive, ref,isRef,toRefs,onMounted,computed} from '@vue/composition-api';
    export default {
        name: "NavMenu",

        setup(props, {root}) {
            //data数据  //打印路由
            // const isCollapse = ref(false);  //控制菜单栏是否展开
            const routers = reactive(root.$router.options.routes); //取到地址赋值，因为是对象
            // console.log(root.$router)

            /**computed 监听**/
            const isCollapse = computed(()=> {
                // console.log(root.$store.state.isCollapse)
                return root.$store.state.isCollapse
            });


            //函数
            const handleOpen = (key, keyPath) => {
                console.log(key, keyPath);
            }
            const handleCose = (key, keyPath) => {
                console.log(key, keyPath)
            }
            const handleClose = (key, keyPath) => {
                console.log(key, keyPath);
            }

            //打印store
            // console.log(root.$store.state.isCollapse)
            // console.log(root.$store.state.count)
            // console.log(root.$store.state.count)

            // console.log(root.$store.state.count)
            // console.log(root.$store.getters.count)

            root.$store.commit('SET_COUNT',100)

            return {
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
    .logo{
        text-align: center;
        img{ width:92px;}
    }

    #nav-wrap{
        position: fixed;
        top: 0;
        left:0;
        width: $navMenu;
        height:100vh;
        background-color: #344a5f;


    }



</style>