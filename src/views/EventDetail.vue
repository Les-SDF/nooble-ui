<script setup lang="ts">
import { apiStore } from '@/util/apiStore.ts'
import EntityEnum from '@/util/lib/entityEnum.ts'
import { useRoute } from 'vue-router'
import type { Event, User } from '@/type.ts'
import { reactive, ref } from 'vue'
import LoadingMenu from '@/components/LoadingMenu.vue'

const route = useRoute();

const event = reactive<Partial<Event>>({});
const isLoading = ref(true);

function formatDate(date:Date) {
  if (!date) return null;
  const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"};
  return new Intl.DateTimeFormat("fr-FR", options).format(new Date(date));
}
const user = reactive<Partial<User>>({});
if(apiStore.estConnecte && apiStore.utilisateurConnecte.id !=null){

apiStore.getById(EntityEnum.user, Number(apiStore.utilisateurConnecte.id))
  .then(reponseJSON => {
    console.log( JSON.stringify(reponseJSON));
    const data = reponseJSON as { member: User };
    Object.assign(user,data);
  })

}
apiStore.getById(EntityEnum.event,Number(route.params.id)).then(reponseJSON => {
  const data = reponseJSON as { member: Event };
  Object.assign(event,data);
  console.log(reponseJSON);
}).finally(()=>{
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">
    <LoadingMenu></LoadingMenu>
  </div>
  <div v-else class="m-auto p-6 max-w-4xl w-2/3">
    <!-- Card principale pour l'événement -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6 space-y-6">

      <!-- Titre et sous-titre -->
      <div>
        <h1 class="text-3xl font-bold text-gray-800">
          {{ event.name || "Titre de l'événement" }}
        </h1>
        <p class="text-lg text-gray-500 mt-2">
          {{ event.theme || "Thème de l'événement" }}
        </p>
      </div>

      <!-- Description -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800">Description</h2>
        <p class="text-gray-700 mt-4 text-base">
          {{ event.description || "Aucune description disponible pour cet événement." }}
        </p>
      </div>

      <!-- Détails de l'événement -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800">Détails</h2>
        <ul class="mt-4 space-y-2">
          <li class="text-gray-700 flex gap-2">
            <strong>Date :</strong> {{ formatDate(event.startDate) || "Date non définie" }}
            <strong class="ml-4">Date :</strong> {{ formatDate(event.endDate) || "Date non définie" }}
          </li>
          <li class="text-gray-700">
            <strong>Lieu :</strong> {{ event.location || "Lieu non défini" }}
          </li>
          <li class="text-gray-700">
            <strong>Prix d'entrée :</strong> {{ event.price || "Gratuit" }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Recompense  -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6 space-y-6">
      <h2 class="text-2xl font-semibold text-gray-800">Reward</h2>
      <div class="mt-4">
      </div>
    </div>

    <!-- Join a Team -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-800">Join a Team</h2>
      <div class="mt-4">
        <button
          v-if="
            event &&
            apiStore.estConnecte &&
            user &&
            (Array.isArray(user.participatedEvents) &&
            !user.participatedEvents.includes(Number(route.params.id)) || !user.participatedEvents)
          "
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          S'inscrire à l'événement
        </button>
        <p v-else class="text-gray-500 italic">
          Chargement des données de l'événement...
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

</style>
