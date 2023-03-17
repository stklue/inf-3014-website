<script setup lang="ts">
import "/src/index.css"
import { ref } from 'vue'
import { kitchenware } from '../utilities/products';

const products = ref(kitchenware);
</script>
<template>
    <div class="category-wrapper md:pl-16 md:pr-16 lg:pl-16 lg:pr-16 md:justify-between lg:justify-between">
        <div class="category-heading-wrapper">
            <h2 class="pb-5 text-xl font-semibold">Kitchenware</h2>
            <button class="category-btn">See All</button>

        </div>
        <div class="product-wrapper flex-wrap">
            <router-link :to="`/category/kitchenware/Kitchenware 1`">
                <div class="product">
                    <img class="product-img" src="../assets/images/kit-1.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Kitchenware 1</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/kitchenware/Kitchenware 2`">
                <div class="product">
                    <img class="product-img" src="../assets/images/kit-2.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Kitchenware 2</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/kitchenware/Kitchenware 3`">
                <div class="product">
                    <img class="product-img" src="../assets/images/kit-3.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Kitchenware 3</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/kitchenware/Kitchenware 4`">
                <div class="product">
                    <img class="product-img" src="../assets/images/kit-4.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Kitchenware 4</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/kitchenware/Kitchenware 5`">
                <div class="product">
                    <img class="product-img" src="../assets/images/kit-5.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Kitchenware 5</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>