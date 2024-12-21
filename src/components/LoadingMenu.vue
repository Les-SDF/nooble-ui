<script setup lang="ts">
import loading from '@/assets/Loading.gif';
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-opacity-80 z-[9999]">
    <img :src="loading" alt="Loading" />
  </div>
</template>


<style scoped lang="scss">
</style>
