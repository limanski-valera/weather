<template>
  <div class="flex flex-col items-center gap-y-2.5 pb-5 border-b-2">
    <div class="text-7xl font-medium">{{ currentTemp }}°С</div>
    <div class="">{{ currentWindDirection }}, {{ currentWindSpeed }} km/h</div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { formattedTemp, formattedWindSpeed, textWindDirection } from '@/helpers/helpers.js'

const weatherStore = useWeatherStore()
const { getCurrentWeather, getCurrentWeatherMainData, getCurrentWind } = storeToRefs(weatherStore)

const currentTemp = computed(() => formattedTemp(getCurrentWeatherMainData?.value?.temp))
const currentWindSpeed = computed(() => formattedWindSpeed(getCurrentWind?.value?.speed))
const currentWindDirection = computed(() => textWindDirection(getCurrentWind?.value?.deg))
</script>

<style lang="scss" scoped></style>
