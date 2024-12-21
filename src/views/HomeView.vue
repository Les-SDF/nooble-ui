<script lang="ts" setup>
import { FwbJumbotron } from 'flowbite-vue'
import StarsBackground from '@/components/StarsBackground.vue'
import { ref } from 'vue'
import UserSignIn from '@/components/modals/UserSignIn.vue'
import UserSignUp from '@/components/modals/UserSignUp.vue'
import { apiStore } from '@/util/apiStore';

const showSignInModal = ref(false);
const showSignUpModal = ref(false);

console.log("Est connecté : " + apiStore.estConnecte);
</script>

<template>
  <UserSignIn v-if="showSignInModal" :show="showSignInModal" @close="showSignInModal = false" />
  <UserSignUp v-if="showSignUpModal" :show="showSignUpModal" @close="showSignUpModal = false" />
  <div>
    <fwb-jumbotron header-text="Join an engaged community now!"
                   header-classes="text-white"
                   sub-text="Organise E-sport-focused event with ease."
                   style="background: transparent;">
      <div v-if="!apiStore.estConnecte" class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 space-x-3">
        <button @click.prevent="showSignUpModal = true"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-blue-700 border border-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-900">
          Sign Up
        </button>
        <button @click.prevent="showSignInModal = true"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-blue-700 bg-white border border-blue-700 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-700 hover:border-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-900">
          Sign In
        </button>
      </div>
    </fwb-jumbotron>
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
