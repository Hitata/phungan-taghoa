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
const ten = ref('phungan')

</script>
<template>
    <UContainer class="w-96">
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
            </Logo
        </div> -->
        <div class="mt-5">
            <div>
              <h3 class="text-sm font-medium text-gray-900">Chữ hoặc Logo</h3>
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div class="mt-2.5">
                    <input v-model="ten" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div class="flex justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 
            </div>
        </div>
        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div class="flex justify-center aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img :src="selectedColor.image" alt="Model wearing plain white basic tee."
                    class="h-full w-full object-cover object-center">
                <img :src="selectedCanhColor.image" alt="Model wearing plain white basic tee."
                    class="absolute h-full w-full object-cover object-center">
                <div class="justify-self-center relative -rotate-90">
                    <div class="absolute left-0">{{ ten }}</div>
                </div>
            </div>
        </div>
    </UContainer>
</template>