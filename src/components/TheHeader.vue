<template>
  <header class="flex justify-between py-4 px-8 shadow-md">
    <the-logo />
    <cart-button v-if="this.$route.path === '/'" :totalCost="21" :quantity="0" />
  </header>
</template>

<script>
// Components
import TheLogo from '@/components/TheLogo';
import CartButton from '@/components/CartButton';

export default {
  components: {
    TheLogo,
    CartButton,
  },
};
</script>
