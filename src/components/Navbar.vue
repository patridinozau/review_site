<template>
  <div class="navbar white--text">
    <span><img src="../assets/logoo.png" class="logo"></span>
    <div class="navcontent">
      <router-link to="/" style="text-decoration: none" class="white--text font">ACASĂ</router-link>
      <v-btn class="buttons font white--text" text>CATEGORII</v-btn>
      <router-link to="/despreNoi" style="text-decoration: none" class="white--text font">DESPRE NOI</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'nav-bar',
  components:{}

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
    z-index: 100000;
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
