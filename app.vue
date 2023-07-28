<script setup lang="ts">
const count = ref(1)
const double = computed(() => count.value * 2)
</script>
<template>
  <Html lang="en">
    <v-card class="px-2 mx-auto max-w-md">
      <NuxtPage />
    </v-card>
  </Html>
</template>