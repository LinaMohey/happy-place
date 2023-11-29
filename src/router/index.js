import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home-page.vue";
import Register from "@/views/register.vue";
import SignIn from "@/views/sign-in.vue";
import WelcomeCard from "@/views/welcome-card.vue";
import hotelResults from "@/views/search-results/hotel-results.vue";
import hotelAvaliability from "@/views/avaliability/hotel-avalibility.vue";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/welcome",
    name: "welcome-card",
    component: WelcomeCard,
  },
  {
    path: "/hotel-result",
    name: "hotel-results",
    component: hotelResults,
  },

  {
    path: "/hotel-availability/:hotelId",
    name: "hotel-availability",
    component: hotelAvaliability,
    props: true, // This allows you to use route params as props in your component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
