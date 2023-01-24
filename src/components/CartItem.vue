<template>
  <div class="pr-2 mb-8 flex items-center justify-between">
    <div class="flex basis-[320px]">
      <img
        :src="pizza.imageUrl"
        alt="pizza-image"
        class="h-[100px] w-full object-cover md:h-[100px] md:w-[100px] hover:cursor-pointer"
      />
      <div class="ml-4 flex flex-col">
        <h3 class="">{{ pizza.title }}</h3>
        <p class>{{ pizza.sizes[0] }}, {{ pizza.types[0] }}</p>
      </div>
    </div>

    <div class=""><quantity-buttons :quantity="test" @plus="plusItem" @minus="minusItem" /></div>

    <div class="font-bold text-lg">${{ 123 }}</div>

    <button
      type="button"
      class="p-2 border border-[#D0D0D0] rounded-full duration-300 hover:bg-[#D0D0D0] hover:border-black text-black"
    >
      <img src="images/delete-icon.svg" alt="delete-icon" />
    </button>
  </div>
</template>

<script>
// Components
import QuantityButtons from '@/components/QuantityButtons';

export default {
  data() {
    return {
      test: 0,
    };
  },

  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },

  methods: {
    plusItem() {
      this.test += 1;
    },

    minusItem() {
      this.test -= 1;
    },
  },

  components: { QuantityButtons },
};
</script>
