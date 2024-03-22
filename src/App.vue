<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import BGVideo from './assets/video/landingPageVideoBG.mp4'

const canvas = ref(null);
const video = ref(null);
const canvasInterval = ref(null);

const drawImage = video => {
    const ctx = canvas.value.getContext('2d', { alpha: false });
    ctx.drawImage(video, 0, 0, 1280, 720);
};

const startDrawing = () => {
    stopDrawing();
    canvasInterval.value = setInterval(() => {
        drawImage(video.value);
    }, 1000 / 60);
};

const stopDrawing = () => {
    clearInterval(canvasInterval.value);
};

onMounted(() => {
    console.log(canvas.value);
    console.log(video.value);

    startDrawing();

});

onBeforeUnmount(() => {
    stopDrawing();
});

</script>
<template>
    <h2>Diego was here</h2>
    <canvas ref="canvas" width="1280" height="720"></canvas>

    <br />
    <br />
    <video autoplay loop muted preload="auto" playsinline ref="video">
        <source :src="BGVideo" type="video/mp4"/>
    </video>
</template>

<style scoped>
</style>
