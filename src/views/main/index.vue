<script lang="ts" setup>
import ColumnList, { ColumnProps } from '../../components/list/ColumnList.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '车牌识别',
    desc: '识别出图片中汽车的车牌号',
    img: 'https://s1.328888.xyz/2022/07/12/LGSi6.jpg'
  },
  {
    id: 2,
    title: '车辆检测',
    desc: '识别图像中的所有车辆',
    img: 'https://s1.328888.xyz/2022/07/12/LGHMI.png'
  },
  {
    id: 3,
    title: '车型识别',
    desc: '识别车辆品牌型号',
    img: 'https://s1.328888.xyz/2022/07/12/LGnSm.jpg'
  }
]

const testData2: ColumnProps[] = [
  {
    id: 4,
    title: '车辆属性识别',
    desc: '针对小汽车识别11种外观属性\n' + '(暂未实现）',
    img: 'https://s1.328888.xyz/2022/07/12/LCOl0.jpg'
  },
  {
    id: 5,
    title: '车损识别',
    desc: '车辆外观损伤识别' + '(暂未实现）',
    img: 'https://s1.328888.xyz/2022/07/12/LCDSs.jpg'
  },
  {
    id: 6,
    title: '驾驶行为分析',
    desc: '针对车载场景识别驾驶员行为' + '(暂未实现）',
    img: 'https://s1.328888.xyz/2022/07/12/LCjap.jpg'
  }
]
</script>

<template>
  <div class="main-container">
    <column-list :list="testData" />
    <column-list :list="testData2"/>
  </div>

</template>

<style lang="scss" scoped>
@import '@/assets/css/main/main.scss'
</style>
