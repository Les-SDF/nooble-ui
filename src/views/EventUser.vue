<script setup lang="ts">
import { reactive ,ref, type Ref } from 'vue'
import { apiStore } from '@/util/apiStore.ts'
import EntityEnum from '@/util/lib/entityEnum.ts'
import EventCard from '@/components/EventCard.vue'
import { useRoute } from 'vue-router'
import type { Event } from '@/type';
import type { User } from '@/type';

const route = useRoute();

const user = reactive<Partial<User>>({});

apiStore.getById(EntityEnum.user, Number(route.params.id))
  .then(reponseJSON => {
    console.log( JSON.stringify(reponseJSON));
    const data = reponseJSON as { member: User };
    Object.assign(user,data);
    showUserEvent();
  });

const events: Ref<Event[]> = ref([]);

// apiStore.getAll(EntityEnum.event).then((reponseJSON) => {
//   const data = reponseJSON as { member: Event[] };
//   events.value = data.member;
// });
function showUserEvent(){
  user.members?.forEach((member) => {
    const team = member.team;
    if (team?.teamRegistrations) {
      team.teamRegistrations.forEach((registration) => {
        const event = registration.event;
        if (event?.id) {
          apiStore.getById(EntityEnum.event, event.id).then((response) => {
            console.log("datat : " + JSON.stringify(response));
            const eventData = response as Event;
            events.value.push(eventData);
          });
        }
      });
    }
  });
}
</script>

<template>
  <div class="min-h-screen p-6 flex justify-center">
    <div class="text-center w-full lg:w-2/3">
      <div class="mt-5 mb-5 flex w-full items-center justify-center">
        <h1
          class="relative top-0 w-fit py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          My Events
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

