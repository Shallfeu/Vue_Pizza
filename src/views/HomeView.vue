<template>
  <div>
    <the-header />
    <main-content :pizzas="pizzas" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
// Components
import TheHeader from '@/components/TheHeader';
import MainContent from '@/components/MainContent';

export default {
  name: 'HomeView',

  computed: {
    ...mapState({
      pizzas: (state) => state.pizza.items,
    }),
  },

  components: { TheHeader, MainContent },
};
</script>
