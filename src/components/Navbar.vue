<template>
    <div class="navbar white--text">
        <span>logo</span>
        <div class="navcontent">
            <v-btn class="buttons white--text" text>home</v-btn>
            <v-btn class="buttons white--text" text>categorii</v-btn>
            <v-btn class="buttons white--text" text>despre noi</v-btn>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .navbar {
        position: fixed;
        display:flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
        left: 0;
        width: 100%;
        padding: 8px;
        background-color: hsl(135, 0%, 25%);

    }

    .navcontent {
        align-items: center;
        align-content: center;
        justify-items: center;
        justify-content: center;
        display: flex;
        position: relative;
        right: 40%;
    }
</style>