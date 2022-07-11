<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeIndex = ref('main')
const handleSelect = (key: string, keyPath: string[]) => {
  switch (key) {
    case 'main':
      router.push({ path: '/' })
      break
    case 'license_plate':
      router.push({ path: '/license_plate' })
      break
    case 'vehicle_detect':
      router.push({ path: '/vehicle_detect' })
      break
    case 'car':
      router.push({ path: '/car' })
      break
    case 'vehicle_attr':
      router.push({ path: '/vehicle_attr' })
      break
    case 'vehicle_damage':
      router.push({ path: '/vehicle_damage' })
      break
    case 'driver_behavior':
      router.push({ path: '/driver_behavior' })
      break
  }
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="main">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="license_plate">车牌识别</el-menu-item>
    <el-sub-menu>
      <template #title>开发中</template>
      <el-menu-item index="vehicle_detect">车辆检测</el-menu-item>
      <el-menu-item index="car">车辆识别</el-menu-item>
      <el-menu-item index="vehicle_attr">车辆属性识别</el-menu-item>
      <el-menu-item index="vehicle_damage">车损识别</el-menu-item>
      <el-menu-item index="driver_behavior">驾驶行为分析</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
