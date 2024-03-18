<script lang="ts" src="./home.ts"></script>
<style scoped src="./home.css"></style>

<template>
    <div class="home-container">
        <div class="rounded"></div>
        <div class="home-content" :style="isMobile? 'flex-direction: column' : 'flex-direction: row'" >
            <Product/>
            <Cart/>
        </div>
    </div>  
</template>
