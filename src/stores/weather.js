import { WEATHER_API_KEY, WEATHER_BASE_URL } from '@/constants/constants'
import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useCitiesStore } from './cities'
import { divisionOfDays } from '@/helpers/helpers'

export const useWeatherStore = defineStore('weather', () => {
  const currentWeatherData = ref(null)
  const dailyForecast = ref(null)
  const currentForecast = ref(null)

  const getCurrentWeather = computed(() => currentWeatherData?.value?.weather)
  const getCurrentWeatherMainData = computed(() => currentWeatherData?.value?.main)
  const getCurrentWind = computed(() => currentWeatherData?.value?.wind)

  const getForecastForTomorrow = computed(() =>
    dailyForecast?.value?.length ? dailyForecast?.value[0] : []
  )
  const getForecastForAfterTomorrow = computed(() =>
    dailyForecast?.value?.length ? dailyForecast?.value[1] : []
  )

  const getTenItemsInCurrentForecast = computed(() =>
    currentForecast.value?.filter((item, index) => index < 10)
  )

  const citiesStore = useCitiesStore()
  const { getCurrentCity } = storeToRefs(citiesStore)

  const loadedCurrentCityWeather = async () => {
    const currentCityName = getCurrentCity?.value?.name

    const data = await loadData('/weather', { q: currentCityName })

    if (data) {
      currentWeatherData.value = data
    }
  }

  const loadForecastForTwoDays = async () => {
    const params = { lat: '44.34', lon: '10.99', cnt: 24 }

    const currentCityName = getCurrentCity?.value?.name
    const cityData = await loadData(
      '/direct',
      { q: currentCityName },
      'http://api.openweathermap.org/geo/1.0'
    )

    if (cityData) {
      params.lat = cityData[0]?.lat
      params.lon = cityData[0]?.lon
    }

    const data = await loadData('/forecast', params)

    if (data) {
      const currentDay = new Date().getDate()
      let result
      if (currentDay < 27) {
        result = data.list.filter((item) => {
          let itemDay = new Date(item.dt_txt).getDate()
          return itemDay > currentDay && itemDay < currentDay + 3
        })
      } else {
        result = data.list.filter((item) => {
          let itemDay = new Date(item.dt_txt).getDate()
          return (itemDay > currentDay && itemDay < currentDay + 3) || itemDay < 3
        })
      }
      dailyForecast.value = divisionOfDays(result)
      currentForecast.value = data.list
    }
  }

  const loadData = async (url, params, baseUrl) => {
    try {
      const res = await axios({
        method: 'get',
        baseURL: baseUrl ? baseUrl : WEATHER_BASE_URL,
        url: url,
        params: {
          appid: WEATHER_API_KEY,
          lang: 'en',
          units: 'metric',
          ...params
        }
      })
      if (res.status === 200) {
        return res.data
      } else {
        console.log(res.statusText)
        return null
      }
    } catch (err) {
      console.log(err)
      return null
    }
  }

  return {
    loadedCurrentCityWeather,
    loadForecastForTwoDays,
    getCurrentWeather,
    getCurrentWeatherMainData,
    getCurrentWind,
    loadForecastForTwoDays,
    getForecastForTomorrow,
    getForecastForAfterTomorrow,
    getTenItemsInCurrentForecast
  }
})
