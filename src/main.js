import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faSearch,
  faCheckCircle,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebookMessenger,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueClipboard from "vue-clipboard2";
import VueRouter from "vue-router";
import { routes } from "./routes";
import infiniteScroll from "vue-infinite-scroll";

Vue.config.productionTip = false;
library.add(
  faUserSecret,
  faSearch,
  faCheckCircle,
  faCopy,
  faGithub,
  faFacebookMessenger,
  faInstagram
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(infiniteScroll);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
