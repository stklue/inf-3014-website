<script setup lang="ts">
import "../index.css";
</script>

<template>
  <div id="summary" class="summary-wrapper  lg:w-1/3 md:w-1/3 ">
    <h1>Order Summary</h1>
    <div class="subtotal-wrapper ">
      <span>Subtotal</span>
      <span>
        <slot name="subtotal" />
      </span>
    </div>
    <div>
      <label>Shipping</label>
      <select class="block p-2 w-full text-sm">
        <option>Standard shipping - R100.00</option>
      </select>
    </div>
    <div class="flex flex-col py-10">
      <span for="promo" class="promocode-text ">Promo Code</span>
      <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />

      <button class="apply-btn">
        Apply
      </button>


    </div>

    <div class="border-t">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>
          <slot name="total" />
        </span>
      </div>
      <router-link :to="{ name: 'Checkout' }">
        <button class="checkout-btn ">
          Checkout
        </button>
      </router-link>
    </div>
  </div>
</template>


<style scoped>

</style>