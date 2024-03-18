<script lang="ts" src="./product.ts"></script>
<style scoped src="./product.css"></style>

<template>
    <div class="product-container">
        <div class="rounded"></div>
        <div class="product-content">
            <img src="@/assets/nike.png" alt="nike" style="width: 28px; object-fit: contain;"/>
            <p style="font-weight: 600; font-size: 20px;">Our Product</p>
            <div class="d-flex flex-column" style="gap:80px; overflow: scroll;">
                <div v-for="(item,index) in productItems" :key="index">
                    <ProductItem :productItem="item" v-motion :initial="{opacity: 0, y: 0}" :visible="{opacity: 1, y: 0}"/>
                </div>
            </div>
        </div>
    </div>
</template>
