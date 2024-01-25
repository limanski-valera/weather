<template>
  <div class="pt-5 gap-2 overflow-x-auto grid grid-cols-5 xl:flex">
    <MainDisplayFooterItem
      class="grow"
      v-for="item in getTenItemsInCurrentForecast"
      :key="item.dt_txt"
      :data="item"
    />
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'
import MainDisplayFooterItem from './MainDisplayFooterItem.vue'

const weatherStore = useWeatherStore()
const { getTenItemsInCurrentForecast } = storeToRefs(weatherStore)
</script>

<style lang="scss" scoped></style>
