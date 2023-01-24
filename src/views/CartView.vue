<template>
  <the-header />
  <div class="mx-auto max-w-screen-sm min-h-[calc(100vh_-_80px)] flex">
    <cart-list v-if="stuff.length > 0" />
    <empty-cart v-else class="mx-auto self-center" />
  </div>
</template>

<script>
// Components
import TheHeader from '@/components/TheHeader';
import EmptyCart from '@/components/EmptyCart';
import CartList from '@/components/CartList';

export default {
  name: 'CartView',

  data() {
    return {
      stuff: [1],
    };
  },

  components: { CartList, TheHeader, EmptyCart },
};
</script>
