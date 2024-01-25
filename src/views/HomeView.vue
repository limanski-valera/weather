<template>
  <main
    class="md:flex-row flex flex-col h-screen main-block text-white bg-black/70 max-w-full overflow-hidden p-5 md:p-0"
    ref="mainPage"
  >
    <img :src="bgGif" alt="" class="main-block__bg mix-blend-multiply" />
    <div class="relative w-full mb-3" v-if="isMobile">
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline"> Menu </Button>
        </SheetTrigger>
        <SheetContent class="overflow-y-auto">
          <SheetTitle>Select City</SheetTitle>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
    <MainDisplay class="grow relative" />
    <Sidebar class="basis-80 shrink-0 overflow-y-auto" v-if="!isMobile" />
  </main>
</template>

<script setup>
import MainDisplay from '@/components/MainDisplay.vue/MainDisplay.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import { weatherGif } from '@/helpers/helpers'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const mainPage = ref(null)

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = mainPage.value.clientWidth < 768 ? true : false
}

const weatherStore = useWeatherStore()
const { getCurrentWeather } = storeToRefs(weatherStore)
const bgGif = computed(() => {
  if (getCurrentWeather.value) {
    const url = weatherGif.find((item) =>
      item.ids.find((id) => id === getCurrentWeather.value[0].id)
    ).url

    if (url) {
      return url
    } else return 'https://i.gifer.com/2swA.gif'
  } else return 'https://i.gifer.com/2swA.gif'
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<style lang="scss" scoped>
.main-block {
  position: relative;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
