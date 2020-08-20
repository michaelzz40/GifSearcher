import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faSearch,
  faCheckCircle,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;
library.add(faUserSecret, faSearch, faCheckCircle, faCopy);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueClipboard);

new Vue({
  render: h => h(App)
}).$mount("#app");
