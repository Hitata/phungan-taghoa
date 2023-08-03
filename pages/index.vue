<script setup lang="ts">
import { ref } from 'vue'

const colors = [
  { name: 'black', class: 'bg-bla', text: 'text-bla', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.44.png" },
  { name: 'white', class: 'bg-whi', text: 'text-whi', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.39.png" },
  { name: 'pink', class: 'bg-pin', text: 'text-pin', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.33.png" },
  { name: 'yellow', class: 'bg-yel', text: 'text-yel', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.30.png" },
  { name: 'green', class: 'bg-gre', text: 'text-gre', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.27.png" },
  { name: 'blue', class: 'bg-blu', text: 'text-blu', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.24.png" },
]

const canhColors = [
  { name: 'black', class: 'bg-bla', text: 'text-bla', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.45.png" },
  { name: 'white', class: 'bg-whi', text: 'text-whi', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.40.png" },
  { name: 'pink', class: 'bg-pin', text: 'text-pin', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.34.png" },
  { name: 'yellow', class: 'bg-yel', text: 'text-yel', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.31.png" },
  { name: 'green', class: 'bg-gre', text: 'text-gre', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.28.png" },
  { name: 'blue', class: 'bg-blu', text: 'text-blu', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.25.png" },
]

const nhuyColors = [
  { name: 'black', class: 'bg-bla', text: 'text-bla', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.46.png" },
  { name: 'white', class: 'bg-whi', text: 'text-whi', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.41.png" },
  { name: 'pink', class: 'bg-pin', text: 'text-pin', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.35.png" },
  { name: 'yellow', class: 'bg-yel', text: 'text-yel', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.32.png" },
  { name: 'green', class: 'bg-gre', text: 'text-gre', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.29.png" },
  { name: 'blue', class: 'bg-blu', text: 'text-blu', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.26.png" },
]


const selectedColor = useState('share-this', () => colors[0]);
const isBlack = computed(() => selectedColor.value.name == 'black')
const selectedCanhColor = ref(canhColors[0])
const selectedNhuyColor = ref(nhuyColors[0])
const ten = ref('phungan')
const tab = ref(null)
const files = ref(undefined)

const rules = ref([
  (value: any) => !value || !value.length || value[0].size < 2000000 || 'Kích thước logo phải nhỏ hơn 2 MB!',
])
const url: any = computed(() => {
  if (!files.value) return
  if (!files.value[0]) return
  return URL.createObjectURL(files.value[0])
})
</script>
<template>
  <v-card>
    <v-toolbar color="transparent" class="px-0">
      <v-toolbar-title>
        <img src="/images/phungan-logo.png" alt="PHÙNG ÂN logotype" width="125px" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-tabs v-model="tab" color="primary" align-tabs="center" grow>
          <v-tab value="one">
            <span class="font-semibold" :class="[selectedColor ? selectedColor.text : null]">Dây</span>
            <!-- <v-icon>mdi-phone</v-icon> -->
          </v-tab>
          <v-tab value="two">
            <span class="font-semibold" :class="[selectedCanhColor ? selectedCanhColor.text : null]">Cánh</span>
            <!-- <v-icon>mdi-heart</v-icon> -->
          </v-tab>
          <v-tab value="three">
            <span class="font-semibold" :class="[selectedNhuyColor ? selectedNhuyColor.text : null]">Nhụy</span>
            <!-- <v-icon>mdi-account-box</v-icon> -->
          </v-tab>
          <v-tab value="four">
            Khắc Chữ
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
        <v-sheet class="ma-2 pa-3">
          <v-text-field
            v-model="ten"
            label="Khắc chữ"
            density="compact"
            clearable
          ></v-text-field>
          <!-- <v-file-input v-model="files" :rules="rules" chips accept="image/png, image/jpeg, image/bmp" density="compact"
            label="Khắc logo" placeholder="Chọn logo của bạn" clearable></v-file-input> -->
        </v-sheet>
      </v-window-item>
    </v-window>
    <div id="capture" class="w-full mx-auto bg-slate">
      <div class="relative flex justify-center">
        <img :src="selectedColor.image" :alt="selectedColor.image" class="h-full w-auto object-cover object-center">
        <img :src="selectedCanhColor.image" :alt="selectedCanhColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <img :src="selectedNhuyColor.image" :alt="selectedNhuyColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <div class="justify-self-center relative -rotate-90">
         <div class="absolute -left-9 -top-3.5">
            <div class="h-6 w-24 flex justify-center">
              <span
                class="uppercase"
                :class="[isBlack ? 'text-whi' : 'text-bla']">{{ ten }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col align-center border-t border-b py-6 mx-6">
      <p>Mang vẻ hiện đại hợp hoá tinh hoa</p>
      <p>đa dạng chất liệu văn hoá Việt,</p>
      <p>Tag hoa thủ công là tặng phẩm do Phùng Ân thiết kế,</p>
      <p>sản xuất bởi nghệ nhân Việt.</p>
    </div>
    <div class="my-6 flex justify-center items-center">
      <Capture></Capture>
    </div>
  </v-card>
</template>