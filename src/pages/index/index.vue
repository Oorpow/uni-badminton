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
import {reactive} from 'vue'
import HomeHeader from './c-cpns/home-header.vue'
import HomeTabs from './c-cpns/home-tabs.vue'

import TabbarConfig from '@/config/tabbar'
import type {ITabItem} from './c-cpns/types'

// #ifdef MP-JD || MP-WEIXIN
uni.hideHomeButton()
// #endif

const tabList: ITabItem[] = [
  {
    name: '全部',
    value: 0
  },
  {
    name: '赛事',
    value: 1
  },
  {
    name: '动态',
    value: 2
  }
]

const tabbar = reactive(TabbarConfig)
</script>

<style lang="scss" scoped>
.custom_style {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  &_icon {
    background-color: #15357a;
    font-size: 80rpx;
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -40rpx;
  }
}
</style>
