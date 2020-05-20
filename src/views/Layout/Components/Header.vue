<template>
    <div id="header-wrap"> 这里有个图标

            <div class="pull-left"> </div>

        <div class="pull-right header-icon"  >

            管理员

              <svg-icon iconClass="quit" className="quit" /> </div>


    <div  class="user-info pull-right"  @click="navMenuState" >


            <svg-icon iconClass="caidan" className="caidan" class="pull-left" />
        </div>
    </div>
</template>

<script>
    export default {
        // name: "header"
        name: "layoutHeader",
        setup(props,{root}){
            const navMenuState =()=>{
                root.$store.commit('SET_COLLAPSE')

                // root.$store.dispatch('setMenuStatus',{"name":"aaaa"})

            }
            return{
                navMenuState
            }
        }

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
        margin-bottom: -10px;
        font-size:15px;
        cursor: pointer;
    }
}
.user-info {
    height: 100%;
    padding: 0 32px;
    border-right: 1px solid #ededed;
    + .header-icon {
        padding: 0 28px;
    }
    }


</style>