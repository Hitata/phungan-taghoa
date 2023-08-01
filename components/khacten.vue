<script setup lang="ts">
const ten = ref('phungan')
const files = ref(undefined)

</script>
<template>
  <v-sheet class="ma-2 pa-3">
    <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
    <div class="mt-2.5">
      <input v-model="ten" type="text" name="first-name" id="first-name" autocomplete="given-name"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    </div>
    <v-file-input
      v-model="files"
      density="compact"
      label="Khắc hình"
      variant="outlined"
      placeholder="Chọn logo của bạn"
    ></v-file-input>
  </v-sheet>
</template>