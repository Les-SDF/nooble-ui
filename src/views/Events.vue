<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { apiStore } from '@/util/apiStore.ts'
import EntityEnum from '@/util/lib/entityEnum.ts'
import EventCard from '@/components/EventCard.vue'

const events: Ref<Event[]> = ref([]);

apiStore.getAll(EntityEnum.event).then(reponseJSON => {
  console.log(reponseJSON);
  events.value = reponseJSON["member"];
  console.log(events);
});
</script>

<template>
  <div class="card-list">
    <event-card v-for="(nft, index) in events"
                :key="index"
                :title="nft.name"
                :description="nft.description"
                :creator="nft.creator.username"
                :startDate="new Date(nft.startDate)"
                :endDate="new Date(nft.endDate)"
                :status="nft.status"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
