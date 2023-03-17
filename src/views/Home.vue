<script lang="ts" setup>

import PromotionBanner from '../components/PromotionBanner.vue';
import FurnitureCategory from './FurnitureCategory.vue';
import KitchenwareCat from './KitchenWareCategory.vue';
import DecorCategory from './DecorCategory.vue';
</script>


<template>
    <div class="min-h-screen">
        <PromotionBanner />
        <FurnitureCategory />
        <DecorCategory />
        <KitchenwareCat />
    </div>
</template>

