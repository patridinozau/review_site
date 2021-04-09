<template>
  <div class="navbar white--text">
    <span><img src="../assets/logoo.png" class="logo"></span>
    <div class="navcontent">
      <router-link to="/" style="text-decoration: none" class="white--text font">HOME</router-link>
<!--      <v-btn class="buttons font white&#45;&#45;text" text>home</v-btn>-->
      <v-btn class="buttons font white--text" text>categorii</v-btn>
      <router-link to="despreNoi" style="text-decoration: none" class="white--text font">DESPRE NOI</router-link>
    </div>
  </div>
</template>

<script>
import despreNoi from '../views/despreNoi.vue'
import Home from '../views/Home.vue'

export default {
  name : 'Navbar',
  components:
    despreNoi,
    Home
}
</script>

<style scoped>

  .font {
    font-family: 'Lato', sans-serif;
  }

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
  .logo {
    padding: 0;
    margin: 0;
    height:55%;
    width: 55%;
  }
</style>
