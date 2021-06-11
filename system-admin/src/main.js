import Vue from 'vue'
import App from './App.vue'
import router from './Router/router';
import store from './store/store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import helpers from './Helpers/User';
import "tailwindcss/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

import Vuelidate from 'vuelidate';

Vue.use({
  install() {
      Vue.helpers = helpers;
      Vue.prototype.$helpers = helpers;
  }
});

Vue.use(Vuelidate);

Vue.use(VueAxios, axios);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const JwToken=`Bearer ${localStorage.getItem('token')}`
axios.defaults.headers.common['Authorization'] = JwToken;
axios.defaults.baseURL = 'http://127.0.0.1:5000';

Vue.config.productionTip = false

Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));

new Vue({
  router,
  store,
  beforeCreate() { this.$store.commit('initialiseStore');},
  render: h => h(App),
}).$mount('#app')
