<script lang="ts" setup></script>

<template>
    <div class="absolute  inset-0 overflow-y-auto bg-black bg-opacity-50" @click="$emit('close')">
        <div class="flex items-start justify-center min-h-screen mt-24 text-center h-full">
            <div class="bg-white  w-full mx-3 text-[#382a1d] rounded-lg text-center shadow-xl p-6 " role="dialog"
                aria-modal="true">
                <div class="flex w-full flex-col items-start justify-start  space-y-3 pt-4 text-[#382a1d]">
                    <!-- Account SVG -->
                    <div class="w-full flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#382a1d" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span class="right-nav-icon-label">Account</span>
                    </div>

                    <!-- Favourite SVG -->
                    <div class="w-full flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#382a1d" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span class="right-nav-icon-label">Favourite</span>
                    </div>

                    <!-- Shopping lexCart SVG -->
                    <div class="w-full">
                        <router-link :to="{ name: 'ShoppingCart' }" class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#382a1d" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span class="right-nav-icon-label">Cart</span>
                        </router-link>
                    </div>
                    <div class="w-full pt-3 md:flex lg:flex">
                        <!-- Menu in Mobile Mode -->

                        <div class="relative">
                            <!-- Search Icon SVG -->
                            <div class="search-icon">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="#382a1d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" class="search-input" placeholder="Search Bedding, Furniture..." required>
                        </div>
                    </div>

                    <button @click="$emit('close')"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>