<script lang="ts" src="./cart-item.ts"></script>
<style scoped src="./cart-item.css"></style>

<template>
    <div class="d-flex flex-row" style="gap: 16px">
        <div class="image-cart-container" :style="{ background: cartItem?.color ?? 'transparent' }">
            <img class="image-cart-item" :src="cartItem?.image" :alt="cartItem?.id"/>
        </div>
        <div class="d-flex flex-column w-100" style="gap: 4px;">
            <p style="font-weight: 600; font-size: 14px;">{{ cartItem?.name }}</p>
            <p style="font-weight: 600; font-size: 18px;">${{ cartItem?.price }}</p>
            <div class="d-flex flex-row justify-content-between w-100">
                <div class="d-flex flex-row" style="gap: 8px;">
                    <img @click="decreaseQuantity" src="@/assets/minus.png" alt="nike" style="width: 28px; height: 28px; padding: 8px; background: #E2E2E6; border-radius: 100%; cursor:pointer"/>
                    <p>{{ cartItem?.quantity  }}</p>
                    <img @click="increaseQuantity" src="@/assets/plus.png" alt="nike" style="width: 28px; height: 28px; padding: 8px; background: #E2E2E6; border-radius: 100%; cursor:pointer"/>
                </div>
                <img @click="deleteItem" src="@/assets/trash.png" alt="trash" style="width: 28px; height: 28px; padding: 8px; background: #F6C90E; border-radius: 100%; cursor:pointer"/>
            </div>
        </div>
    </div>
</template>
