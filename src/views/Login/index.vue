<template>
    <div id="login">
        {{ msg }}

        <e1-button> 默认按钮</e1-button>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
                msg:'我爱北京'
            }},
        created(){},
        mounted(){},
        methods(){},

        props:{},
        watch(){}

    }
</script>

<style lang="scss" scoped>
    #login{
        height: 100vh;
        background-color: aqua;
    }

</style>