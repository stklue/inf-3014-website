<script setup lang="ts">
import "/src/index.css"
import { ref } from 'vue'
import { decors } from '../utilities/products';

const products = ref(decors);
</script>

<template>
    <div class="category-wrapper md:pl-16 md:pr-16 lg:pl-16 lg:pr-16 md:justify-between lg:justify-between">
        <div class="category-heading-wrapper">
            <h2 class="pb-5 text-xl font-semibold">Decor</h2>
            <button class="category-btn">See All</button>

        </div>
        <!-- ../assets/images/banner-rs-rem.png -->
        <div class="product-wrapper flex-wrap">
            <router-link :to="`/category/decor/Decor Item 1`">
                <div class="product">
                    <img class="product-img" src="../assets/images/decor-1.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Decor Item 1</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/decor/Decor Item 2`">
                <div class="product">
                    <img class="product-img" src="../assets/images/decor-2.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Decor Item 2</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/decor/Decor Item 3`">
                <div class="product">
                    <img class="product-img" src="../assets/images/decor-3.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Decor Item 3</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/decor/Decor Item 4`">
                <div class="product">
                    <img class="product-img" src="../assets/images/decor-4.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Decor Item 4</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/decor/Decor Item 5`">
                <div class="product">
                    <img class="product-img" src="../assets/images/decor-5.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Decor Item 5</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
           
        </div>
    </div>
</template>
