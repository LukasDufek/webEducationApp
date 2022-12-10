import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store';
import axios from "axios";
import headerPage from "./components/headerPage";
import ('./style.css')

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false

// Setting up default vue http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('headerPage', headerPage)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
