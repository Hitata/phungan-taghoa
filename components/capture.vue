<script setup>
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'

const options = {
  width: 448,
  height: 433
};

const download = (url) => {
  var link = document.createElement('a');
  link.download = 'phungan-taghoa.png';
  link.href = url 
  link.click();
}

const capture = () => {
  html2canvas(document.querySelector("#capture"), options).then(canvas => {
    document.body.appendChild(canvas)
    // download(canvas.toDataURL())
  });
}

const anotherCapture = () => {
  const node = document.querySelector("#capture");

  domtoimage.toJpeg(node, options).then(dataUrl => {
    const img = new Image();
    // img.src = dataUrl;
    // document.body.appendChild(img);
    download(dataUrl)
  })
    .catch(error => {
      console.error('oops, something went wrong!', error);
    });
}
</script>

<template>
  <v-btn rounded class="w-32" variant="outlined" elevation="5" size="large" color="bg-white" @click="anotherCapture">TẢI
    VỀ</v-btn>
</template>