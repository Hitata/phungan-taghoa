<script setup>
import html2canvas from 'html2canvas'

const capture = () => {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    // document.body.appendChild(canvas)
    var link = document.createElement('a');
    link.download = 'phungan-taghoa.png';
    link.href = canvas.toDataURL()
    link.click();
  });
}
</script>

<template>
  <v-btn
    rounded
    variant="outlined"
    elevation="20"
    size="x-large"
    color="bg-white"
    @click="capture"
  >TẢI VỀ</v-btn>
</template>