<template>
  <div class="navbar white--text" v-if="userIsAuthenticated">
    <span><img src="../assets/logoo.png" class="logo"></span>

    <div class="search-input">
      <table class="search-container">
        <tr>
          <td>
            <v-icon class="icon">mdi-magnify</v-icon>
          </td>
          <td>
            <input v-model="search" type="text" class="font font-weight-bold" placeholder="Type to search..."  />
          </td>
          <td>
            <v-icon class="icon mr-4" style="">mdi-close</v-icon>
          </td>
        </tr>
      </table>

    </div>
    <v-spacer />
    <div>
      <router-link to="/" style="text-decoration: none; padding:15px" class="white--text font">ACASA</router-link>
      <router-link to="/categorii" style="text-decoration: none; padding:15px" class="white--text font">CATEGORII </router-link>
      <router-link to="/despreNoi" style="text-decoration: none; padding:15px" class="white--text font">DESPRE NOI</router-link>
    </div>

    <div class="text-center ml-10">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on">
            <img :src="user.profileImg" class="avatarr">
          </v-avatar>
        </template>
        <v-list class="list">
          <v-list-item-group>
            <v-list-item @click="goToMyAcc" class="haha">
              <v-list-item-icon>
                <v-icon class="ava">
                  mdi-account-circle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Profil</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="logout" class="haha">
              <v-list-item-icon>
                <v-icon class="ava">
                  mdi-logout
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
  </div>
  <div v-else class="navbar white--text">
    <span><img src="../assets/logoo.png" class="logo"></span>
    <div class="search-input">
      <table class="search-container">
        <tr>
          <td>
            <v-icon class="icon">mdi-magnify</v-icon>
          </td>
          <td>
            <input v-model="search" type="text" class="font" placeholder="Type to search..."  />
          </td>
          <td>
            <v-icon class="icon mr-4" style="">mdi-close</v-icon>
          </td>
        </tr>
      </table>

    </div>
    <v-spacer />
    <div>
      <router-link to="/" style="text-decoration: none; padding:15px" class="white--text font">ACASA</router-link>
      <router-link to="/categorii" style="text-decoration: none; padding:15px" class="white--text font">CATEGORII </router-link>
      <router-link to="/despreNoi" style="text-decoration: none; padding:15px" class="white--text font">DESPRE NOI</router-link>
      <router-link to="/Login" style="text-decoration: none; padding:15px" class="white--text font">AUTENTIFICA-TE</router-link>
      <router-link to="/Signup" style="text-decoration: none; padding:15px" class="white--text font">INSCRIE-TE</router-link>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'nav-bar',
    data: () => ({
      search: ''
    }),
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      user () {
        return this.$store.getters.user
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      },
      goToMyAcc () {
        const id = this.$store.getters.user.key
        this.$router.push('/user/' + id)
      },
      toSignUp () {
        this.$router.push('/Signup')
      },
      toLogIn () {
        this.$router.push('/Login')
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

  .logo {
    padding: 0;
    margin: 0;
    height:55%;
    width: 55%;
    float: left;
  }
  .avatarr{
    cursor: pointer;
    font-size:32px;
    height: 42px;
    width: 42px;
  }
  .list{
    width:230px;
  }
  .ava{
    font-size:30px;
  }
  .haha:hover{
    background-color: rgba(0,204,255,0.1);
  }
  .search-input{
    background: white;
    border-radius: 30px;
    position: relative;
  }

  input{
    height: 35px;
    width: 100%;
    border: none;
    border-radius: 50px;
    padding: 0 5px 0 5px;
    font-size: 20px;
  }

  input:focus {
    outline: none;
  }


  .icon{
    width: 30px;
    text-align: center;
    font-size: 20px;
    color: black;
    cursor: pointer;
    margin-left: 10px;
  }
</style>
