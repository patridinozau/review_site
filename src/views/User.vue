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
              <H4>Biografie:</H4><br>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="descriere">Nr de review-uri: {{ reviews.length }}</p>
            </td>
          </tr>
        </table>
        <br><br>
        <div style="margin:auto;width:60%">
          <v-container>
            <v-row>
              <v-col>

                <v-card class="pa-7 mb-4" style="overflow:hidden" v-for="review in reviews" :key="review.id">
                  <div>
                    <div style="float: right">
                      <div class="rat">
                        ({{review.rating}})</div>
                      <v-rating class="ste"
                                background-color="warning lighten-1"
                                color="warning"
                                half-increments
                                length="5"
                                readonly
                                size="25"
                                :value=review.rating
                      ></v-rating>

                    </div>

                    <v-avatar style="float: left">
                      <img :src="review.userImg" class="avatarr">
                    </v-avatar>

                    <v-card-title class="titlu">{{review.name}}</v-card-title>
                    <div style="float: right;"><v-img class="imag" :src="review.img" /></div>
                    <v-card-title class="texti">{{review.title}}</v-card-title>
                    <v-card-text class="tex">{{review.text | quotes}}</v-card-text>

                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>

      </div>
    </v-main>
    <br />
  </div>
</template>


<script>
import Navbar from "../components/Navbar";

export default {
  props: ['id'],
  data: () => ({

  }),
  created() {
    this.$store.dispatch('loadUsers')
    this.$store.dispatch('loadUserReviews', this.id)
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
    },
    reviews () {
      return this.$store.getters.userReviews
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
  width: 60%;
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
.imag{
  max-width:220px;
  max-height: 220px;
  padding: 5px;
}
.texti{
  padding:10px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 20px;
}
.tex{
  font-size:18px;
  padding-top:7px;
  padding-right: 10px;
  font-family: 'Lato', sans-serif;
  font-weight: bolder;
  text-align: left;
}
.titlu {
  font-family: 'Archivo Black', sans-serif;
  font-weight: bolder;
  font-size: 25px;
}

.ste{
  color: #ff9454;
  float: right;
  margin-top: 17px;
}
.rat{
  float: right;
  font-size: 20px;
  padding: 3px;
  margin-top: 13px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}
.avatarr{
  float:left;
  font-size:32px;
  height: 42px;
  width: 42px;
}
</style>
