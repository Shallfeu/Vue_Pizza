<template>
  <div class="w-full mt-24">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="images/cart.svg" alt="cart-icon" class="mr-4" />
        <h1 class="font-bold text-2xl">Cart</h1>
      </div>
      <button type="button" class="flex items-center p-2">
        <img src="images/trash-box.svg" alt="trash-box" class="mr-1" />
        <span class="text-base text-[#B6B6B6]">Clear cart</span>
      </button>
    </div>
    <div class=""></div>
    <div class="flex items-center justify-between mb-3">
      <div class="">
        <span class="text-lg mr-1">Quantity:</span>
        <span class="font-bold text-xl">{{ 1 }}</span>
      </div>
      <div class="">
        <span class="text-lg mr-1">Total cost:</span>
        <span class="font-bold text-xl text-[#FE5F1E]">${{ 900 }}</span>
      </div>
    </div>
    <button
      type="button"
      class="block ml-auto px-8 py-2 rounded-3xl text-white duration-500 hover:opacity-90 bg-[#FE5F1E]"
    >
      Buy now
    </button>
  </div>
</template>

<script>
export default {};
</script>
