<script lang="ts" src="./product-item.ts"></script>
<style scoped src="./product-item.css"></style>

<template>
    <div class="d-flex flex-column" style="gap:12px; background: transparent">
        <div class="d-flex justify-content-center align-items-center image-container" :style="{ background: productItem?.color ?? 'transparent' }">
            <img class="image-product-item" :src="productItem?.image" :alt="productItem?.id"/>
        </div>
        <p style="font-weight: 600; font-size: 18px;">{{ productItem?.name }}</p>
        <p style="font-weight: 400; font-size: 12px;">{{ productItem?.description }}</p>
        <div class="d-flex flex-row justify-content-between align-items-center" style="gap:8px">
            <p style="font-weight: 600; font-size: 18px;">${{ productItem?.price }}</p>
            <button v-if="!isAdd" class="d-flex justify-content-center align-items-center" 
                style="padding: 4px 8px; background: #F6C90E; border-radius: 28px; border: none"
                @click="handleAddToCard"
            >
                <p style="font-weight: 600; font-size: 14px;">Add to cart</p>
            </button>
            <img v-else src="@/assets/check.png" alt="check" style="width: 28px; height: 28px; padding: 8px; background: #F6C90E; border-radius: 100%"/>
        </div>
    </div>
</template>
