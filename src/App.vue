<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Home from "./views/Home";
export default {
  components: {
    Home
  }
};
</script>
