<template>
    <div class="order-confirm-wrapper">
        <h1>Order was successfull</h1>
        <h2>Thank you for shopping at HuisGoed</h2>
        <router-link :to="{ name: 'Home' }">
            <p class="order-home-link">
                Continue to Home
            </p>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import "/src/index.css"
</script>