<script lang="ts" setup>
</script>

<template>
    <h1>车型检测</h1>
    <el-container >
      <el-main class="e1">
        <div class="menu-img">
          <input type="file" accept="image/*" @change="showImg()" ref="img">
          <div class="img-wrap" v-if="imgUpload.imgShow">
            <img :src="imgUpload.imgSrc || '0'"  alt="">
              <i class="el-icon-refresh menu-refresh" @click="changeImg()"></i>
          </div>
          <div class="mi-tips">
            点击上方空白处添加图片
          </div>
        </div>
      </el-main>
      <el-main>
        <el-card class="box-card">
          <div class="clearfix">
            <el-button style="float: left; padding: 3px 0" type="primary">识别车型</el-button>
          </div>
          <div v-for="a in 3" :key="a" class="text item">
            {{'识别结果'+ a+':'}}
          </div>
        </el-card>
      </el-main>

    </el-container>
</template>

<script>
export default {
  data () {
    return {
      imgUpload: {
        imgShow: false,
        imgSrc: null
      }
    }
  },
  methods: {
    showImg () {
      const that = this
      const f = new FileReader()
      f.readAsDataURL(this.$refs.img.files[0])
      f.onload = function () {
        that.imgUpload.imgSrc = f.result
      }
      that.imgUpload.imgShow = true
    },
    changeImg () {
      this.$refs.img.dispatchEvent(new MouseEvent('click'))
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-img{
    box-shadow: 0 2px 10px rgba(0, 0, 0, .12);
    position:relative;width:600px;height:390px;
    top: 0;
    left: 0;
    background:  no-repeat center 20px;
    input{
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    textarea{color: #000;}
    .mi-tips{
        position: absolute;
        top: 370px;
        width: 100%;
        text-align: center;
        text-align: center;color: #111;font-size: 15px;line-height: 20px;
        p{
            font-size: 13px;
        }
    }
    .img-wrap{
        border-radius: 200px;
        width: 80%;
        height:80%;
        position: absolute;
        top:10%;
        left:10%;
        z-index: 4;
        &:hover{
            .menu-refresh{
                display: table;
            }
        }
    }
    img{
        width: 100%;
        height: 100%;
        z-index: 4;
    }
    .menu-refresh{
        position: absolute;top:10px;right:10px;
        font-size: 25px;
        font-weight: bold;
        display: none;
        z-index: 4;
    }
}

.text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 100px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    height: 390px;
  }
</style>
