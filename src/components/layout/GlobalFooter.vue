<script setup lang="ts">
import { reactive } from 'vue'

const footerMenu = reactive([
  {
    title: 'AI404',
    menus: [
      {
        name: '社会招聘',
        link: ''
      },
      {
        name: '校园招聘',
        link: ''
      },
      {
        name: '国际招聘',
        link: ''
      },
      {
        name: '简介',
        link: ''
      },
      {
        name: '成员',
        link: ''
      }
    ]
  },
  {
    title: '联系我们',
    menus: [
      {
        name: '客户服务',
        link: ''
      },
      {
        name: '合作洽谈',
        link: ''
      },
      {
        name: '采购信息',
        link: ''
      },
      {
        name: '媒体',
        link: ''
      },
      {
        name: '投资者',
        link: ''
      }
    ]
  },
  {
    title: '法律信息',
    menus: [
      {
        name: '服务协议',
        link: ''
      },
      {
        name: '隐私政策',
        link: ''
      },
      {
        name: '知识产权',
        link: ''
      },
      {
        name: '举报',
        link: ''
      },
      {
        name: '法律团队',
        link: ''
      }
    ]
  },
  {
    title: '商业合作',
    menus: [
      {
        name: '推广',
        link: ''
      },
      {
        name: '营销中心',
        link: ''
      }
    ]
  }
])
</script>

<template>
  <div class="footer-common">
    <div class="inner-footer">
      <ul>
        <li v-for="(item, index) in footerMenu" :key="index">
          <h3>{{ item.title }}</h3>
          <a
            target="_blank"
            :href="itemInner.link"
            v-for="(itemInner, indexInner) in item.menus"
            :key="indexInner"
            >{{ itemInner.name }}</a
          >
        </li>
      </ul>
      <div class="copy-right">@ 2022 AI404.Inc. All rights reserved.</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/layout/global-footer.scss'
</style>
