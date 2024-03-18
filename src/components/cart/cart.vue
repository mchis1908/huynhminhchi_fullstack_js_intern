<script lang="ts" src="./cart.ts"></script>
<style scoped src="./cart.css"></style>

<template>
    <div class="cart-container">
        <div class="rounded"></div>
        <div class="cart-content">
            <img src="@/assets/nike.png" alt="nike" style="width: 28px; object-fit: contain;"/>
            <div class="d-flex flex-row justify-content-between w-100" style="gap:8px">
                <p style="font-weight: 600; font-size: 20px;">Your Cart</p>

                <p style="font-weight: 600; font-size: 20px;">{{ roundMoney(totalPrice) }}</p>
            </div>
            <div v-if="cartItems?.length>0" class="d-flex flex-column w-100" style="gap:40px; overflow: auto; height: 100%;">
                <div v-for="(item,index) in cartItems" :key="index">
                    <CartItem :cartItem="item" @increaseQuantity="increaseQuantity" @decreaseQuantity="decreaseQuantity" @deleteItem="deleteItem"
                        v-motion :initial="{opacity: 0, y: 100}" :enter="{ opacity: 1, y: 0}" :leave="{ y: -100, opacity: 0}"
                    />
                </div>
            </div>
            <p v-else style="font-weight: 400; font-size: 14px;">
                Your cart is empty
            </p>
        </div>
    </div>
</template>
