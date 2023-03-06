<template>
  <view class="header">
    <view class="header-select">
      <text class="locate">广州</text>
      <uni-icons type="location" size="25"></uni-icons>
    </view>
    <view class="header-search">
		<uni-search-bar :radius="100" placeholder="请输入搜索内容" v-model="searchVal" @confirm="handleConfirmSearch"></uni-search-bar>
    </view>
    <view class="header-message">
      <uni-icons type="notification" size="25"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let searchVal = ref('')

const handleConfirmSearch = () => {
	console.log(searchVal.value)
}
</script>

<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared'
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  &-select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150rpx;
  }
  &-search {
    flex: 1;
  }
  &-message {
    display: flex;
    width: 80rpx;
    justify-content: center;
  }
}
:deep(.is-input-border) {
  border-radius: 30rpx;
}
</style>
