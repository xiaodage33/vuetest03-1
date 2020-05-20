<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content"> <router-view />


            </div>
        </div>

    <!--<router-view />  <br> 这段：main文件路由的子菜单-->
    </div>
</template>

<script>
    import {reactive, ref,isRef,onMounted,computed} from '@vue/composition-api';

    export default {
        name: "LayoutMain",
        setup(props,{root}){
            // const bbbb = root.$store.state.login.aaaa

            // const json = reactive({
            //         "name":"哈哈",
            //         "title":"abc"
            //     })
            //     // console.log(json)
            //     //对象转json ，互转
            // const toString = ref(JSON.stringify(json))
            // console.log(toString.value)

            return{

             }

              }
        }

</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap{
    height: 100vh;


}

/*#main-wrap{*/
    /*position: fixed;*/
    /*left: 250px;*/
    /*top: 75px;*/
    /*right:0;*/
    /*bottom:0;*/
    /*border: 30px solid #f7f7f7;*/
    /*border-bottom: none;*/
    /*-webkit-box-sizing: border-box;*/
/*}*/
.main-content{
    width: 100%;
    height: 100%;
    padding-top: $layoutHeader;
    padding-left: 30px;
    padding-right: 30px;
    /*-webkit-box-sizing: border-box;*/
    /*box-sizing: border-box;*/
    @include webkit(box-sizing,border-box);
    @include webkit(transition,all .3s ease 0s);
      /*@include引入*/
}


.content{
    width: 100%;
    height: 100%;
    padding:30px 30px 0 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    @include webkit(box-sizing,border-box);

}

</style>