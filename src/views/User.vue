<template>
  <div>
    <v-main class="main">
      <nav-bar />
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">
      <br><br>
      <div class="profileCard" >
        <v-divider vertical dark inset/>
        <table>
          <tr>
            <td>
              <img :src="user.profileImg" width="300" height="300" class="profilePic">
              <p>Text extra pt ceva?</p>
            </td>
            <td>
              <p v-if="authUser">E-mail: {{ authUser.email }}</p>
              <p>Nume: {{ user.userName }}</p>
            </td>
          </tr>
          <tr>
            <td><hr class="tableLine"></td>
            <td><hr class="tableLine"></td>
          </tr>
          <tr>
            <td>
              <H4>Descriere pt persoana</H4><br>
              <p class="descriere">Ad quia nihil est. Dicta dolor consectetur deserunt eveniet eius rerum voluptatem non. Unde perspiciatis quos placeat placeat quasi. Repudiandae facilis aperiam ea. Illum quia velit sed nihil ut in aperiam.</p>
            </td>
            <td>
              <p class="descriere">Nr de review-uri: 1337</p>
            </td>
          </tr>
        </table>
      </div>
      <br><br>
    </v-main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

  export default {
  props: ['id'],
    components: {
    'nav-bar': Navbar
  },
  computed: {
    user () {
      return this.$store.getters.someUser(this.id)
    },
    authUser () {
      if(this.$store.getters.user !== null && this.$store.getters.user !== undefined)
        return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #f2ffff;
  font-family: 'Lato', sans-serif;
}
.profileCard {
  position: center;
  margin: auto;
  /*display:flex;
  justify-content: space-between;*/
  top: 5px;
  left: 0;
  width: 85%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
}
.profilePic{
  border-radius: 10px;
}
th, td {
  /*max-width:150px;*/
  padding-left: 150px;
  padding-right: 150px;
}
.descriere{
  text-align: justify;
  max-width: 300px;
}
table{
  position:center;
  margin:auto;

}
.tableLine{
  width:90%;
  margin:auto;
}
</style>