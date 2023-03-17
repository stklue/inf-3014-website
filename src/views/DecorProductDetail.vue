<script setup lang="ts">
import "/src/index.css"

</script>



<template>
    <!-- Product details Content -->
    <div class="product-detail-wrapper">
        <div class="flex">
            <router-link :to="{name: 'Home'}">
                <span class="text-[#decbb1]">Home/</span>
            </router-link>
            <router-link :to="{name: 'Home'}">
                <span class="text-[#837057] underline">Decor</span>
            </router-link>
        </div>
        <div  class="flex flex-col lg:flex-row md:flex-row">
            <div class="product-detail-image lg:w-1/2 md:w-1/2 pt-3">
                <img src="../assets/images/decor-1.jpg" class="inset-0 lg:py-16 w-full h-full object-cover" />
            </div>
            <form class="product-detail-form">
                <div class="form-items">
                    <h1>Decor Item 2</h1>
                    <h2>R1000.00</h2>
                    <h3>In stock</h3>
                </div>
    
    
                <div class="flex flex-col space-y-4 text-sm font-medium">
                    <router-link :to="{ name: 'ShoppingCart' }">
                        <div class="space-x-3 flex">
                                <button class="form-buy-btn" type="button">Buy it now</button>
                            </div>
                        </router-link>
                    <div class="space-x-3 flex">
                            <button class="form-add-btn" type="button">Add to cart</button>
                        <button class="form-like-icon" type="button" aria-label="like">
                            <svg width="20" height="20" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                        <input class="w-12 h-14" type="number" min="1" />
                    </div>
                </div>
            </form>

        </div>
        
    </div>
</template>
