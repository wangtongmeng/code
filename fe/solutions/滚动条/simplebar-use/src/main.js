import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import 'simplebar-vue/dist/simplebar.min.css';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import './main.css';


new Vue({
  render: h => h(App),
}).$mount('#app')
