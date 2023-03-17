<script setup lang="ts">

</script>

<template>
  <div class="p-12 mx-auto">
    <h2 class="mb-6 text-[#382a1d] font-bold md:text-xl text-heading ml-24 ">Shipping Address</h2>
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
      <div class="flex space-x-5 md:w-full">

        <form class="justify-center w-1/2 mx-auto">
          <div class="space-x-0 lg:flex lg:space-x-4">

            <div class="w-full lg:w-1/2">
              <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">
                First Name
              </label>
              <input name="firstName" type="text" placeholder="First Name" class="
                        w-full
                        px-4
                        py-3
                        text-sm
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " />

            </div>

            <div class="w-full lg:w-1/2">
              <label for="lastName" class="block mb-3 text-sm font-semibold text-gray-500">
                Last Name
              </label>
              <input name="lastName" type="text" placeholder="Last Name" class="
                        w-full
                        px-4
                        py-3
                        text-sm
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " />

            </div>


            <div class="w-full lg:w-1/2">
              <label for="phone" class="block mb-3 text-sm font-semibold text-gray-500">
                Phone Number
              </label>
              <input name="phone" type="text" placeholder="Last Name" class="
                        w-full
                        px-4
                        py-3
                        text-sm
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " />

            </div>
          </div>


          <div class="mt-4">
            <div class="w-full">
              <label for="Email" class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
              <input name="email" type="email" placeholder="Email" class="
                        w-full
                        px-4
                        py-3
                        text-sm
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " />
            </div>
          </div>


          <div class="mt-4">
            <div class="w-full">
              <label for="address" class="block mb-3 text-sm font-semibold text-gray-500">Home Address</label>
              <textarea required class="
                        w-full
                        px-4
                        py-3
                        text-xs
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " name="address" cols="20" rows="4" placeholder="Address"></textarea>
            </div>

          </div>

          <div class="space-x-0 lg:flex lg:space-x-4">

            <div class="w-full lg:w-1/2">
              <label for="city" class="block mb-3 text-sm font-semibold text-gray-500">City/Town</label>
              <input name="city" type="text" placeholder="City" class="
                        w-full
                        px-4
                        py-3
                        text-sm
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " />

            </div>


            <div class="w-full lg:w-1/2">
              <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">Postcode</label>
              <input name="postcode" type="text" placeholder="Post Code" class="
                        w-full
                        px-4
                        py-3
                        text-sm
                        border border-gray-300
                        rounded
                        lg:text-sm
                        focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                      " />

            </div>
          </div>


          <div class="relative pt-3 xl:pt-6">
            <label for="note" class="block mb-3 text-sm font-semibold text-gray-500">
              Notes (Optional)
            </label>
            <textarea name="note" class="
                      flex
                      items-center
                      w-full
                      px-4
                      py-3
                      text-sm
                      border border-gray-300
                      rounded
                      focus:outline-none focus:ring-1 focus:ring-[#382a1d]
                    " rows="4" placeholder="Notes for delivery"></textarea>
          </div>
        </form>
        <div class="bg-[#decbb1] p-4 flex flex-col w-1/3 h-40 font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>
            R550.00
          </span>
          <router-link :to="{name: 'OrderConfirmation'}">

            <button   class="w-full px-6 py-2 my-2 text-white bg-[#382a1d] ">Pay Now</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
