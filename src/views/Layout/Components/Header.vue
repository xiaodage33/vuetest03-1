<template>
    <div id="header-wrap"> 这里有个图标
    <div class="pull-left header-icon" ><svg-icon icon-Class="menu" class-name="menu"   />

        <div class="pull-right" header-icon>
            <div class="user-info">

            </div>
            <div><svg-icon iconClass="console" className="console" /> </div>
        </div>

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
    @import "../../../styles/config.scss";
   #header-wrap{
       postition: fixed;
       top:0;
       right:0;
       left: $navMenu;
       height:75px;
       background-color: #fff;
       -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
 }
.header-icon{
    padding: 0 32px;
    svg{
        margin-bottom: -8px;
        font-size:25px;
        cursor: pointer;
    }
}


</style>