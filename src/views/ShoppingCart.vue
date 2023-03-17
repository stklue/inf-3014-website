<script setup lang="ts">
import "/src/index.css";
import CartOrderSummary from "../components/CartOrderSummary.vue";
import Product from '../utilities/products';

const item1 = { id: 1, name: "Furniture 1", image: "/src/assets/images/fur-3.jpg", price: 300, quantity: 2, category: "Furniture" } as Product;
const item2 = { id: 2, name: "Decor Item 4", image: "/src/assets/images/decor-2.jpg", price: 1300, quantity: 2, category: "Decor" } as Product;
const item3 = { id: 3, name: "Kitchenware 2", image: "/src/assets/images/kit-3.jpg", price: 200, quantity: 2, category: "Kitchenware" } as Product;

const cartItems = [item1, item2, item3]
</script>


<template>
  <div class="cart-wrapper">
    <div class="cart-content-wrapper flex-col lg:px-20 md:px-20">
      <div class="cart-left-items space-y-2 lg:w-3/4 md:w-3/4">
        <div class="cart-left-items-text">
          <h1>Shopping Cart</h1>
          <h2>
            2 Item(s)
          </h2>
        </div>



        <div class="flex pb-9 items-center hover:bg-gray-100 mx-1 my-2 h-24 space-x-5">
     
          <div class="flex h-full w-1/3 lg:w-1/6 p-2">
            <img class="product-img" src="../assets/images/fur-2.jpg" alt="" />
          </div>

    
          <div class="flex h-full w-2/3 lg:w-full flex-col justify-between">
            <div class="flex flex-col justify-between">
              <span class="font-bold text-sm">Furniture 2</span>
              <div class="flex space-x-5 lg:justify-start">
                <span class="text-center font-semibold text-xs text-gray-400">R1200.00</span>
              </div>
            </div>

          
            <div class="flex justify-between pr-5">
              <div class="flex">
                <svg class="fill-current text-gray-600 w-5 h-5 rounded-lg border-2 p-1" viewBox="0 0 448 512">
                  <path
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <span class="text-center w-8">2</span>

                <svg class="fill-current text-gray-600 w-5 h-5 rounded-lg border-2 p-1" viewBox="0 0 448 512">
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <div>
                <a class="delete font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center hover:bg-gray-100 mx-1 my-2 h-24 space-x-5 pt-20">
          <div class="flex h-full w-1/3 lg:w-1/6 p-2">
            <img class="product-img" src="../assets/images/decor-2.jpg" alt="" />
          </div>
          <div class="flex h-full w-2/3 lg:w-full flex-col justify-between">
            <div class="flex flex-col justify-between">
              <span class="font-bold text-sm">Decor Item 2</span>
              <div class="flex space-x-5 lg:justify-start">
                <span class="text-center font-semibold text-xs text-gray-400">R400.00</span>
              </div>
            </div>

            <div class="flex justify-between pr-5">
              <div class="flex">
                <svg class="fill-current text-gray-600 w-5 h-5 rounded-lg border-2 p-1" viewBox="0 0 448 512">
                  <path
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <span class="text-center w-8">3</span>

                <svg class="fill-current text-gray-600 w-5 h-5 rounded-lg border-2 p-1" viewBox="0 0 448 512">
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <div>
                <a class="delete font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
          </div>
        </div>

       
        <router-link :to="{ name: 'Home' }" class="flex font-semibold text-[#382a1d] text-sm mt-10 pt-44">
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

