<template>
  <view class="header">
    <view class="header-select">
      <text class="locate">广州</text>
      <uni-icons type="location-filled" size="25"></uni-icons>
    </view>
    <view class="header-search">
      <uni-easyinput
        prefixIcon="search"
        placeholder="输入搜索内容"
        :styles="inputStyle"
      ></uni-easyinput>
    </view>
    <view class="header-message">
      <uni-icons type="notification-filled" size="25"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
const inputStyle = {
  backgroundColor: '#f5f5f5',
  borderColor: '#f5f5f5'
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
    .locate {
      // font-size: 24rpx;
    }
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
