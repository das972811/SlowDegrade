<script setup>
    defineProps({
        src: String
    });
</script>

<template>
    <div class="video-background">
        <video autoplay loop muted>
            <source :src="src" type="video/mp4" />
        </video>
    </div>
</template>

<style scoped>
    .video-background {
        width: 100%;
        height: 100vh;

    }

    .video-background video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>