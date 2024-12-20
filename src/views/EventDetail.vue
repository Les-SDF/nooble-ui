<script setup lang="ts">
import { apiStore } from '@/util/apiStore.ts'

apiStore.getById(EntityEnum.event, $route.params.id).then(reponseJSON => {
  console.log(reponseJSON);
});
</script>

<template>

</template>

<style scoped lang="scss">

</style>
