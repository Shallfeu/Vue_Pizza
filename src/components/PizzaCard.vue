<template>
  <div class="flex flex-col items-center shadow-md p-7">
    <img
      :src="pizza.imageUrl"
      alt="pizza-img"
      class="h-48 w-full object-cover md:h-full md:w-48 mb-4"
    />

    <h2 class="font-medium text-lg mb-5">{{ pizza.title }}</h2>

    <div class="mb-5 bg-teal-500">s</div>

    <div class="flex justify-between w-full">
      <span class="font-bold text-lg">${{ pizza.price }}</span>

      <button
        type="button"
        class="hover:bg-[#EB5A1E] hover:text-white transition-all duration-500 flex items-center px-6 py-2 rounded-3xl border border-[#EB5A1E] text-[#EB5A1E]"
      >
        <img src="images/plus-icon.svg" alt="plus-icon" class="mr-2" />

        <span class="font-medium text-md">Buy</span>

        <span>{{ pizza.quantity }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pizza: { type: Object },
  },
};
</script>
