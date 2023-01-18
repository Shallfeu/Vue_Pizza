<template>
  <div>
    <the-header />
    <main-content />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import MainContent from '@/components/MainContent';

export default {
  components: { TheHeader, MainContent },
  name: 'HomeView',
};
</script>
