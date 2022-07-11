<script setup lang="ts">
import GlobalHeader from './components/layout/GlobalHeader.vue'
import GlobalFooter from './components/layout/GlobalFooter.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <global-header />
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
      <el-footer>
        <global-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
</style>
