<template>
  <aside class="backdrop-blur p-5 md:pl-5 pl-0 md:border-l-2:ml-auto">
    <CitySelector />
    <CurrentWeather class="mb-5 mt-5" />
    <Forecast />
  </aside>
</template>

<script setup>
import CitySelector from '@/components/Sidebar/CitySelector.vue'
import CurrentWeather from '@/components/Sidebar/CurrentWeather.vue'
import Forecast from '@/components/Sidebar/Forecast.vue'
</script>

<style lang="scss" scoped></style>
