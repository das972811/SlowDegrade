<script setup>
    import BaseLayout from '@/components/shared/BaseLayout.vue';
    import TheHeader from '@/components/nav/TheHeader.vue';
    import TheFooter from '@/components/footer/TheFooter.vue';
</script>

<template>
    <base-layout>
        <template #header>
            <the-header></the-header>
        </template>
        <template #default>
        </template>
        <template #footer>
            <the-footer></the-footer>
        </template>
    </base-layout>
</template>
<style scoped>

</style>