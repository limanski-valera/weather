<template>
  <div class="flex gap-x-3">
    <span class="w-12 h-12 flex flex-col justify-center items-center rounded bg-white/40">
      <img :src="iconUrl" alt="" />
    </span>
    <div class="grow flex flex-col">
      <span class="font-medium">{{ time }}:00</span>
      <span class="opacity-50 font-light capitalize">{{ weatherDescription }}</span>
    </div>
    <div class="flex flex-col border-l w-12 items-center">
      <span>{{ tempMin }}°</span>
      <span>{{ tempMax }}°</span>
    </div>
  </div>
</template>

<script setup>
import { formattedTemp, getHourFromTimeString } from '@/helpers/helpers'
import { computed } from 'vue'

const props = defineProps({
  forecast: {
    type: Object,
    required: true
  }
})

const iconUrl = computed(() => {
  const currentIcon = props.forecast?.weather[0]?.icon
  return `https://openweathermap.org/img/wn/${currentIcon}@2x.png`
})

const weatherDescription = computed(() => props.forecast?.weather[0]?.description)

const time = computed(() => getHourFromTimeString(props.forecast?.dt_txt))

const tempMin = formattedTemp(props.forecast?.main?.temp_min)
const tempMax = formattedTemp(props.forecast?.main?.temp_max)
</script>

<style lang="scss" scoped></style>
