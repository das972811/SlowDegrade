<script setup>
    defineProps({
        tag: {
            type: String,
        },
        customClass: {
            type: String,
        },
        disabled: {
            type: Boolean,
        }
    });
</script>

<template>
    <component :is="tag ?? 'div'" :class="[customClass, {'container': !disabled}]">
        <slot></slot>
    </component>
</template>

<style scoped>
.container  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.container > :first-child {
    width: 100%;
}

@media screen and (max-width: 576px) {
    .container > :first-child {
        width: 100%;
        padding: 0 2.25rem;
    }
}

@media screen and (min-width: 576px) {
    .container > :first-child {
        max-width: 540px;
    }
}

@media screen and (min-width: 768px) {
    .container > :first-child {
        max-width: 720px;
    }
}

@media screen and (min-width: 992px) {
    .container > :first-child {
        max-width: 960px;
    }
}

@media screen and (min-wdith: 1200px) {
    .container > :first-child {
        max-width: 1140px;
    }
}

@media screen and (min-width: 1440px) {
    .container > :first-child {
        max-width: 1320px;
    }
}
</style>