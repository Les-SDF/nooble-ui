<script lang="ts" setup>
import { FwbJumbotron } from 'flowbite-vue'
import StarsBackground from '@/components/StarsBackground.vue'
import EventCard from '@/components/EventCard.vue'


const cardData = [
  {
    title: "Kibertopiks #1234",
    image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    description: "A unique digital collectible.",
    time: 5,
    creator: "CyberArtist",
  },
  {
    title: "Mystic Flower",
    image: "https://images.unsplash.com/photo-1528927309968-e4c829cb31f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    description: "An exclusive floral artwork.",
    time: 12,
    creator: "NatureMuse",
  },
  {
    title: "Void Warrior",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    description: "A mysterious warrior from the void.",
    time: 3,
    creator: "GalaxyForge",
  },
];

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

    <div class="card-list">
      <event-card
        v-for="(nft, index) in cardData"
        :key="index"
        :title="nft.title"
        :image="nft.image"
        :description="nft.description"
        :time="nft.time"
        :creator="nft.creator"
      />
    </div>
    <stars-background></stars-background>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
