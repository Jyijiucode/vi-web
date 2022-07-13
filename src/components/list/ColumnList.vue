<script lang="ts" setup>
import { PropType } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  img: string
  desc: string
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true
  }
})
</script>

<template>
  <el-row class="column-row">
    <el-col
      v-for="(column, index) in props.list"
      :key="column.id"
      :span="6"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
        :src="column.img"
        class="image" />
        <div style="padding: 14px">
          <span>{{ column.title }}</span>
          <div class="bottom">
            <span class="desc">{{ column.desc }}</span>
            <el-button type="info" plain class="button">开始使用</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.column-row {
  margin-bottom: 20px;
}

.bottom {
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.desc {
  margin-bottom: -16px;
  width: 70%;
  overflow: hidden;
  display: -webkit-box;
  font-size: 12px;
  color: #999;
}

.button {
  padding: 4px;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
