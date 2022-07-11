<script setup lang="ts">
import { reactive } from 'vue'

const footerMenu = reactive([
  {
    title: 'AI404',
    menus: [
      {
        name: 'careers',
        link: ''
      },
      {
        name: 'news',
        link: ''
      },
      {
        name: 'topic',
        link: ''
      },
      {
        name: 'diversity',
        link: ''
      },
      {
        name: 'accessibility',
        link: ''
      }
    ]
  },
  {
    title: 'discovery',
    menus: [
      {
        name: 'trustAndSafe',
        link: ''
      },
      {
        name: 'invite',
        link: ''
      },
      {
        name: 'evection',
        link: ''
      },
      {
        name: 'magzine',
        link: ''
      },
      {
        name: 'airbnborg',
        link: ''
      }
    ]
  },
  {
    title: 'rent',
    menus: [
      {
        name: 'whyRent',
        link: ''
      },
      {
        name: 'hospitality',
        link: ''
      },
      {
        name: 'responsibleHosting',
        link: ''
      },
      {
        name: 'experiences',
        link: ''
      },
      {
        name: 'resources',
        link: ''
      }
    ]
  },
  {
    title: 'service',
    menus: [
      {
        name: 'help',
        link: ''
      },
      {
        name: 'neighbors',
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
