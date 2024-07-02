<script setup>
const { type, content } = defineProps({
    type: String,
    content: String,
})

</script>
<template>
    <div :class="`bg-${type}-subtle text-${type}-emphasis p-4
                border-start border-5 border-${type}-subtle
                d-flex flex-row gap-4`">
        <div class="fs-3">
            <i class="fa-solid fa-circle-info"></i>
        </div>
        <div class="d-flex align-items-center justify-content-center ">
            <slot></slot>
        </div>
    </div>
</template>