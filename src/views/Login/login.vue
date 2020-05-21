//vue2  和vue3 的写法


<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <!--//:key="item.id"本地没有id，自动给添加id-->
                <li v-for="item in menutab" :key="item.id" :class="{'current':item.current}" @click="toggleMneu(item)">
                    {{ item.txt }}
                </li>

                <!--<li class="current" v-for="item in menutab" :key="item.id">登录  </li>-->

                <!--<li class="current" v-for="(item,index) in menutab" :key="item.id">登录 {{index}}  </li>-->
                <!--//打印索引-->

                <!--<li>注册  </li>-->
            </ul>
            <!--表单-->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm" class="login-form" size="medium">
                <el-form-item prop="username" class="item-from">
                    <label for="username"> 邮箱 </label>
                    <el-input id="username" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="password" class="item-from">
                    <label for="password"> 密码 </label>
                    <el-input id="password" type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <!--//绑定模块  v-show="model ==='reg'",跟下面model定义值一样，如果等于register才显示，不等于不显示-->
                <el-form-item prop="passwords" class="item-from" v-show="model ==='register'">
                    <label for="passwords"> 重复密码 </label>
                    <el-input id="passwords" type="text" v-model="ruleForm.passwords" autocomplete="off" minlength="6"
                              maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="code" class="item-from">
                    <label for="code"> 验证码 </label>

                    <el-row :gutter="10">
                        <el-col :span="15">
                            <el-input id="code" v-model="ruleForm.code"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="block" @click="getSms()"
                                       :disabled="codeButtonStatus.status">{{codeButtonStatus.text}}
                            </el-button>
                        </el-col>
                    </el-row>

                    <!--<el-input v-model.number="ruleForm.age"></el-input>-->
                </el-form-item>


                <el-form-item>
                    <!--//利用true和false判断 {{model ==='login' ? "登录" :"注册"}}  等于login是true ，否注false-->
                    <el-button type="danger" @click="submitForm('loginForm')" class="login-btn block"
                               :disabled="loginButtonStatus">{{model ==='login' ? "登录" :"注册"}}
                    </el-button>
                    <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->

                </el-form-item>
            </el-form>
        </div>


    </div>
</template>

<script>
import sha1 from 'js-sha1'
import axios from 'axios'
import {Message} from 'element-ui';
import {GetSms, Register, Login} from "../../api/login";

/*在vue中开发是用数据驱动视图渲染*/
// js 操作DOM元素
//{ stripscript }如果里面还有别的函数aa,bb引用 { stripscript，aa，bb }
import {reactive, ref, isRefs, onMounted} from '../../../node_modules/@vue/composition-api'
import {stripscript, validateEmial, validatepass, validatecode} from '@/utils/validate';

