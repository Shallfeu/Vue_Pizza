<template>
  <div class="flex flex-col items-center shadow-md p-7">
    <img
      @click="$router.push(`/pizzas/${pizza.id}`)"
      :src="pizza.imageUrl"
      alt="pizza-img"
      class="h-48 w-full object-cover md:h-full md:w-48 mb-4 hover:cursor-pointer"
    />

    <h2 class="font-medium text-lg mb-4">{{ pizza.title }}</h2>

    <div class="mb-5 bg-gray-300 w-full rounded-md p-2">
      <div class="mb-2 flex gap-2">
        <button
          @click="onSelectType(type)"
          v-for="(type, index) in types"
          :key="type"
          class="duration-500 border-2 border-gray-700 text-center text-base font-medium rounded-md px-4 w-full"
          :class="{
            'border border-transparent hover:border-white hover:cursor-pointer':
              pizza.types.includes(index),
            'bg-white': choosen.type === type,
          }"
          :disabled="!pizza.types.includes(index)"
          type="button"
        >
          {{ type }}
        </button>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <button
          @click="onSelectSize(size)"
          v-for="size in sizes"
          :key="size"
          class="duration-500 border-2 border-gray-700 text-center text-base font-medium rounded-md"
          :class="{
            'border border-transparent hover:border-white hover:cursor-pointer':
              pizza.sizes.includes(size),
            'bg-white': choosen.size === size,
          }"
          :disabled="!pizza.sizes.includes(size)"
          type="button"
        >
          {{ size }} sm
        </button>
      </div>
    </div>

    <div class="flex justify-between w-full items-center">
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

  data() {
    return {
      choosen: {
        type: '',
        size: '',
      },

      types: ['????????????', '????????????????????????'],
      sizes: [26, 30, 40],
    };
  },

  methods: {
    onSelectType(value) {
      this.choosen.type = value;
    },

    onSelectSize(value) {
      this.choosen.size = value;
    },
  },
};
</script>
