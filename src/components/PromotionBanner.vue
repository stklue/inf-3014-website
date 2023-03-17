<script setup lang="ts">
</script>

<template>
    <div class="banner-wrapper lg:h-96">
        <div class="banner-left ">
            <h1 class="text-lg lg:text-3xl">Modern Indoor Furniture</h1>
            <h5 class="text-sm p-3">
                Simplistic and minimilistic furniture available at HuisGoed</h5>
            <button class="banner-btn mt-2">Buy now</button>
        </div>
        <div class="banner-right">
            <img class="img-banner" src="../assets/images/banner-rs-rem.png" />
        </div>
    </div>
</template>
<!--  mordern indoor furniture -->
<style scoped>
.banner-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    /*height: 60vh;*/
    background-color: #decbb1;
}

.img-banner {
    object-fit: contain;
    height: 22.5rem;
}

.banner-right {
    display: flex;
    flex:1;
    width: 50%;
    height: 100%;
}

.banner-left {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: right;
    align-content: right;
    color: #382a1d;
}

/*h1 {
    font-size: 2.5rem;
    line-height: 1.75rem;
    font-weight: 700;
    padding-bottom: 30px;
}*/
/*
h5 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding-bottom: 30px;
}
*/

.banner-btn {
    padding: 1rem;
    background-color: #382a1d;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 150ms;
    transition-timing-function: linear;
    color: #ffffff;
    padding-left: 3rem;
    padding-right: 3rem;
}

.banner-btn:hover {
    background-color: #ffffff;
    color: #382a1d;
}
</style>