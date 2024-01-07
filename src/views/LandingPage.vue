<script setup>
    import BaseLayout from '@/components/shared/BaseLayout.vue';
    import BaseBackgroundVideo from '@/components/shared/BaseBackgroundVideo.vue';
    import BackgroundVideo from '@/assets/video/landingPageVideoBG.mp4';
</script>
<template>
    <base-layout>
        <template #header>
            <header>

            </header>
        </template>
        <template #default>
            <base-background-video :src=BackgroundVideo ></base-background-video>
        </template>
        <template #footer>
            <footer>
                
            </footer>
        </template>
    </base-layout>
</template>