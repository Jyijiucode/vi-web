<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button @click="() => router.push({path: '/home'})">Home</button>
  <button @click="() => router.push({path: '/license_plate'})">License Plate</button>
  <button @click="() => router.push({path: '/vehicle_detect'})">Vehicle Detect</button>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
