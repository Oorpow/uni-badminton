<template>
  <m-tabbar :tabbar="tabbar" native>
    <template v-slot:tabbar_index_1>
      <view class="custom_style">
        <view class="custom_style_icon">+</view>
      </view>
    </template>
  </m-tabbar>
</template>
<script setup lang="ts">
import {reactive} from 'vue'
import TabbarConfig from './config/tabbar'
const tabbar = reactive(TabbarConfig)
</script>
<style></style>
