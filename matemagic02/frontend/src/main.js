import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store';
import Axios from 'axios';
import headerPage from "./components/headerPage";



//import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
//import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


/*
Vue.prototype.jmeno = '';
Vue.prototype.$prijmeni = '';
Vue.prototype.$rocnik = 2;
Vue.prototype.$penize = 0;
Vue.prototype.$zkusenosti = 0;
*/
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('headerPage', headerPage)

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
