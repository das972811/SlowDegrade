<script setup>
    import BaseBackgroundVideo from '@/components/shared/BaseBackgroundVideo.vue';
    import BackgroundVideo from '@/assets/video/landingPageVideoBG.mp4';
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">Desolation</a></li>
                <li><a href="#">Melancholy</a></li>
                <li><a href="#">Woes</a></li>
                <li><a href="#">Solitude</a></li>
            </ul>
        </nav>
        <base-background-video :src="BackgroundVideo"></base-background-video>
    </header>
</template>