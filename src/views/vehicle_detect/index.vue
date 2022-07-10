<script lang="ts" setup>
import { getRoomList } from '../../api'

const params = {
  pageNo: 1,
  pageSize: 3,
  cityCode: ''
}

const fetchRoomList = () => {
  getRoomList(params).then(res => {
    const { success, result } = res
    const orders = result.orders
    const total = result.total
    if (success) {
      console.log('orders.data', orders.data)
      console.log('total', total)
    }
  })
}

fetchRoomList()
</script>

<template>
  <h1>Vehicle Detect</h1>
</template>

<style>
</style>
