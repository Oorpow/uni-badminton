<template>
  <view class="floor-item">
    <view class="floor-item-left">
      <cus-avatar
        url="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        size="small"
      >
        <template #username>
          <text class="avatar-username">Oorpow</text>
        </template>
      </cus-avatar>
      <view class="floor-text">
        <text class="floor-text-content"
          >固定周一晚上8-10点，地址xxxxxxxxxxxxxxxxxxx固定周一晚上8-10点，地址xxxxxxxxxxxxxxxxxxx</text
        >
      </view>
    </view>
    <view class="floor-item-right">
      <image
        style="width: 150rpx; height: 150rpx"
        class="floor-img"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        mode="aspectFill"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import CusAvatar from '@/components/CusAvatar/CusAvatar.vue'
</script>

<style lang="scss" scoped>
.floor-item {
  display: flex;
  padding: 0 20rpx;
  margin-top: 50rpx;
  &-left {
    .avatar-username {
      margin-left: 10rpx;
    }
    .floor-text {
      margin-top: 10rpx;
      &-content {
        width: 90%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
  &-right {
    .floor-img {
      border-radius: 10rpx;
    }
  }
}
</style>
