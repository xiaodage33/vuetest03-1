<template>
    <div id="main-wrap">
    <router-view />   //路由的子菜单
    </div>
</template>

<script>
    export default {
        // name: "Main"
    }
</script>

<style scoped>
#main-wrap{
    position: fixed;
    left: 250px;
    top: 75px;
    right:0;
    bottom:0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    -webkit-box-sizing: border;


}


</style>