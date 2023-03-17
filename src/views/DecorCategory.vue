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
        <div class="product-wrapper flex-wrap">
            <div v-for="prod in products" :key="prod.id">
                <router-link :to="`/category/decor/${prod.id}`">
                    <div class="product">
                        <img class="product-img" :src="prod.image" alt="" />
                        <div class="p-5">
                            <h5 class="product-name">{{ prod.name }}</h5>
                            <p class=" ">R{{ prod.price }}.00</p>
                            <button class="product-add-btn">Add
                                to cart</button>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
