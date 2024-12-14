<script setup lang="ts">
import {ref} from 'vue';
import { apiStore } from '@/util/apiStore.ts'
const connectingUser = ref({
  login: "",
  password:""
});

function connect():void{
  apiStore.login(connectingUser.value.login, connectingUser.value.password);
}
</script>



<!-- Version Tailwind (c'est plus moche)-->
<!--<template>
  <div class="w-full h-full max-w-sm p-5 rounded-lg shadow-lg">
    <div class="text-center mb-5">
      <h3 class="text-2xl font-semibold text-gray-800">Connection</h3>
    </div>
    <form @submit.prevent="connect" class="flex flex-col">
      <div class="mb-5">
        <label for="login" class="block text-sm text-gray-600 mb-2">Login</label>
        <input id="login" v-model="connectingUser.login" class="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500" type="text" placeholder="Entrez votre login" />
      </div>
      <div class="mb-5">
        <label for="password" class="block text-sm text-gray-600 mb-2">Mot de passe</label>
        <input id="password" v-model="connectingUser.password" class="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500" type="password" placeholder="Entrez votre mot de passe" />
      </div>
      <button type="submit" class="py-3 text-lg text-white bg-blue-600 rounded-md w-full hover:bg-blue-700 active:bg-blue-800 transition-colors">
        Connexion
      </button>
    </form>
  </div>
</template>-->



<template>
  <div class="wrapper">
    <div class="top">
      <h3 class="title">Connection</h3>
    </div>
    <form @submit.prevent="connect" class="form-content">
      <div class="group">
        <label for="login" class="label">Login</label>
        <input id="login" v-model="connectingUser.login" class="input" type="text" placeholder="Entrez votre login" />
      </div>
      <div class="group">
        <label for="password" class="label">Mot de passe</label>
        <input id="password" v-model="connectingUser.password" class="input" type="password" placeholder="Entrez votre mot de passe" />
      </div>
      <button type="submit" class="submit-btn">
        Connexion
      </button>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.top {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #1a56db;
}

.submit-btn {
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: #1a56db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #1e429f;
}

.submit-btn:active {
  background-color: #1e429f;
}
</style>

