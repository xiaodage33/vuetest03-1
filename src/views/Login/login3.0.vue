//vue2  和vue3 的写法


<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <!--//:key="item.id"本地没有id，自动给添加id-->
                <li  v-for="item in menutab" :key="item.id" :class="{'current':item.current}" @click="toggleMneu(item)">                              {{ item.txt }}   </li>

                <!--<li class="current" v-for="item in menutab" :key="item.id">登录  </li>-->

                <!--<li class="current" v-for="(item,index) in menutab" :key="item.id">登录 {{index}}  </li>-->
                <!--//打印索引-->

                <!--<li>注册  </li>-->
            </ul>


   <!--表单-->
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="medium">
  <el-form-item  prop="username" class="item-from">
      <label> 邮箱   </label>
    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item  prop="password" class="item-from">
            <label> 密码   </label>
    <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
<!--//绑定模块  v-show="model ==='reg'",跟下面model定义值一样，如果等于register才显示，不等于不显示-->
  <el-form-item  prop="passwords" class="item-from" v-show="model ==='register'">
            <label> 重复密码   </label>
    <el-input type="text" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
  </el-form-item>

  <el-form-item  prop="code" class="item-from">
            <label> 验证码   </label>

      <el-row :gutter="10">
         <el-col :span="16">
             <el-input v-model.number="ruleForm.code" > </el-input>
         </el-col>
         <el-col :span="8">
             <el-button type="success" class="block">获取验证码</el-button>
          </el-col>
      </el-row>

    <!--<el-input v-model.number="ruleForm.age"></el-input>-->
  </el-form-item>




  <el-form-item>
    <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
    <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
  </el-form-item>
</el-form>


        </div>


    </div>
</template>

<script>
     /*在vue中开发是用数据驱动视图渲染*/
           // js 操作DOM元素
//{ stripscript }如果里面还有别的函数aa,bb引用 { stripscript，aa，bb }
import { reactive,ref,isRefs,onMounted } from '../../../node_modules/@vue/composition-api'
import { stripscript,validateEmial,validatepass,validatecode } from '@/utils/validate';
export default {
    name: 'login',
    // setup(props, context) {   //上下两个写法，对提交{refs}，refs[formName].validate((valid) =>还是context.refs[formName].validate((valid) =>
    setup(props, {refs}) {

            //表单的数据
            //验证用户名邮箱
            let validateUsername = (rule, value, callback) => {
            // let reg = /^([a-zA-Z]|[0-9])(\w|\\-)+@([a-zA-Z0-9])+\.([a-zA-Z]{2,4})$/;
            // var reg = /(?!^[0-9]+$)(?!^[a-z]+$)(?!^[A-Z]+$)(^[0-9a-zA-Z]{6,12}$)/
            if (value === '') {
                callback(new Error('请输入用户名'));
            }
            //引用函数进行验证
            else if (validateEmial(value)) {

                callback(new Error('用户名格式有误'));  //通过后true返回
            }
            else {
                callback(); //true返回
            }
        };
        //验证密码
        let validatePassword = (rule, value, callback) => {
            //打印密码输入字符过滤结果，过滤后数据
            console.log(stripscript(value))
            //过滤后数据,在给value重新赋值
            ruleForm.password = stripscript(value)
            value = ruleForm.password

            // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
            if (value === '') {
                callback(new Error('输入密码'));
            } else if (validatepass(value)) {
                callback(new Error('密码为6-20位数字+字母'));
            } else {
                callback();
            }
        };
        //验证重复密码
        let validatePasswords = (rule, value, callback) => {
            if (model.value === 'login') {
                callback();
            }
            //打印密码输入字符过滤结果，过滤后数据
            // console.log(stripscript(value))
            //过滤后数据,在给value重新赋值
            ruleForm.passwords = stripscript(value)

            value = ruleForm.passwords

            // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value != ruleForm.password) {
                callback(new Error('重复密码不正确'));
            } else {
                callback();
            }
        };


        //验证码
        let validateCode = (rule, value, callback) => {
            //验证码一样进行过滤
            // this.ruleForm.code = stripscript(value)
            // value = this.ruleForm.code
            // let reg = /^[a-z0-9]{6}$/
            if (value === '') {
                return callback(new Error('验证码不为空'));
            }
            else if (validatecode(value)) {
                return callback(new Error('验证码格式有误'))
            }
            else {
                callback();
            }
        };

        //这里防止data数据，生命周期，自定义的函数
        //   context.attrs
        //   context.slots
        //   context.parent
        //   context.root
        //   context.emit
        const menutab = reactive([
            //type：login或者register声明不同类型，点击后把值赋给模块值
            {txt: '登录', current: true, type: 'login'},
            {txt: '注册', current: false, type: 'register'}
        ])
        //模块值
        const model = ref('login')
        //表单绑定数据
        const ruleForm = reactive({
            username: '',
            password: '',
            passwords: '',
            code: ''
        })

        //表单的验证
        const rules = reactive({
            username: [
                //blur是触发鼠标离开验证
                {validator: validateUsername, trigger: 'blur'}
            ],
            password: [
                {validator: validatePassword, trigger: 'blur'}
            ],
            passwords: [
                {validator: validatePasswords, trigger: 'blur'}
            ],
            code: [
                {validator: validateCode, trigger: 'blur'}
            ],


        })


        // console.log(isRef(model) ? true : false)


        // /** 声明函数，把下面给干掉了  **/
        const toggleMneu = (data => {
            //点击按钮后在控制台输出点就内容
            console.log(data)
            menutab.forEach(elem => {
                //可以点击互相换
                elem.current = false

            });
            //修改模块
            // data.current = true
            // this.model = data.type


            //重新赋值，对象还是data不变
            // 高光
            data.current = true
            model.value = data.type
        })
        //表单验证
        const submitForm = (formName => {
            // context.refs[formName].validate((valid) => {
            refs[formName].validate((valid) => {

                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        })

        /**生命周期 挂载完成后**/
        onMounted(() => {

        })

        return {
            menutab,
            model,
            ruleForm,
            rules,
            toggleMneu,
            submitForm

        }
    }}

</script>

<style lang="scss" scoped>
    #login {
        height:100vh;
        background: #344a5f;
    }
    .login-wrap{
        width:330px;
        margin: auto;

    }
    .menu-tab{
        text-align: center;
        li{
            display: inline-block;
            width: 88px;
            line-height:36px;
            font-size: 14px;
            color:#fff;
            border-radius:2px;  /* <--边框圆角2像素-->*/
            cursor: pointer;  /*  <--鼠标放上变为小手--> */
        }
        .current{
            background-color: rgba(0,0,0,.1);
        }
        .login-form{
            margin-top: 29px;
            label{
                display: block;
                margin-botton:3px;
                font-size:14px;
                color:#fff;
            }
        }
        .item-from{
            margin-bottom: 13px;
        }
        .block{
            display: block;
            width:100%;

        }
        .login-btn{
            margin-top: 19px;
        }
    }

</style>