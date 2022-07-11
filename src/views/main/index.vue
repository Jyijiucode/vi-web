<script lang="ts" setup>
import ColumnList, { ColumnProps } from '../../components/list/ColumnList.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    desc: 'sadfasdfasfdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
    img: ''
  },
  {
    id: 2,
    title: 'test2',
    desc: 'sadfasdfasfdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
    img: ''
  },
  {
    id: 3,
    title: 'test3',
    desc: 'sadfasdfasfdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
    img: ''
  }
]
</script>

<template>
  <div class="main-container">
    <column-list :list="testData" />
    <column-list :list="testData" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main/main.scss'
</style>
