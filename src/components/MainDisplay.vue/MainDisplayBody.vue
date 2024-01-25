<template>
  <div class="flex content-end justify-end border-b pb-10">
    <h1 class="mt-auto text-right md:text-7xl text-4xl capitalize">{{ title }}</h1>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const weatherStore = useWeatherStore()
const { getCurrentWeather } = storeToRefs(weatherStore)

const title = computed(() =>
  getCurrentWeather.value ? getCurrentWeather.value[0].description : 'Nice Day'
)
</script>

<style lang="scss" scoped></style>
