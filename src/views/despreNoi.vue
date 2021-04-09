<template>
  <v-main class="font">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
    <Navbar />
  </v-main>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components:
    Navbar
}

</script>

<style>

.font {
  font-family: 'Lato', sans-serif;
}

</style>
