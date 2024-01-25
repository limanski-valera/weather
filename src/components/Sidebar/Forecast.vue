<template>
  <div class="">
    <h3 class="text-center font-medium text-lg mb-5">The next days forecast</h3>
    <div class="flex justify-center gap-x-2 mb-5">
      <Button
        class="p-2.5 h-8"
        v-for="button in tabsButtons"
        :key="button.id"
        :variant="button.id === currentTab ? 'secondary' : 'ghost'"
        @click="changeCurrentTab(button.id)"
        >{{ button.title }}</Button
      >
    </div>
    <div class="flex flex-col gap-2.5">
      <DayForecast
        v-for="dayForecast in activeForecast"
        :key="dayForecast.dt"
        :forecast="dayForecast"
      />
    </div>
  </div>
</template>

<script setup>
import DayForecast from './DayForecast.vue'
import { Button } from '../ui/button'
import { computed, ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const tabsButtons = [
  { id: 1, title: 'Tomorrow' },
  { id: 2, title: 'After tomorrow' }
]

const currentTab = ref(1)

const changeCurrentTab = (id) => (currentTab.value = id)

const weatherStore = useWeatherStore()
const { getForecastForTomorrow, getForecastForAfterTomorrow } = storeToRefs(weatherStore)

const activeForecast = computed(() => {
  if (currentTab.value === 1) {
    return getForecastForTomorrow.value
  } else if (currentTab.value === 2) {
    return getForecastForAfterTomorrow.value
  } else return []
})
</script>

<style lang="scss" scoped></style>
