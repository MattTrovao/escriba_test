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
import Loading from "./components/Loading.vue"

import Header from "./components/Layout/Header.vue"
import Container from "./components/Layout/Container.vue"
import Footer from "./components/Layout/Footer.vue"
import User from "./components/Cards/User.vue"
import Products from "./components/Cards/Products.vue"
import Orders from "./components/Cards/Orders.vue"

app.component('Loading',Loading);
app.component('Header',Header);
app.component('Container',Container);
app.component('Footer',Footer);
app.component('User',User);
app.component('Products',Products);
app.component('Orders',Orders);


// APP
app.mount("#app");