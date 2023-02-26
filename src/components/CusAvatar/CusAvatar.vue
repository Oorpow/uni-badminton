<template>
  <view class="avatar-container">
    <image
      :style="{width: pixelSize + 'rpx', height: pixelSize + 'rpx'}"
      class="avatar-main"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      mode="aspectFill"
    />
    <slot name="username"></slot>
  </view>
</template>

<script setup lang="ts">
import {computed} from 'vue'
type SIZE = 'large' | 'medium' | 'small'

type Props = {
  url: string
  size: SIZE
}

const props = withDefaults(defineProps<Props>(), {
  url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  size: 'medium'
})

const pixelSize = computed(() => {
  let pixel = 0
  if (props.size === 'medium') {
    pixel = 80
  } else if (props.size === 'small') {
    pixel = 60
  } else {
    pixel = 100
  }
  return pixel
})
</script>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  align-items: center;
  .avatar-main {
    border-radius: 50%;
  }
}
</style>
