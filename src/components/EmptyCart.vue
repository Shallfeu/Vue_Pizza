<template>
  <div class="flex flex-col items-center">
    <h2 class="font-bold text-2xl mb-3">Cart is empty 😕</h2>
    <p class="font-normal text-lg text-[#777777]">Probably you didn't order pizza yet</p>
    <p class="font-normal text-lg text-[#777777] mb-10">Order some pizza and get back!</p>
    <img src="images/empty-cart.png" alt="empty-cart" class="mb-10" />
    <back-button class="mb-4" />
  </div>
</template>

<script>
// Components
import BackButton from '@/components/BackButton';

export default {
  components: { BackButton },
};
</script>
