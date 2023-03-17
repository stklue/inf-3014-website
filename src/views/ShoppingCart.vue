<script setup lang="ts">
import "/src/index.css";
import CartItem from "../components/CartItem.vue";
import CartOrderSummary from "../components/CartOrderSummary.vue";
import { decors, furnitures, kitchenware } from "../utilities/products";
import Product from '../utilities/products';

const item1 = {id: 1, name: "Furniture 1", image: "../assets/images/fur-3.jpg", price: 300, quantity: 2, category: "Furniture"} as Product;
const item2 = {id: 2, name: "Decor Item 4", image: "../assets/images/decor-2.jpg", price: 1300, quantity: 2, category: "Decor"} as Product;
const item3 = {id: 3, name: "Kitchenware 2", image: "../assets/images/kit-3.jpg", price: 200, quantity: 2, category: "Kitchenware"} as Product;

const cartItems = [item1, item2, item3]
</script>


<template>
  <div class="cart-wrapper">
    <div class="cart-content-wrapper">
      <div class="cart-left-items">
        <div class="cart-left-items-text">
          <h1>Shopping Cart</h1>
          <h2>
            3 Item(s)
          </h2>
        </div>

        <CartItem v-for="item in cartItems" :key="item.id" :initialItem="item" />

        <!-- Continue shopping routing -->
        <router-link :to="{ name: 'Home' }" class="flex font-semibold text-[#382a1d] text-sm mt-10">
          <svg class="fill-current mr-2 text-[#382a1d] w-4" viewBox="0 0 448 512">
            <path
              d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </router-link>
      </div>

      <CartOrderSummary>
        <template v-slot:subtotal>R550.00</template>
        <template v-slot:total>R550.00</template>
      </CartOrderSummary>
    </div>
  </div>
</template>

