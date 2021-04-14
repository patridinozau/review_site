<template>
  <div class="navbar white--text" v-if="userIsAuthenticated">
      <span><img src="../assets/logoo.png" class="logo"></span>
      <div class="navcontent1">
        <router-link to="/" style="text-decoration: none" class="white--text font">ACASĂ</router-link>
        <router-link to="/categorii" style="text-decoration: none; padding:5px" class="white--text font">CATEGORII </router-link>
        <router-link to="/despreNoi" style="text-decoration: none" class="white--text font">DESPRE NOI</router-link>
      </div>

    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </template>

        <v-btn to="/user">
          Profile
        </v-btn>
        <br />
        <v-btn @click="logout">
          Logout
        </v-btn>
      </v-menu>
    </div>
  </div>
  <div v-else class="navbar white--text">
    <span><img src="../assets/logoo.png" class="logo"></span>
    <div class="navcontent">
      <router-link to="/" style="text-decoration: none" class="white--text font">ACASĂ</router-link>
      <router-link to="/categorii" style="text-decoration: none; padding:5px" class="white--text font">CATEGORII </router-link>
      <router-link to="/despreNoi" style="text-decoration: none" class="white--text font">DESPRE NOI</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'nav-bar',
  data: () => ({

  }),
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
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
  .navcontent1 {
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
  .logo {
    padding: 0;
    margin: 0;
    height:55%;
    width: 55%;
  }
</style>
