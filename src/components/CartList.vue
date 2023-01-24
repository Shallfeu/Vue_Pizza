<template>
  <div class="w-full mt-10">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="images/cart.svg" alt="cart-icon" class="mr-4" />
        <h1 class="font-bold text-2xl cursor-default">Cart</h1>
      </div>

      <button
        type="button"
        class="flex items-center duration-300 p-2 text-base text-[#B6B6B6] hover:text-black"
      >
        <img src="images/trash-box.svg" alt="trash-box" class="mr-1" />
        Clear cart
      </button>
    </div>

    <div class="mb-8 max-h-[360px] mt-8 overflow-y-scroll">
      <cart-item v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>

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
      class="mb-7 block ml-auto px-8 py-2 rounded-3xl text-white duration-500 hover:opacity-90 bg-[#FE5F1E]"
    >
      Buy now
    </button>
  </div>
</template>

<script>
// Components
import CartItem from '@/components/CartItem';

export default {
  props: {
    pizzas: {
      type: Array,
      required: true,
    },
  },

  components: {
    CartItem,
  },
};
</script>
