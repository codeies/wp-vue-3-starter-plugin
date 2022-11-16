/*import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false*/

/* eslint-disable no-new */
/*new Vue({
  el: '#vue-frontend-app',
  router,
  render: h => h(App)
})
*/

/*import App from "./App.vue";

const app = createApp({
   data() {
      return {
        message: 'Hello Vue!'
      }
    },
  render: h => h(App)
});

app.mount("#app");*/

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount('#vue-frontend-app');  // the element has an id "app"