<script setup lang="ts">
import "/src/index.css"
import { ref } from 'vue'
import { furnitures } from '../utilities/products';

const products = ref(furnitures);
</script>

<template>
    <div class="category-wrapper md:pl-16 md:pr-16 lg:pl-16 lg:pr-16 md:justify-between lg:justify-between">
        <div class="category-heading-wrapper">
            <h2 class="pb-5 text-xl font-semibold">Furniture</h2>
            <button class="category-btn">See All</button>
        </div>
        <div class="product-wrapper space-y-3 md:justify-evenly lg:justify-evenly flex-wrap">
            <router-link :to="`/category/furniture/Furniture 1`">
                <div class="product md:w-48 lg:w-48">
                    <img class="product-img" src="../assets/images/fur-1.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Furniture 1</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/furniture/Furniture 2`">
                <div class="product md:w-48 lg:w-48">
                    <img class="product-img" src="../assets/images/fur-2.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Furniture 2</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/furniture/Furniture 3`">
                <div class="product md:w-48 lg:w-48">
                    <img class="product-img" src="../assets/images/fur-3.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Furniture 3</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/furniture/Furniture 4`">
                <div class="product md:w-48 lg:w-48">
                    <img class="product-img" src="../assets/images/fur-4.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Furniture 4</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
            <router-link :to="`/category/furniture/Furniture 5`">
                <div class="product md:w-48 lg:w-48">
                    <img class="product-img" src="../assets/images/fur-5.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="product-name">Furniture 5</h5>
                        <p class=" ">R250.00</p>
                        <button class="product-add-btn">Add
                            to cart</button>
                    </div>
                </div>
            </router-link>
           
        </div>
    </div>
</template>

