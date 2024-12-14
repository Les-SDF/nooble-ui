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
  border-color: #007bff;
}

.submit-btn {
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.submit-btn:active {
  background-color: #003f7f;
}
</style>