export default {
    name: 'login',
    // setup(props, context) {   //上下两个写法，对提交{refs}，refs[formName].validate((valid) =>还是context.refs[formName].validate((valid) =>
    // console.log(context)
    /**  console.log(context) 打印出来
     * attrs: Object
     emit: ƒ ()  this.$atters  都是对应2.0内容
     isServer: (...)
     listeners: (...)
     parent: (...)
     refs: (...)
     root: (...)
     * **/
    setup(props, {refs, root}) {


        // const testa = ref('cc')
        // const html1 =ref("<h1>he ceshi test </h1>")
        // const testw = ref("<h3>sdf</h3>")

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
        const model = ref('login');

        //登录按钮禁用状态禁用登录true是打开禁用
        const loginButtonStatus = ref(true);

        //验证码按钮状态
        const codeButtonStatus = reactive({
            status: false,
            text: '获取验证码'
        });
        //倒计时
        const timer = ref(null)


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
        });


        // console.log(isRef(model) ? true : false)


        // /** 声明函数============================================  **/
        const toggleMneu = (data => {
            //点击按钮后在控制台输出点就内容
            console.log(data)
            menutab.forEach((elem,index)=> {
                //可以点击互相换
                elem.current = false

            });

            //重新赋值，对象还是data不变
            // 高光
            data.current = true
            model.value = data.type

            //重置表单
            // this.$refs[formName].resetFields();  //2.0写法
            refs.loginForm.resetFields(); //3.0写法重置调单
            clearCountDown() // 切换后验证码状态清除
        })
        //更新按钮的状态 --优化到一个函数
        const updateButtonStatus =((params)=>{
           //修改获取验证码按钮时的状态
            codeButtonStatus.status = params.status;
            codeButtonStatus.text = params.txt;
        })




        /**获取验证码模块
         * **/
        const getSms = (() => {
            // 前端拦截进行提示，判断有没有输入信息
            if (ruleForm.username == '') {
                root.$message.error('邮箱不能为空');
                return false
            }

            if (validateEmial(ruleForm.username)) {
                root.$message.error("邮箱格式有误，请重新输入！！")
                return false

            }
            //获取验证码
            let requestdata = {
                username: ruleForm.username,
                module: model.value
                //邮箱是否存在进行验证
                // module:'login'

            }
            //优化到一个函数 后还是在这个位置进行调用
            // //修改获取验证码按钮时的状态
            // codeButtonStatus.status = true
            // codeButtonStatus.text = '发送中'
            updateButtonStatus({  //优化后
                status: true,
                txt:'发送中'
            })


            setTimeout(() => {
                //延时多长时间，显示发送中

            })
            GetSms(requestdata).then(response => {

                //点击注册弹出验证码提示框
                let data = response.data
                root.$message({         //弹窗验证码
                    message: data.message,
                    type: 'success'

                })
                //启动登录或注册按钮
                loginButtonStatus.value = false
                countDown(6)
                //调定时器，倒计时
                console.log(data)
            }).catch(error => {
                console.log(error)
            }, 3000)
        })

        /**提交表单**/
            //表单验证
        const submitForm = (formName => {
                console.log(model.value)
                // context.refs[formName].validate((valid) => { 和refs 一样，
                // axios.post('/user')
                //     .then(function (response) {
                //     console.log(response);
                // })
                //     .catch(function (error) {
                //     console.log(error);
                // });
                //提交表单
                // alert("表单验证")
                // 模拟注册成功============================================================

                // return false  //暂时取消下面执行测试
                refs[formName].validate((valid) => {
                    //这里面是表单验证通通过  //三元运算

                 // 使用三元运算代替下面if
                    // if(model.value ==='login'){
                    //     login()
                    // }else{
                    //     register()
                    // }

                    if (valid) {
                        model.value === 'login' ? login(): register()
                        // clearCountDown() //清除验证码发送状态


                        // alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            })

        /**登录**/
              const login = (() => {
                let repuestData = {
                  username: ruleForm.username,
                  password: sha1(ruleForm.password),
                  code: ruleForm.code
                }
                root.$store.dispatch('app/login', repuestData).then(response => {
                  // 页面跳转
                  root.$router.push({
                    name: 'Console'
                  })
                }).catch(error => {});
              })
                // Login(requestData).then(response =>{
                //     console.log('登录成功')
                //     console.log(response)

                //====路由跳转=======================
                //      root.$router.push({
                //          //页面跳转
                //          name:'Console'
                //
                //      })
                //
                //     }).catch(error =>{
                //
                //     })
                //     clearCountDown() //清除验证码发送状态
                //
                //



        /**注册**/
        const register = (()=>{
            let requestdata = {
              username: ruleForm.username,
              password: sha1(ruleForm.password),
              code: ruleForm.code,
              module: 'register',
            }
            Register(requestdata).then(response => {
              let data = response.data
              root.$message({
              message: data.message,
             type: 'success'
            })
            //模拟注册成功
             toggleMneu(menutab[0])   //暂时测试取消验证码发送定时和注册禁用
             clearCountDown()
            // console.log(response)

            }).catch(error => {
            //失败时候的代码
            });


            })

        /**倒计时===================================================
         **/
        const countDown = ((number) => {
            //判断定时器是否存在，存在则删除，否则容易出现多点后定时器乱
            let time = number


            if(timer.value){ clearInterval(timer.value)}  //如果存在计时器先删除

            // 有两种倒计时，setTimeout只执行一次
            //setInterval 不断执行，需要条件才会停止
            timer.value = setInterval(() => {
                time--;
                if (time === 0) {
                    clearInterval(timer.value)
                    // 优化后
                    updateButtonStatus({
                        status: false,
                        text: '再次获取验证码'

                        // codeButtonStatus.status = false
                        // codeButtonStatus.text = '再次获取验证码'
                    }) }
                else {
                    codeButtonStatus.text = `倒计时${time}秒`    //es6写法
                }
            }, 1000)
        })
        /**清除倒计时=========================================
         * **/
        const clearCountDown = (() => {
            //还原验证按钮默认状态，如定时器去掉
            // codeButtonStatus.status = false
            // codeButtonStatus.text = '获取验证码'
            // 优化后
            updateButtonStatus({
                status:false,
                txt:'获取验证码'
             })
            //清除倒计时
            clearInterval(timer.value)


        })


        /**生命周期 挂载完成后再这个位置，页面刷新 就会响应，不会出发点击按钮**/
        onMounted(() => {
            // GetSms()
            // alert(1111) //刷新测试
        })
        return {
            menutab,
            model,
            ruleForm,
            rules,
            toggleMneu,
            submitForm,
            getSms,
            loginButtonStatus,
            codeButtonStatus,
            // html1,  //测试vif v-show等
            // testw,
            // testa,
        }


    }
}

</script>

<style lang="scss" scoped>
    #login {
        width: 100vw;
        padding: 30px 0;
        background: #344a5f;
    }

    .login-wrap {
        width: 330px;
        margin: auto;

    }

    .menu-tab li div {
    }

    li {

    }

    .menu-tab {
        text-align: center;
        li {
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 14px;
            color: #fff;
            border-radius: 2px; /* <--边框圆角2像素-->*/
            cursor: pointer; /*  <--鼠标放上变为小手--> */
        }
        .current {
            background-color: rgba(0, 0, 0, .1);
        }

        .item-from {
            margin-bottom: 13px;
        }
        .block {
            display: block;
            width: 100%;

        }

    }

    .login-form {
        margin-top: 29px;
        label {
            display: block;
            margin-botton: 3px;
            font-size: 14px;
            color: #fff;
        }
        .login-btn {
            margin-top: 19px;
            width: 100%;
        }
    }


</style>