<template>
  <div class="px-8 py-5">
    <h1 class="mb-4 font-semibold text-2xl">All pizzas</h1>
    <div v-if="pizzas.length > 0" class="grid grid-cols-3 gap-3">
      <pizza-card v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
    <div v-else class="">Loading...</div>
  </div>
</template>

<script>
// Components
import PizzaCard from '@/components/PizzaCard';

export default {
  props: {
    pizzas: { type: Array, required: true },
  },

  components: { PizzaCard },
};
</script>
