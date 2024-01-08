<script setup>
    defineProps({
        src: {
            type: String,
            required: true,
        }
    });
</script>

<template>
    <base-container class="video-background" disabled>
        <video autoplay="autoplay" loop muted>
            <source :src="src" type="video/mp4" />
        </video>
    </base-container>
</template>

<style scoped>
    .video-background {
        width: 100%;
        height: 100vh;
    }

    .video-background video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
</style>