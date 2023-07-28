<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'


const colors = [
  { name: 'white', class: 'bg-white-600', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.5.png" },
  { name: 'pink', class: 'bg-pink-300', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.5.png" },
  { name: 'yellow', class: 'bg-yellow-300', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.25.png" },
  { name: 'green', class: 'bg-green-400', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.18.png" },
  { name: 'blue', class: 'bg-blue-800', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.22.png" },
]

const canhColors = [
  { name: 'white', class: 'bg-white-600', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.23.png" },
  { name: 'pink', class: 'bg-pink-300', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.23.png" },
  { name: 'yellow', class: 'bg-yellow-300', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.27.png" },
  { name: 'green', class: 'bg-green-400', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.20.png" },
  { name: 'blue', class: 'bg-blue-800', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.23.png" },
]

const nhuyColors = [
  { name: 'white', class: 'bg-white-600', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.24.png" },
  { name: 'pink', class: 'bg-pink-300', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.24.png" },
  { name: 'yellow', class: 'bg-yellow-300', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.28.png" },
  { name: 'green', class: 'bg-green-400', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.21.png" },
  { name: 'blue', class: 'bg-blue-800', selectedClass: 'ring-gray-500', image: "/images/REGENT_Trung thu 2023_Charm.24.png" },
]


const selectedColor = ref(colors[0])
const selectedCanhColor = ref(canhColors[0])
const selectedNhuyColor = ref(nhuyColors[0])
const ten = ref('phungan')
const tab = ref(null)

</script>
<template>
  <v-card>
    <v-toolbar color="transparent" class="px-0">
      <v-toolbar-title>Phung An</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-tabs v-model="tab" color="primary" align-tabs="center" grow>
          <v-tab value="one">
            Dây Hoa
            <!-- <v-icon>mdi-phone</v-icon> -->
          </v-tab>
          <v-tab value="two">
            Cánh Hoa
            <!-- <v-icon>mdi-heart</v-icon> -->
          </v-tab>
          <v-tab value="three">
            Nhụy Hoa
            <!-- <v-icon>mdi-account-box</v-icon> -->
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-window v-model="tab">
      <v-window-item value="one">
        <items v-model="selectedColor" :colors="colors" />
      </v-window-item>
      <v-window-item value="two">
        <items v-model="selectedCanhColor" :colors="canhColors" />
      </v-window-item>
      <v-window-item value="three">
        <items v-model="selectedNhuyColor" :colors="nhuyColors" />
      </v-window-item>
      <v-window-item value="four">
        <div class="flex justify-center w-full">
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input v-model="ten" type="text" name="first-name" id="first-name" autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <label for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span>
                or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </v-window-item>
    </v-window>
    <div class="w-full mx-auto mt-6 max-w-2xl sm:px-6">
      <div class="flex justify-center aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img :src="selectedColor.image" :alt="selectedColor.image"
          class="h-full w-auto object-cover object-center"
        >
        <img :src="selectedCanhColor.image" :alt="selectedCanhColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <img :src="selectedNhuyColor.image" :alt="selectedNhuyColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <div class="justify-self-center relative -rotate-90">
          <div class="absolute left-0">{{ ten }}</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col align-center border-t">
      <p>Mang vẻ hiện đại hợp hoá tinh hoa</p>
      <p>Đa dạng chất liệu văn hoá Việt,</p>
      <p>Tag hoa thủ công là tặng phẩm do Phùng Ân thiết kế,</p>
      <p>sản xuất bởi nghệ nhân Việt.</p>
    </div>
  </v-card>
</template>