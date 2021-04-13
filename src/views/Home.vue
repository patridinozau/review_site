<template>
  <v-main class="main">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
    <nav-bar />

    <div class="first_content">
      <div class="content">
        <div class="content-col content-text">
          <p>Doresti si tu sa lasi un review unui produs? Creeaza-ti un cont chiar acum</p>
          <br />
          <sign-up />
        </div>
        <div class="content-col mr-15">
          <img src="../assets/rating.png" class="img" />
        </div>
      </div>
      <div class="subcontent">
        <div class="content-col subcontent-text">
          <p>Ai deja un cont? Conecteaza-te la el aici</p>
          <br />
          <log-in />
        </div>
      </div>
    </div>

    <div style="padding:20px" class="separator"><v-icon>mdi-chevron-triple-left</v-icon></div>
    <br />



    <div class="content-part">
      <div class="content-box">
        <div class="content-title">
          <h1>Ce este HonestReviews?</h1>
        </div>

        <div class="content-parag">
          <p>
            HonestReviews este un website prin intermediul caruia utilizatorii pot lasa review-uri, adica pareri, oricarui produs pe care l-au achizitionat.
            Un asa-zis "review" consta in exprimarea propriei opinii in legatura cu produsul ales.
            De asemenea, sunt mentionate sursa de unde a fost achizitionat produsul, numele intreg al acestuia, pretul si alte informatii utile.
          </p>
        </div>
      </div>

      <div class="content-image">
        <img src="../assets/social-media-3846597_640.png" />
      </div>

    </div>


    <br />
    <div style="padding:20px" class="separator"><v-icon>mdi-chevron-triple-right</v-icon></div>
    <br />

    <div class="content-part">

      <div class="content-image mr-12">
        <img style="background: white" src="../assets/social-media-5187243_1280.png"  />
      </div>

      <div class="content-box mr-15">
        <div class="content-title">
          <h1>De ce HonestReviews?</h1>
        </div>

        <div class="content-parag">
          <p>
            Site-ul nostru va ofera o modalitate usoara de a scrie sau de a cauta impresii ale altor utilizatori despre orice fel ce produs.
            De la frigidere la computere, de la masini la biciclete, de la resorturi turistice la restaurante, aici puteti gasi un review pentru orice categorie imaginabila.
            Datorita interfatei construita sa fie usor de folosit, oricine poate beneficia de acest site.
            In plus, autentificarea se poate realiza prin intermediul E-Mailului, al contului de Google sau al contului de Facebook, asigurand, astfel, un proces rapid de logare.
          </p>
        </div>
      </div>

    </div>

  </v-main>
</template>

<script>
import Signup from "../components/Signup";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
export default {
  components: {
    'sign-up': Signup,
    'log-in': Login,
    'nav-bar': Navbar
  }
}
</script>

<style>
.main {
  font-family: 'Lato', sans-serif;
}
.first_content{
  background-image: linear-gradient(to bottom right,rgba(245, 250, 228,0.4),rgba(245, 250, 228,0.4)),
  url("../assets/tori-1976609_1920.jpg");
  background-position: center;
  background-size: cover;
}
.content-text{
  font-size: 34px;
  font-weight: 800;
  padding: 25px 15px;
  font-family: 'Archivo Black', sans-serif;
}
.subcontent-text {
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 50px;
  font-family: 'Archivo Black', sans-serif;
}
.content {
  padding: 50px 50px 0px 50px;
  margin: 50px 50px 0px 50px;
  text-align: center;
  justify-content: space-between;
  display: flex;
}
.subcontent{
  padding-left: 50px;
  margin-left: 50px;
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.content-col {
  flex-basis: 31%;
}
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  font-family: 'Arvo', serif;
}
.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e0eaf5;
}
.separator:not(:empty)::before {
  margin-right: .25em;
}
.separator:not(:empty)::after {
  margin-left: .25em;
}
.content-part{
  flex-basis: 31%;
  justify-content: space-between;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 40px;
  margin: 30px;
}
.img {
  width: 100%;
  height: 100%;
}
.content-box{
  width: 40%;
  padding: 20px;
  margin: 5px 0px 5px 15px;
  text-align: center;
}
.content-title{
  margin-bottom: 15px;
  font-weight: 900;
  font-family: 'Archivo Black', sans-serif;
}
.content-parag{
  font-size: 20px;
  font-weight: 200;
}
.content-image{
  margin-right: 30px;
  padding-right: 20px;
}

</style>
