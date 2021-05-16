import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import fontawesome from 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
Vue.use(less);
Vue.use(fontawesome);

new Vue({
  render: function(h){console.log(h);return h(App)},
}).$mount('#app')
