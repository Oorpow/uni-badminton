<template>
  <view>
	  <uni-indexed-list :options="contactList.list" :showSelect="false" @click="handleClickOption"></uni-indexed-list>
  </view>
</template>

<script setup lang="ts">
import contactList from '@/common/contact'

const handleClickOption = (e: any) => {
	console.log(e)
}
</script>

<style lang="scss" scoped></style>
