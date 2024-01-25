<template>
  <div class="flex flex-col items-center text-center p-2 rounded backdrop-blur-xl">
    <span class="mb-2 border-b pb-1"> {{ hour }}:00</span>
    <div class="icon rounded relative mb-1 bg-white/40">
      <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="" />
    </div>
    <span class="text-lg font-medium">{{ temp }}°C</span>
  </div>
</template>

<script setup>
import { formattedTemp, getHourFromTimeString } from '@/helpers/helpers'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const hour = computed(() => getHourFromTimeString(props.data.dt_txt))
const icon = computed(() => props.data.weather[0]?.icon)
const temp = computed(() => formattedTemp(props.data.main.temp))
</script>

<style lang="scss" scoped>
.icon {
  width: 50px;
  height: 50px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
