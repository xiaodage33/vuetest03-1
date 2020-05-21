import Vue from 'vue';
import VueCompositionApi from '../node_modules/@vue/composition-api'

import App from './App.vue';
import router from './router';
import store from './store/index';

// @vue/composition-api@0.5.0

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./router/premit"



/**自定义全局组件名称**/
import "./icons";

Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;







//runtime运行模式
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
