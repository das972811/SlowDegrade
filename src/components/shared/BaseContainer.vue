<script setup>
    defineProps({
        class: {
            type: String,
        }
    });
</script>

<template>
    <div :class="class">
        <slot></slot>
    </div>
</template>