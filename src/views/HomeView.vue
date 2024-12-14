<script lang="ts" setup>
import { FwbJumbotron } from 'flowbite-vue'
import StarsBackground from '@/components/StarsBackground.vue'
</script>

<template>
  <div>
    <fwb-jumbotron header-text="Join an engaged community now!"
                   sub-text="Organise E-sport-focused event with ease."
                   style="background: transparent;">
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#"
           class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Sign up
        </a>
      </div>
    </fwb-jumbotron>
    <stars-background></stars-background>
  </div>
</template>
