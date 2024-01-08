<script setup>
    import BaseBackgroundVideo from '@/components/shared/BaseBackgroundVideo.vue';
    import TheHeaderNav from '@/components/nav/TheHeaderNav.vue';
    import BackgroundVideo from '@/assets/video/landingPageVideoBG.mp4';
</script>

<template>
    <header>
        <base-container tag="nav">
            <!-- Nav -->
            <the-header-nav></the-header-nav>
            <!-- EndNav -->
        </base-container>
        <base-background-video :src="BackgroundVideo"></base-background-video>
    </header>
</template>

<style scoped>
</style>