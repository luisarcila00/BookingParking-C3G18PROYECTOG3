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

    <v-app-bar  app dark src="./assets/bg.jpg">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">{{ mainTitle }}</span>
        <span>Parking</span>
               
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat class="font-weight-light" >
        <span>Exit</span>
        <v-icon right>mdi-exit-to-app</v-icon>
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
    mainTitle: "Booking",
    username: "User0000",
  }),
};
</script>