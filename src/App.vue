<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      src="./assets/bg3.jpg"
    >
      <Menu :mainTitle="mainTitle" :username="username"></Menu
      ><!--  -->
    </v-navigation-drawer>

    <v-app-bar app dark src="./assets/bg.jpg">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img contain src="./assets/BPLogo.jpeg" max-height="50" max-width="80"></v-img>
      <v-toolbar-title>{{ mainTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn icon href="Login" target="_self">
    <v-icon>mdi-account-circle</v-icon> 
    </v-btn>
    
    <v-btn icon href="/" target="_self">
    <v-icon>mdi-exit-to-app</v-icon> 
    </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: { Menu },
  data: () => ({
    drawer: null,
    mainTitle: "Booking Parking",
    username: "User0000",
  }),
};
</script>