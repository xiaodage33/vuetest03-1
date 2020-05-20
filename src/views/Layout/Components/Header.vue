<template>
    <div id="header-wrap" >
        <div class="pull-left">
            <div class="user-info" @click="navMenuState">
                <svg-icon iconClass="caidan" className="caidan" class="pull-left"/>
            </div>
        </div>
        <div class="pull-right">
            <span>管理员</span>
            <svg-icon iconClass="quit" className="quit"/>
        </div>
    </div>
</template>

<script>
    export default {
        // name: "header"
        name: "layoutHeader",
        setup(props, {root}) {
            const navMenuState = () => {
                //app使用了命名空间
                root.$store.commit('app/SET_COLLAPSE')

                // root.$store.dispatch('setMenuStatus',{"name":"aaaa"})

            }
            return {
                navMenuState
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../styles/config.scss";

    #header-wrap {
        postition: fixed;
        top: 0;
        right: 0;
        left: $navMenu;
        height: 75px;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .1);
    }

    .header-icon {
        padding: 0 32px;
        svg {
            margin-bottom: -10px;
            font-size: 15px;
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