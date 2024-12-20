<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { reactive, type Ref, ref } from 'vue'
import { apiStore } from '@/util/apiStore';
import type { User } from '@/type.ts'

const loaded = ref(false);
const menuActive = ref(false);
const menuHover = ref(false);
//@TODO A changer quand connexion implemente
const isLoggedIn = ref(true); // Simule si l'utilisateur est connecté

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
  menuHover.value = false;  // désactive le hover quand le menu est ouvert
};

const onMenuHover = () => {
  if (!menuActive.value) {
    menuHover.value = true;
  }
};

const onMenuLeave = () => {
  menuHover.value = false;
};

//@TODO A changer quand connexion implemente
const logout = () => {
  isLoggedIn.value = false;
  apiStore.logout();
};
apiStore.refresh().then(() => {
  loaded.value = true;
}).catch(() => {
  loaded.value = true;
});

const user = reactive<Partial<User>>({});
if (apiStore.utilisateurConnecte) {
  Object.assign(user, apiStore.utilisateurConnecte);
}


</script>

<template>
  <header v-if="loaded">
    <div class="wrapper">
      <nav
        class="menu"
        :class="{ 'menu-active': menuActive, 'menu-hover': menuHover }"
        @mouseleave="onMenuLeave"
        @mouseenter="onMenuHover"
      >
        <h1 @click="toggleMenu">Menu</h1>
        <ul>
          <li @click="menuActive = false">
            <RouterLink :to="{name: 'HomeView'}">Home</RouterLink>
          </li>
          <li @click="menuActive = false">
            <RouterLink :to="{name: 'EventList'}">Events</RouterLink>
          </li>
          <li v-if="isLoggedIn" @click="menuActive = false">
<!--            TODO: Remplacer par user.id-->
            <RouterLink :to="{name: 'ProfileUser', params: {id: 1}}">Profile</RouterLink>
          </li>
        </ul>
        <div v-if="isLoggedIn" class="logout-btn" @click="logout">
          Logout
        </div>
      </nav>
      <main :class="{ 'menu-active': menuActive }">
        <RouterView />
      </main>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "sass:color";

@import url(https://fonts.googleapis.com/css?family=Raleway:400,800,200);

$menuWidth: 16em;
$menuColor: #161a23;
$menuText: #6998ca;
$menuItemHeight: 60px;
$degActive: 15deg;
$degHover: 1deg;
$timing: 150ms;
$contentBG: #12829f;
$bodyBg: #21212D;
$hoverBg: #354b7a;
$logoutBg: #e63946;

html,
body {
  height: 100%;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Raleway, sans-serif;
  line-height: 1.7;
  perspective-origin: 0% 50%;
  perspective: 800px;
  background: $bodyBg;
}

nav,
main {
  transition: transform $timing ease-out;
}

nav {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: $menuWidth;
  background-color: $menuColor;
  transform: translateX(-$menuWidth);
  &.menu-active {
    transform: translateX(0);
  }
  &.menu-hover {
    transform: translateX(-($menuWidth - calc($menuWidth / 16)));
  }

  h1 {
    z-index: 1;
    position: absolute;
    top: 0;
    right: -$menuItemHeight;
    height: $menuItemHeight;
    width: $menuItemHeight;
    line-height: $menuItemHeight;
    font-size: .8em;
    font-weight: 800;
    letter-spacing: 1px;
    color: $menuText;
    text-transform: uppercase;
    text-align: center;
    background-color: $menuColor;
    cursor: pointer;
    &:hover {
      color: $menuColor;
      background: $hoverBg;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: block;
      padding: 0 1em;
      width: 100%;
      height: $menuItemHeight;
      line-height: $menuItemHeight;
      color: $menuText;
      cursor: pointer;
      background-color: $menuColor;

      &:hover {
        background-color: $hoverBg;
      }

      a {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .logout-btn {
    position: absolute;
    bottom: 1em;
    width: calc(100% - 2em);
    margin: 0 1em;
    padding: 0.5em 0;
    text-align: center;
    color: white;
    background-color: $logoutBg;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: color.adjust($logoutBg, $lightness: -10%);
    }
  }
}

main {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  transform-origin: 0% 50%;

  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to right, transparent, rgba($bodyBg, .5));
    visibility: hidden;
    opacity: 0;
    transition: opacity $timing ease-out, visibility 0s $timing;
  }

  &.menu-active {
    border-radius: .001px;
    transform: translateX($menuWidth) rotateY($degActive);
    &:after {
      visibility: visible;
      opacity: 1;
      transition: opacity $timing ease-out, visibility 0s;
    }
  }

  &.menu-hover {
    border-radius: .001px;
    transform: translateX((calc($menuWidth / 16))) rotateY($degHover);
  }
}
</style>
