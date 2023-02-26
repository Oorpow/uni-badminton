<template>
  <!-- #ifdef H5 -->
  <van-tabs v-model:active="currentTab">
    <van-tab v-for="tab in tabList" :key="tab.id" :title="tab.title">
      <view class="floor-container">
        <floor-item />
      </view>
    </van-tab>
  </van-tabs>
  <!-- #endif -->

  <!-- #ifdef MP-WEIXIN -->
  <view class=""></view>
  <!-- #endif -->
</template>

<script setup lang="ts">
import {ref} from 'vue'
import FloorItem from './floor-item.vue'
import type {ITabItem} from './types'

type Props = {
  tabList: ITabItem[]
}

defineProps<Props>()

const currentTab = ref()
</script>

<style lang="scss" scoped>
.floor-container {
  margin-top: 40rpx;
}
</style>
