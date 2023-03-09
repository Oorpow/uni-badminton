<template>
  <view class="my">
    <view class="my_head">
      <view class="my_head_top">
        <view class="my_head_top-left">
          <CusAvatar :url="userInfo.avatar" size="large"></CusAvatar>
          <text class="nickname">{{ userInfo.name }}</text>
        </view>
        <view class="" @click="navToAuthPage">
          <text>修改头像和昵称</text>
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
import {userWxLogin} from '@/request/api/login'

const userStore = useUserStore()
const {userInfo, getOpenId} = storeToRefs(userStore)

const navToAuthPage = () => {
  uni.navigateTo({
    url: '/pages/auth/auth'
  })
}

onLoad(() => {
  // 未登录的情况下
  if (getOpenId.value === '') {
    // userLogin()
    completeInfo()
  }
})

// 用户登录获取openid
const userLogin = () => {
  uni.login({
    success: async (res) => {
      const info: any = await userWxLogin(res.code)
      userStore.setOpenId(info.data.openid)
    }
  })
}

// 完善信息
const completeInfo = () => {
  uni.showModal({
    title: '完善信息',
    content: '为了更好的识别用户，请完善您的头像、昵称',
    confirmText: '去完善',
    success: function (res) {
      if (res.confirm) {
        // 弹出提示，获取用户头像、昵称
      } else if (res.cancel) {
        getAvatarAndInfo()
      }
    }
  })
}

// 如果用户未授权，则获取默认的头像和昵称
const getAvatarAndInfo = async () => {
  uni.getUserProfile({
    desc: '登录授权',
    lang: 'zh_CN',
    success: (res) => {
      userStore.updateUserInfo({
        avatar: res.userInfo.avatarUrl,
        name: res.userInfo.nickName
      })
    },
    fail: (err) => {
      console.log(err)
    },
    complete: () => {
      uni.hideLoading()
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
