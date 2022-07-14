<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(3n) {
  background-image:url("https://s1.328888.xyz/2022/07/13/L2Xgs.jpg");
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(3n+1) {
  background-color: #d3dce6;
  background-image: url("https://s1.328888.xyz/2022/07/13/L2YA0.jpg");
}
.el-carousel__item:nth-child(3n + 2) {
  background-color: #d3dce6;
  background-image: url("https://s1.328888.xyz/2022/07/13/L2A4p.jpg");
}
</style>
