<template>
  <footer class="footer-wrapper">
    <div class="container mx-auto px-6">
      <div class="flex mt-8">
        <div class=" w-full flex flex-col md:flex-row lg:flex-row justify-between">
          <div class="flex flex-col">
            <span class="font-bold  uppercase mt-4 md:mt-0 mb-2">More Information</span>
            <div class="flex flex-col pt-2 justify-start">
              <router-link class="      hover: " :to="{ name: 'ContactUs' }">Contact Us</router-link>
              <router-link class="     hover: " :to="{ name: 'AboutUs' }">About Us</router-link>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold  uppercase mt-4 md:mt-0 mb-2">Other</span>
            <router-link :to="{ name: 'PrivacyPolicy' }">
              <span>PrivacyPolicy</span>
            </router-link>
            <router-link :to="{ name: 'TermsAndConditions' }">
              <span>Terms And Conditions</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-[#382a1d] flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm  font-bold mb-2 text-[#382a1d]">© 2023 by HuisGoed</p>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  
  
  
<style scoped>
.footer-wrapper {
  background-color: #decbb1;
  height: 24rem;
  width: 100%;
  margin-top: 1.25rem;
  padding: 0.25rem;
  color: #382a1d;
}
</style>