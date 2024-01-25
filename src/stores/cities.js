import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { CITIES_LIST } from '@/constants/constants'
import { useWeatherStore } from './weather'

export const useCitiesStore = defineStore('cities', () => {
  const citiesList = ref(null)
  const currentCity = ref(null)

  const getCitiesList = computed(() => citiesList.value)
  const getCurrentCity = computed(() =>
    currentCity?.value ? currentCity?.value : { name: 'Kyiv', country: 'Ukraine', id: 1 }
  )

  function loadedCitiesList() {
    citiesList.value = CITIES_LIST
    currentCity.value = CITIES_LIST[0]
  }

  function changeCurrentCity(name) {
    const newCity = citiesList.value.find((city) => city.name == name)
    if (newCity) {
      currentCity.value = newCity
    }
  }

  const weatherStore = useWeatherStore()

  watch(
    () => currentCity,
    () => {
      weatherStore.loadedCurrentCityWeather()
      weatherStore.loadForecastForTwoDays()
    },
    { deep: true }
  )

  return { getCitiesList, getCurrentCity, loadedCitiesList, changeCurrentCity }
})
