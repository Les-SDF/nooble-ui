<script setup lang="ts">
import { EventStatus } from '@/util/lib/EventStatus';
import { RouterLink } from 'vue-router'

const props = defineProps<{
  id?:number;
  title?: string;
  image?: string;
  description?: string;
  time?: number;
  startDate?: Date;
  endDate?: Date;
  status?: EventStatus;
  creator?: string;
}>();


let computedTime: number;

if (props.endDate && props.endDate.getTime() > Date.now()) {
  computedTime = Math.ceil((props.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

</script>,

<template>
  <RouterLink :to="{ name: 'EventDetail', params: { id: id } }">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' :src="image || 'https://www.legrand.mg/modules/custom/legrand_ecat/assets/img/no-image.png'" alt="NFT" />
      <h2>{{title}}</h2>
      <p class='description'>{{ description || 'Pas de description' }}.</p>
      <div class='tokenInfo'>
        <div class="duration">
          <ins>◷</ins>
          <p>{{computedTime || 0}} days left</p>
          <span class="separator">|</span>
          <p>{{status || "Unknown"}}</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
        </div>
        <p><ins>Organized by</ins> {{ creator || 'Unknown' }}</p>
      </div>
    </div>
  </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #191b22; /* Dark background */
  color: #b9bdcc; /* Light text */
  user-select: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

h2 {
  height: 3rem;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nft {
  user-select: none;
  max-width: 300px;
  margin: 5rem auto;
  margin-top: 2rem;
  border: 1px solid rgba(128, 168, 216, 0.13);
  background-color: #005fff; /* Darker background with blue undertones */
  background: linear-gradient(0deg, rgb(65, 92, 170) 0%, rgba(30, 71, 158, 0.5) 100%);
  box-shadow: 0 7px 20px 5px rgba(29, 29, 32, 0.53);
  border-radius: .7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: .5s all;

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(90, 95, 129, 0.33);
    margin-top: 0;
  }

  ins {
    text-decoration: none;
  }

  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;

    .tokenImage {
      border-radius: .5rem;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .description {
      margin: 1rem 0;
      color: #6998ca;
      max-width: 90%;
      height: 5rem;
      max-height: 5rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tokenInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .duration {
        display: flex;
        align-items: center;
        color: #8a97d5;
        margin-right: .2rem;

        ins {
          margin: .5rem;
          margin-bottom: .4rem;
        }
      }
    }

    .creator {
      display: flex;
      align-items: center;
      margin-top: .2rem;
      margin-bottom: -.3rem;

      ins {
        color: #8a97d5;
        text-decoration: none;
      }

      .wrapper {
        display: flex;
        align-items: center;
        border: 1px solid rgba(226, 229, 236, 0.56);
        padding: .3rem;
        margin: 0;
        margin-right: .5rem;
        border-radius: 100%;
        box-shadow: inset 0 0 0 4px rgba(103, 114, 156, 0.67);

        img {
          border-radius: 100%;
          border: 1px solid rgba(219, 221, 228, 0.13);
          width: 2rem;
          height: 2rem;
          object-fit: cover;
          margin: 0;
        }
      }
    }
  }

  ::before {
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px rgba(190, 196, 220, 0.03);
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: .7s all;
  }

  &:hover {
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 50px 10px rgba(42, 42, 46, 0.67);
    transform: scale(1.015);
    filter: brightness(1.3);

    ::before {
      filter: brightness(.5);
      top: -100%;
      left: 200%;
    }
  }

  .separator {
    margin: 0 0.5rem;
    color: #8a97d5;
  }
}

.bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 20rem;
    filter: opacity(0.5);
  }
}
</style>
