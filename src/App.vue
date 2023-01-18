<template>
  <div class="bg-[#FFDF8C] p-7">
    <div class="container mx-auto bg-white rounded-md min-h-screen">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('pizza', { fetchPizza: 'fetchData' }),
  },

  created() {
    this.fetchPizza();
  },
};
</script>
