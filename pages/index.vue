<script setup lang="ts">
import { ref } from 'vue'

const colors = [
  { name: 'black', class: 'bg-bla', text: 'text-bla', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.44.png" },
  { name: 'white', class: 'bg-whi', text: 'text-whi', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.39.png" },
  { name: 'pink', class: 'bg-pin', text: 'text-pin', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.33.png" },
  { name: 'yellow', class: 'bg-yel', text: 'text-yel', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.30.png" },
  { name: 'green', class: 'bg-gre', text: 'text-gre', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.27.png" },
  // { name: 'blue', class: 'bg-blu', text: 'text-blu', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.24.png" },
]

const canhColors = [
  { name: 'black', class: 'bg-bla', text: 'text-bla', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.45.png" },
  { name: 'white', class: 'bg-whi', text: 'text-whi', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.40.png" },
  { name: 'pink', class: 'bg-pin', text: 'text-pin', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.34.png" },
  { name: 'yellow', class: 'bg-yel', text: 'text-yel', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.31.png" },
  { name: 'green', class: 'bg-gre', text: 'text-gre', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.28.png" },
  // { name: 'blue', class: 'bg-blu', text: 'text-blu', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.25.png" },
]

const nhuyColors = [
  { name: 'black', class: 'bg-bla', text: 'text-bla', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.46.png" },
  { name: 'white', class: 'bg-whi', text: 'text-whi', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.41.png" },
  { name: 'pink', class: 'bg-pin', text: 'text-pin', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.35.png" },
  { name: 'yellow', class: 'bg-yel', text: 'text-yel', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.32.png" },
  { name: 'green', class: 'bg-gre', text: 'text-gre', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.29.png" },
  // { name: 'blue', class: 'bg-blu', text: 'text-blu', selectedClass: 'ring-gray-500', image: "/images/PA_Trung thu 2023_Charm Customize.26.png" },
]


const selectedColor = useState('share-this', () => colors[0]);
const isBlack = computed(() => selectedColor.value.name == 'black')
const selectedCanhColor = ref(canhColors[0])
const selectedNhuyColor = ref(nhuyColors[0])
const ten = ref('PHUNGAN')
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

const options = {
  width: 448,
  height: 433
};
const scaleCanvas = (canvas, width, height) => {
  // window.devicePixelRatio = 1;
  // const ratio = Math.ceil(window.devicePixelRatio);
  canvas.width = width;
  canvas.height = height;
  // canvas.style.width = `${width}px`;
  // canvas.style.height = `${height}px`
  // canvas.getContext('2d').scale(ratio, ratio);
}

const drawCanvas = () => {
  const canvas = document.getElementById('myCanvas')
  if (canvas == null || canvas == undefined) {
    return
  }
  scaleCanvas(canvas, options.width, options.height)
  const ctx = canvas.getContext('2d')

  ctx.rotate(-Math.PI / 2)
  ctx.translate(-canvas.height, 0)

  ctx.font = "16px Candara"
  ctx.fillStyle = '#272727'
  if (isBlack.value) {
    ctx.fillStyle = '#ded9cc'
  }
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(ten.value, canvas.width / 2, canvas.height / 2 + 13)
}

const uppercase = () => {
  ten.value = ten.value.toUpperCase()
}

watch([ten, selectedColor], () => {
  drawCanvas()
})

onMounted(() => {
  drawCanvas()
})
</script>
<template>
  <div>
    <v-tabs v-model="tab" color="primary" align-tabs="center" grow>
      <v-tab value="one">
        <span class="" :class="[selectedColor ? selectedColor.text : null]">Dây</span>
        <!-- <v-icon>mdi-phone</v-icon> -->
      </v-tab>
      <v-tab value="two">
        <span class="" :class="[selectedCanhColor ? selectedCanhColor.text : null]">Cánh</span>
        <!-- <v-icon>mdi-heart</v-icon> -->
      </v-tab>
      <v-tab value="three">
        <span class="" :class="[selectedNhuyColor ? selectedNhuyColor.text : null]">Nhụy</span>
        <!-- <v-icon>mdi-account-box</v-icon> -->
      </v-tab>
      <v-tab value="four">
        Khắc Chữ
        <!-- <v-icon>mdi-account-box</v-icon> -->
      </v-tab>
    </v-tabs>
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
            @keyup="uppercase"
            class="font-candara"
            label="Khắc chữ"
            density="compact"
            clearable
          ></v-text-field>
          <!-- <v-file-input v-model="files" :rules="rules" chips accept="image/png, image/jpeg, image/bmp" density="compact"
            label="Khắc logo" placeholder="Chọn logo của bạn" clearable></v-file-input> -->
        </v-sheet>
      </v-window-item>
    </v-window>
    <div class="relative">
      <div class="w-full relative flex bg-white">
        <img :src="selectedColor.image" :alt="selectedColor.image"
          class="h-full w-auto object-cover object-center">
        <img :src="selectedCanhColor.image" :alt="selectedCanhColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <img :src="selectedNhuyColor.image" :alt="selectedNhuyColor.image"
          class="h-full w-auto absolute object-cover object-center">
          <!-- <canvas
            id="myCanvas"
            class="absolute font-candara"></canvas> -->
      </div>
      <div class="absolute top-1/2 left-1/2">
          <div class="-rotate-90 -ml-11 -mt-6">
            <div class="h-6 w-24 flex justify-center">
              <span
                class="uppercase font-candara"
                :class="[isBlack ? 'text-whi' : 'text-bla']">{{ ten }}</span>
              </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col align-center border-t border-b py-6 mx-6">
      <p class="px-4 text-center">Hợp hoá tinh hoa chất liệu văn hoá<br>trong diện mạo hiện đại, dây hoa da là tặng phẩm cao cấp Phùng Ân thiết kế  và sản xuất dành riêng cho mùa trăng 2023.</p>
    </div>
    <div class="my-6 flex justify-center items-center">
      <Capture></Capture>
    </div>
    <div class="relative">
      <div id="capture" class="hidden w-full relative flex bg-white">
        <img :src="selectedColor.image" :alt="selectedColor.image"
          class="h-full w-auto object-cover object-center">
        <img :src="selectedCanhColor.image" :alt="selectedCanhColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <img :src="selectedNhuyColor.image" :alt="selectedNhuyColor.image"
          class="h-full w-auto absolute object-cover object-center">
        <div class="absolute top-1/2 left-1/2">
            <div class="-rotate-90 -mt-6" style="margin-left:-52px">
              <div class="h-6 w-24 flex justify-center">
                <span
                  class="uppercase font-candara"
                  :class="[isBlack ? 'text-whi' : 'text-bla']">{{ ten }}</span>
                </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
.vertical-text {
  writing-mode: vertical-rl;
  text-align: center;
  height: 200px; /* Set the height of the container */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>