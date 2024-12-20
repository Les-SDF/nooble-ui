<script setup lang="ts">
import { apiStore } from '@/util/apiStore.ts'
import EntityEnum from '@/util/lib/entityEnum.ts'
import { useRoute } from 'vue-router'
import type { Event } from '@/type.ts'
import { ref } from 'vue'

const route = useRoute();

const event = ref();

apiStore.getById(EntityEnum.event,Number(route.params.id)).then(reponseJSON => {
  const data = reponseJSON as { member: Event };
  event.value = data.member;
  console.log(reponseJSON);
});
</script>

<template>
  <div class="p-6 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ event?.titre || 'Our Kibertopiks will give you nothing, waste your money on us' }}
      </h2>
      <h3 class="text-xl text-gray-500">Prix de l'event</h3>
    </div>
    <p v-if="event" class="text-gray-700 text-lg">
      {{ event?.description || 'Description de notre event' }}
    </p>
    <div v-else class="text-gray-500 text-lg">
      <p>Loading event data...</p>
    </div>

    <div class="mt-6 bg-white p-4 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold text-gray-800">List infini scroll horizontal de l'event</h3>
      <!-- You can add your infinite scroll component here -->
    </div>
  </div>
</template>



<style scoped lang="scss">

</style>
