<template>
  <view class="my">
    <view class="my_head">
      <view class="my_head_top">
        <view class="my_head_top-left">
          <CusAvatar :url="userInfo.avatarUrl" size="large"></CusAvatar>
          <text class="nickname">{{ userInfo.nickName }}</text>
        </view>
        <view class="my_head_top-right">
          <text class="impower">授权头像昵称</text>
          <uni-icons type="forward"></uni-icons>
        </view>
      </view>
      <view class="my_head_bot">
        <CusGrid />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {onLoad} from '@dcloudio/uni-app'
import {storeToRefs} from 'pinia'
import CusAvatar from '@/components/CusAvatar/CusAvatar.vue'
import CusGrid from './c-cpns/CusGrid.vue'
import {useUserStore} from '@/store/user'
import type {IUserInfo} from './types'

const userStore = useUserStore()
const {userInfo} = storeToRefs(userStore)

onLoad(() => {
  uni.showModal({
    title: '完善信息',
    content: '为了更好的识别用户，请完善您的头像、昵称',
    confirmText: '去完善',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        getDefaultAvatarAndInfo()
      }
    }
  })
})

// 获取默认的头像和昵称
const getDefaultAvatarAndInfo = () => {
  uni.getUserProfile({
    desc: '登录授权',
    lang: 'zh_CN',
    success: (res) => {
      userStore.updateUserInfo(res.userInfo as IUserInfo)
    }
  })
}
</script>

<style lang="scss" scoped>
.my {
  &_head {
    border-bottom: 2rpx solid $uni-text-color-grey;

    &_top {
      width: 95vw;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-left {
        display: flex;
        align-items: center;

        .nickname {
          margin-left: 20rpx;
          font-size: 36rpx;
        }
      }

      &-right {
        .impower {
          color: $uni-text-color-grey;
        }
      }
    }
    &_bot {
      width: 95vw;
      margin: auto;
    }
  }
}
</style>
