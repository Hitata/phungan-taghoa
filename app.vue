<script setup lang="ts">
const count = ref(1)
const double = computed(() => count.value * 2)
</script>
<template>
  <Html lang="en">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>