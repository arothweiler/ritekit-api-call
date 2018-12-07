import Vue from 'vue';
import Vuesax from 'vuesax';
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuesax);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
