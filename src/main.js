import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.less';
import './assets/style/common.less';
import ScrollPosition from 'vue-keep-scroll-position'

Vue.use(Vant);
Vue.use(ScrollPosition);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
