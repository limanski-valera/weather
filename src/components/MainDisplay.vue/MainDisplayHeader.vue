<template>
  <div class="flex gap-x-2 justify-end font-medium">
    <div>{{ currentDate }}</div>
    <span>|</span>
    <div>{{ time }}</div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'

const currentTime = ref(Date.now())

const currentDate = computed(() =>
  new Date(currentTime.value).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
)

const time = computed(() =>
  new Date(currentTime.value).toLocaleTimeString('en-us', {
    hour: '2-digit',
    minute: '2-digit'
  })
)

onBeforeMount(() => {
  setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)
})
</script>

<style lang="scss" scoped></style>
