<template>
  <div class="px-8 py-5">
    <h1 class="mb-4 font-semibold text-2xl">All pizzas</h1>
    <div class="grid grid-cols-3 gap-3">
      <pizza-card v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
  </div>
</template>

<script>
// Components
import PizzaCard from '@/components/PizzaCard';
import axios from 'axios';

export default {
  data() {
    return {
      pizzas: [],
    };
  },

  components: { PizzaCard },

  methods: {
    async getData() {
      const { data } = await axios.get(`https://6293a6f47aa3e6af1a0ef002.mockapi.io/Pizzas`);
      this.pizzas = data;
    },
  },

  mounted() {
    this.getData();
  },
};
</script>
