<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useWeatherStore } from '@/stores/weather.js'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useCitiesStore } from './stores/cities'

const weatherStore = useWeatherStore()

const citiesStore = useCitiesStore()

onBeforeMount(() => {
  citiesStore.loadedCitiesList()
  weatherStore.loadedCurrentCityWeather()
  weatherStore.loadForecastForTwoDays()
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
