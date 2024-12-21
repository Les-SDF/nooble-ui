<script setup lang="ts">
import loading from '@/assets/loading.gif';
</script>

<template>
  <div class="loading-spinner w-[100%] flex justify-center align-mid h-[calc(100%)]">
    <img :src="loading" alt="Loading" />
  </div>
</template>

<style scoped lang="scss">
.loading-spinner{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
