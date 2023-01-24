<template>
  <the-header />
  <div class="mx-auto max-w-screen-sm min-h-[calc(100vh_-_80px)] flex">
    <cart-list v-if="pizzas.length > 0" :pizzas="pizzas" />
    <empty-cart v-else class="mx-auto self-center" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
// Components
import TheHeader from '@/components/TheHeader';
import EmptyCart from '@/components/EmptyCart';
import CartList from '@/components/CartList';

export default {
  name: 'CartView',

  computed: {
    ...mapState({
      pizzas: (state) => state.pizza.items,
    }),
  },

  components: { CartList, TheHeader, EmptyCart },
};
</script>
