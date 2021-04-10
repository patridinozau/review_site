<template>
  <v-main class="font">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
    <Navbar />
    <div>
      <br />
      <br />
      <br />
      <br />
      <div class="title" align="center">
        <h1 >Cine sunt membrii echipei?</h1>
      </div>
      <div class="grad container">
        <br />
        <v-card class="card">
          <v-card-text class="card_text">
              <div align="center" style="font-weight:800; font-size: 34px;" class="font">
                  <span class="font" style="font-weight:800; font-size: 34px;">- Darius -</span>
              </div>
            <br />
              <div>
                  <span class="font" style="font-weight: 200; font-size: 17px; align-content:center; display: flex;">Calitati: </span>
                  <ul style="list-style-position: inside; list-style-type: square">
                    <li>ambitios</li>
                    <li>bun lider</li>
                    <li>foarte muncitor</li>
                  </ul>
              </div>
              <div>
                <h3>Fun fact:</h3>
              </div>
          </v-card-text>
        </v-card>
        <v-card class="card">
          <v-card-text class="card_text">
            <div align="center" style="font-weight:800; font-size: 34px;" class="font">
              <span class="font" style="font-weight:800; font-size: 34px;">- Iulian -</span>
            </div>
            <br />
            <div>
              <span class="font" style="font-weight: 200; font-size: 17px; align-content:center; display: flex;">Calitati: </span>
              <ul style="list-style-position: inside; list-style-type: square">
                <li>harnic</li>
                <li>respectuos</li>
                <li>inteligent</li>
              </ul>
            </div>
            <div>
              <h3>Fun fact:</h3>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="card">
          <v-card-text class="card_text">
            <div align="center" style="font-weight:800; font-size: 34px;" class="font">
              <span class="font" style="font-weight:800; font-size: 34px;">- Robert -</span>
            </div>
            <br />
            <div>
              <span class="font" style="font-weight: 200; font-size: 17px; align-content:center; display: flex;">Calitati: </span>
              <ul style="list-style-position: inside; list-style-type: square">
                <li>destept</li>
                <li>atent</li>
                <li>meticulos</li>
              </ul>
            </div>
            <div>
              <h3>Fun fact:</h3>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="card">
          <v-card-text class="card_text">
            <div align="center" style="font-weight:800; font-size: 34px;" class="font">
              <span class="font" style="font-weight:800; font-size: 34px;">- Patri -</span>
            </div>
            <br />
            <div>
              <span class="font" style="font-weight: 200; font-size: 17px; align-content:center; display: flex;">Calitati: </span>
              <ul style="list-style-position: inside; list-style-type: square">
                <li>ingenioasa</li>
                <li>silitoare</li>
                <li>creativa</li>
              </ul>
            </div>
            <div>
              <h3>Fun fact: stie sa cante la ukulele</h3>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="padding:20px" class="separator"><v-icon>mdi-chevron-triple-left</v-icon></div>
      <div>

      </div>
    </div>
  </v-main>
</template>

<script>
export default {
}
</script>

<style>
.font {
  font-family: 'Archivo Black', sans-serif;
}
.grad {
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,231,1) 23%, rgba(195,205,197,1) 100%);
  /*background: rgb(255,255,255);*/
  /*background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,231,1) 25%, rgba(195,205,197,1) 50%, rgba(255,255,231,1) 75%, rgba(255,255,255,1) 100%);*/
}
.container {
  display:flex;
  align-content: center;
  justify-content: center;
}
.card {
  width: 40%;
  height: 40%;
  padding: 20px;
  margin: 20px;
  align-content: center;
  justify-content: center;
  display: flex;
}

/*.card_text {*/
/*  align-content: center;*/
/*  justify-content: center;*/
/*  display: flex;*/
/*}*/

.title {
  margin-bottom: 15px;
  font-size: 200px;
  font-weight: 800;
  padding: 25px 15px;
  font-family: 'Archivo Black', sans-serif;
  position: center;
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

</style>
