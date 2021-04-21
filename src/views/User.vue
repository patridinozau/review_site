<template>
  <div>
    <v-main class="main">
      <nav-bar />
      <br><br><br><br>
      <div class="profileCard" >
        <v-divider vertical dark inset/>
        <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                v-if="loading"
        ></v-progress-circular>
        <table v-if="!loading">
          <tr>
            <td>
              <img :src="user.profileImg" width="300" height="300" class="profilePic">
            </td>
          </tr>
          <tr>
            <td>
              <p>Nume: {{ user.userName }}</p>
              <p v-if="authUser">E-mail: {{ authUser.email }}</p>
            </td>
          </tr>
          <tr>
            <td><hr class="tableLine"></td>
          </tr>
          <br>
          <tr>
            <td>
              <!--<H4>Biografie</H4><br>-->
              <v-textarea
                      solo
                      clearable
                      counter
                      clear-icon="mdi-close-circle"
                      append-icon="mdi-comment"
                      no-resize
                      label="Biografie"
                      :rules="rules"
                      rows="3"
                      value=""
              ></v-textarea>
            </td>
          </tr>
          <tr>
            <td>
              <p class="descriere">Nr de review-uri: </p>
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
    data: () => ({
      rules: [v => v.length <= 75 || 'Maxim 75 de caractere'],
      value: '',
    }),
    created() {
      this.$store.dispatch('loadUsers')
    },
    components: {
    'nav-bar': Navbar
  },
  computed: {
    user () {
      return this.$store.getters.someUser(this.id)
    },
    authUser () {
      if(this.$store.getters.user.key === this.$store.getters.someUser(this.id).id)
        return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .main {
    background-color: #ffffff;
    font-family: 'Lato', sans-serif;
  }
  .profileCard {
    position: center;
    margin: auto;
    /*display:flex;
    justify-content: space-between;*/
    top: 5px;
    left: 0;
    width: 50%;
    padding: 20px;
    background-color: #f5f5f5;
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
    width:100%;
    margin:auto;
  }
</style>
