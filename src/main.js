import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import "amfe-flexible";

import { 
  Col, 
  Row, 
  Icon, 
  Search, 
  Picker,
  PullRefresh,
  Toast,
  Popup,
  
} from "vant";

Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Picker);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Popup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
