import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import Checkout from "../views/Checkout.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import FurnitureProductDetail from "../views/FurnitureProductDetail.vue";
import KitchenwareProdDetail from "../views/KitchenwareProdDetail.vue";
import DecorProductDetail from "../views/DecorProductDetail.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermsAndConditions from "../views/TermsAndConditions.vue";
import OrderConfirmation from "../views/OrderConfirmation.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/confirmation",
    name: "OrderConfirmation",
    component: OrderConfirmation,
  },
  {
    path: "/tac",
    name: "TermsAndConditions",
    component: TermsAndConditions,
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/category/kitchenware/:productId/",
    name: "KitchenwareProdDetail",
    component: KitchenwareProdDetail,
  },
  {
    path: "/category/decor/:productId/",
    name: "DecorProductDetail",
    component: DecorProductDetail,
  },
  {
    path: "/category/furniture/:productId/",
    name: "FurnitureProductDetail",
    component: FurnitureProductDetail,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;
