<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { apiStore } from '@/util/apiStore.ts'
import EntityEnum from '@/util/lib/entityEnum.ts'
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/type';

const events: Ref<Event[]> = ref([]);
const isLoading = ref(true);

isLoading.value = true;
apiStore.getAll(EntityEnum.event).then((reponseJSON) => {
  const data = reponseJSON as { member: Event[] };
  console.log(data);
  events.value = data.member;
  console.log(events);
}).finally(()=>{
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading" class="loading-container">
    <img src="@/assets/loading.gif" alt="Chargement..." />
  </div>
  <div v-else class="min-h-screen p-6 flex justify-center">
    <div class="text-center w-full lg:w-2/3">
      <div class="mt-5 mb-5 flex w-full items-center justify-center">
        <h1
          class="relative top-0 w-fit py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Our Events
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <event-card
            v-for="(event, index) in events"
            :key="index"
            :id = event.id
            :title="event.name"
            :description="event.description"
            :creator="event.creator.username"
            :startDate="new Date(event.startDate)"
            :endDate="new Date(event.endDate)"
            :status="event.status"
          />
      </div>
    </div>
  </div>

</template>


<style scoped>
@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 400% 0;
  }
}

h1 {
  display: inline-block;
  background: linear-gradient(65deg, red, orange, yellow, green, cyan, blue, violet);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowing 7s linear infinite;


}
</style>

