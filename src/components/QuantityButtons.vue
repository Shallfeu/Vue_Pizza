<template>
  <div class="">
    <button @click="this.$emit('minus')" type="button" class="">-</button>
    {{ quantity }}
    <button @click="this.$emit('plus')" type="button" class="">+</button>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      required: true,
    },
  },
};
</script>
