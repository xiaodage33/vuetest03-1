<template>
    <!--<svg :class="svgClass" aria-hidden="true">-->
        <!--<use :xlink:href="name"> </use>-->

    <!--</svg>-->

   <div> <div style="color:red;"> {{ plusOne }}  ==== {{msg}}

       <el-button @click="aabb"> 按钮</el-button>

   </div>

    <!--<div>{{ msg }} </div>-->
   </div>
</template>

<script>
     import axios from 'axios';

    import {reactive,ref,isRef,toRefs,onMounted,computed} from '@vue/composition-api';
    export default {
        name:"svgIcon",
        // props:['iconClass','className'],
        props:{
            //分页
            /**通过一个属性传值，父主键传值给子主键
             * **/
          iconClass:{
              type: String, //定义接收的值类型 Boolean
              default: '' //默认值，如果没有设置则默认
              // required: true  //传值必填项，
          },
          className:{
              type: String,
              defatult: ''
          }
        },
        setup(props){
            console.log(props.iconClass)
            console.log(props.className)
            const msg=ref("sjhaha");
            const count = ref(10);

           // computed监听属性变化，并计算属性
            //计算总和  ，computed 在监听着count的变化
            const plusOne = computed(()=> {
                return count.value +1

            })
            console.log(count)

            const aabb = ()=>{
                count.value =20
            }

            return{
                msg,
                plusOne,
                aabb,
            }

        }
    }

</script>

<style  lang="scss" scoped>

</style>


