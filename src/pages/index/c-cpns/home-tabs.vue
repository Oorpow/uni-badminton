<template>
  <view class="floor-container">
    <zb-tab
      :activeStyle="{
        bottom: 0
      }"
      :data="tabList"
      v-model="currentTab"
      lineWidth="30"
      :lineColor="themeConfig.primaryColor"
    ></zb-tab>
    <view>
      <floor-item></floor-item>
    </view>
  </view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import FloorItem from './floor-item.vue'
import theme from '../../../common/theme/theme.module.scss'
import type {ITabItem} from './types'

type Props = {
  tabList: ITabItem[]
}

defineProps<Props>()

const currentTab = ref(0)
const themeConfig = ref(theme)
</script>

<style lang="scss" scoped>
@import url('@/uni_modules/lgd-tab/components/lgd-tab/lgd-tab.css');
.floor-container {
  margin-top: 40rpx;
}
</style>
