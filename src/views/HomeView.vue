<script lang="ts" setup>
import { FwbJumbotron } from 'flowbite-vue'
import StarsBackground from '@/components/StarsBackground.vue'
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'
import UserLogin from '@/views/UserLogin.vue'
import UserSignup from '@/views/UserSignup.vue'
// import { ref } from 'vue';
import type { Ref } from 'vue';
// import type { User } from '@/types';
// import { apiStore } from '@/util/apiStore';
// import EntityEnum from '@/util/lib/entityEnum';
import type { Event } from '@/type';
import { apiStore } from '@/util/apiStore';
import EntityEnum from '@/util/lib/entityEnum';

// const users: Ref<User[]> = ref([]);

// apiStore.getAll('users').then(reponseJSON => {
//     users.value = reponseJSON["member"]
// });

// const user = ref(null);
// const userId = 1;

// apiStore.getById(EntityEnum.user, userId).then(response => {
//   user.value = response;
// });

const events: Ref<Event[]> = ref([]);

apiStore.getAll(EntityEnum.event).then((reponseJSON) => {
  const data = reponseJSON as { member: Event[] };
  console.log(data);
  events.value = data.member;
  console.log(events);
});

const showSignInModal = ref(false);
const showSignOutModal = ref(false);

function openSignOutModal() {
  showSignOutModal.value = true;
}

function closeSignOutModal() {
  showSignOutModal.value = false;
}

function openSignInModal() {
  showSignInModal.value = true;
}

function closeSignInModal() {
  showSignInModal.value = false;
}
console.log("Est connecter : " + apiStore.estConnecte );
</script>

<template>
  <div>
    <fwb-jumbotron header-text="Join an engaged community now!"
                   header-classes="text-white"
                   sub-text="Organise E-sport-focused event with ease."
                   style="background: transparent;">
      <div v-if="!apiStore.estConnecte" class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 space-x-3">
        <div @click.prevent="openSignOutModal"
           class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-blue-700 border border-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-900">
          Sign up
        </div>
        <div @click.prevent="openSignInModal"
           class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-blue-700 bg-white border border-blue-700 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-700 hover:border-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-900">
          Sign in
        </div>
      </div>
    </fwb-jumbotron>

    <div v-if="showSignInModal" class="modal-overlay" @click="closeSignInModal">
      <div class="modal-content" @click.stop>
        <UserLogin />
      </div>
    </div>

    <div v-if="showSignOutModal" class="modal-overlay" @click="closeSignOutModal">
      <div class="modal-content" @click.stop>
        <UserSignup />
      </div>
    </div>

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
    <stars-background></stars-background>
  </div>
</template>

<style scoped>
fwb-jumbotron .sub-text {
  color: #6998ca;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.modal-content {
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

</style>
