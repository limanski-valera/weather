<script setup>
import { computed, ref } from 'vue'
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useCitiesStore } from '../../stores/cities'
import { storeToRefs } from 'pinia'

const citiesStore = useCitiesStore()
const { getCitiesList, getCurrentCity } = storeToRefs(citiesStore)
const value = computed({
  get() {
    return getCurrentCity.value.name
  },
  set(val) {
    citiesStore.changeCurrentCity(val)
  }
})

const open = ref(false)

// const filterFunction = (list: typeof frameworks, search: string) => list.filter(i => i.value.toLowerCase().includes(search.toLowerCase()))
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full justify-between"
      >
        {{
          value ? getCitiesList.find((city) => city.name === value)?.name : 'Select city...'
        }}
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-full p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Search city..." />
        <CommandEmpty>No city found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="city in getCitiesList"
              :key="city.name"
              :value="city.name"
              @select="
                (ev) => {
                  if (typeof ev.detail.value === 'string') {
                    value = ev.detail.value
                  }
                  open = false
                }
              "
            >
              {{ city.name }}
              <CheckIcon
                :class="cn('ml-auto h-4 w-4', value === city.name ? 'opacity-100' : 'opacity-0')"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
