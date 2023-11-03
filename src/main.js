import "./sass/app.scss";
import { createApp } from 'vue'
import App from './App.vue'

// DEPENDENCIAS
import router from './router'; 
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
app.use(FontAwesomeIcon, FontAwesomeIcon);
app.component("font-awesome-icon", FontAwesomeIcon);
library.add(fas);
axios.defaults.timeout = 600000;

// COMPONENTS
import Header from "./components/Layout/Header.vue"
import Container from "./components/Layout/Container.vue"
import Card from "./components/Card.vue"

app.component('Header',Header);
app.component('Container',Container);
app.component('Card',Card);

// APP
createApp(App).mount('#app')
app.mount("#app");