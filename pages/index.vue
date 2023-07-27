<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const colors = [
    { name: 'red', class: 'bg-red-600', selectedClass: 'ring-gray-500', image: "/images/dayhoa-red.png" },
    { name: 'pink', class: 'bg-pink-300', selectedClass: 'ring-gray-500', image: "/images/dayhoa-pink.png" },
    { name: 'yellow', class: 'bg-yellow-300', selectedClass: 'ring-gray-500', image: "/images/dayhoa-yellow.png" },
    { name: 'green', class: 'bg-green-400', selectedClass: 'ring-gray-500', image: "/images/dayhoa-green.png" },
    { name: 'blue', class: 'bg-blue-800', selectedClass: 'ring-gray-500', image: "/images/dayhoa-blue.png" },
]

const canhColors = [
    { name: 'red', class: 'bg-red-600', selectedClass: 'ring-gray-500', image: "/images/canhhoa-red.png" },
    { name: 'pink', class: 'bg-pink-300', selectedClass: 'ring-gray-500', image: "/images/canhhoa-pink.png" },
    { name: 'yellow', class: 'bg-yellow-300', selectedClass: 'ring-gray-500', image: "/images/canhhoa-yellow.png" },
    { name: 'green', class: 'bg-green-400', selectedClass: 'ring-gray-500', image: "/images/canhhoa-green.png" },
    { name: 'blue', class: 'bg-blue-800', selectedClass: 'ring-gray-500', image: "/images/canhhoa-blue.png" },
]

const selectedColor = ref(colors[0])
const selectedCanhColor = ref(canhColors[0])

</script>
<template>
    <UContainer>
        <div class="mt-5">
            <div>
              <h3 class="text-sm font-medium text-gray-900">Màu Dây Hoa</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption as="template" v-for="color in colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                    <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                      <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                      <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
        </div>
        <div class="mt-5">
            <div>
              <h3 class="text-sm font-medium text-gray-900">Màu Cánh Hoa</h3>

              <RadioGroup v-model="selectedCanhColor" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption as="template" v-for="color in canhColors" :key="color.name" :value="color" v-slot="{ active, checked }">
                    <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                      <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                      <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
        </div>
        <!-- <div class="mt-5">
            <div>
              <h3 class="text-sm font-medium text-gray-900">Màu Nhụy Hoa</h3>
              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption as="template" v-for="color in colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                    <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                      <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                      <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
        </div> -->

        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img :src="selectedColor.image" alt="Model wearing plain white basic tee."
                    class="h-full w-full object-cover object-center">
                <img :src="selectedCanhColor.image" alt="Model wearing plain white basic tee."
                    class="absolute h-full w-full object-cover object-center">
            </div>
        </div>
    </UContainer>
</template>