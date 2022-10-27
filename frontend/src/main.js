import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import './assets/icons';
import { BootstrapVue } from "bootstrap-vue";


import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
