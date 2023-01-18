<template>
  <button
    type="button"
    class="bg-[#FE5F1E] text-white flex py-2 px-6 items-center font-semibold rounded-3xl"
  >
    ${{ totalCost }}
    <span class="ml-2 flex items-center border border-l-white border-r-0 border-t-0 border-b-0">
      <img src="images/cart-icon.svg" alt="cart-icon" class="mx-2" />
      {{ quantity }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    totalCost: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
};
</script>
