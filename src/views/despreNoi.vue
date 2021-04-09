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
          <h3>Darius</h3>
        </v-card>
        <v-card class="card">
          <h3>Robert</h3>
        </v-card>
        <v-card class="card">
          <h3>Iulian</h3>
        </v-card>
        <v-card class="card">
          <h3>Patri</h3>
        </v-card>
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
  font-family: 'Lato', sans-serif;
}

.grad {
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(187,196,189,1) 100%);
}

.container {
  display:flex;
  align-content: center;
  jutify-content: center;
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

.title {
  margin-bottom: 15px;
  font-size: 200px;
  font-weight: 800;
  padding: 25px 15px;
  font-family: 'Archivo Black', sans-serif;
  position: center;
}

</style>
