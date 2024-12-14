<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue';

const menuActive = ref(false);
const menuHover = ref(false);

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
</script>

<template>
  <header>
    <div class="wrapper">
      <nav
        class="menu"
        :class="{ 'menu-active': menuActive, 'menu-hover': menuHover }"
        @mouseleave="onMenuLeave"
        @mouseenter="onMenuHover"
      >
        <h1 @click="toggleMenu">Menu</h1>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>Susy</li>
          <li>Jack</li>
          <li>Nancy</li>
          <li>Kurt</li>
          <li>Clay</li>
          <li>Lisa</li>
        </ul>
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
$menuColor: #c0d4ff;
$menuText: #303237;
$menuItemHeight: 60px;
$degActive: 15deg;
$degHover: 1deg;
$timing: 150ms;
$contentBG: #12829f;
$bodyBg: #21212D;

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
  z-index: 100;
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

  // Menu Toggle
  h1 {
    z-index: 100;
    display: block;
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
      background: #fff;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: block;
    padding: 0 1em;
    width: 100%;
    height: $menuItemHeight;
    color: $menuText;
    line-height: $menuItemHeight;
    background-color: $menuColor;
    &:nth-of-type(2n) {
      background-color: color.adjust($menuColor, $lightness: 2%);
    }
    &:hover {
      background: #fff;
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
  align-items: center;
  overflow: hidden; // Can't scroll this container or the overflow will be visible when the menu is active

  transform-origin: 0% 50%;

  // Shadow
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
