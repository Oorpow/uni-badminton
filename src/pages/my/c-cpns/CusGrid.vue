<template>
  <view class="cus_grid">
    <uni-grid :column="4" :showBorder="false">
      <uni-grid-item v-for="item in gridList" :key="item.id">
        <view class="cus_grid-item">
          <text class="num">{{ item.num }}</text>
          <text class="title">{{ item.title }}</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script setup lang="ts">
const gridList = [
  {
    id: 0,
    num: 0,
    title: '好友'
  },
  {
    id: 1,
    num: 0,
    title: '帖子'
  },
  {
    id: 2,
    num: 0,
    title: '好友'
  },
  {
    id: 3,
    num: 0,
    title: '帖子'
  }
]
</script>

<style lang="scss" scoped>
.cus_grid {
  &-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .num {
      display: block;
    }
  }
}
</style>
