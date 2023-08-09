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

const drawCanvas = (canvas) => {
  if (canvas == null || canvas == undefined) {
    return
  }
  const ctx = canvas.getContext('2d')

  ctx.rotate(-Math.PI / 2)
  ctx.translate(-canvas.height, 0)

  ctx.font = "16px Candara"
  ctx.fillStyle = '#272727'
  // if (isBlack.value) {
    // ctx.fillStyle = '#ded9cc'
  // }
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("PHUNGANANH", canvas.style.width / 2, canvas.style.height / 2 + 13)
}

const capture = () => {
  const node = document.querySelector("#capture")
  node.classList.remove('hidden');
  html2canvas(node, options).then(canvas => {
    // document.body.appendChild(canvas)
    download(canvas.toDataURL())
    node.classList.add('hidden');
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
  <v-btn rounded class="w-32" variant="outlined" elevation="5" size="large" color="bg-white" @click="capture">TẢI
    VỀ</v-btn>
</template>