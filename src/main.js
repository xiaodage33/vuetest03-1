import Vue from 'vue';
// import VueCompositionApi from '@vue/composition-api';
import VueCompositionApi from '../node_modules/@vue/composition-api'

import App from './App.vue';
import router from './router';
import store from './store';

// @vue/composition-api@0.5.0

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
