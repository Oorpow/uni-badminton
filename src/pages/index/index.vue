<template>
  <view class="home">
    <!-- 头部 -->
    <home-header />
    <view class="home-floor">
      <home-tabs :tab-list="tabList" />
    </view>
  </view>
</template>

<script setup lang="ts">
import HomeHeader from './c-cpns/home-header.vue'
import HomeTabs from './c-cpns/home-tabs.vue'

const tabList = [
  {
    id: 1,
    title: '全部'
  },
  {
    id: 2,
    title: '赛事'
  },
  {
    id: 3,
    title: '装备'
  }
]
</script>

<style lang="scss" scoped></style>
