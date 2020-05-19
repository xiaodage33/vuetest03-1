<template>
    <div id="header-wrap">
        <div class="pull-left" header-icon> <svg-icon icon-class="menu" className="menu" />


        </div>


    </div>

</template>

<script>
    export default {
        // name: "header"
        name: "layoutHeader"
    }
</script>

<style lang="scss" scoped>
   #header-wrap{
       postition: fixed;
       top:0;
       left: 250px;
       height:75px;
       right:0;
       background-color: #fff;
       -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
        line-height: 75px;
 }

    .header-icon{
        padding:0 200px;
    }

</style>