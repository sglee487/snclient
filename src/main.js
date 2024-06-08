import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import timeago from "vue-timeago3";
import VideoListVue from "./components/VideoList.vue";
import WatchVue from "./components/Watch.vue";

const routes = [
  { path: "/", name: "home", component: VideoListVue },
  { path: "/watch/:uuid", name: "watch", component: WatchVue },
];

const router = createRouter({
  history: createWebHistory(), // Using HTML5 history mode
  routes,
});

createApp(App).use(router).use(timeago).mount("#app");