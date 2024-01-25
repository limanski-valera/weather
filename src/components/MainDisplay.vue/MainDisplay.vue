<template>
  <div class="flex flex-col md:p-10 md:pb-7">
    <MainDisplayHeader />
    <MainDisplayBody class="grow" />
    <MainDisplayFooter />
  </div>
</template>

<script setup>
import MainDisplayHeader from './MainDisplayHeader.vue'
import MainDisplayBody from './MainDisplayBody.vue'
import MainDisplayFooter from './MainDisplayFooter.vue'
</script>

<style lang="scss" scoped></style>
