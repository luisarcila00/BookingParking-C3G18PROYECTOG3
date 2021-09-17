<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark class="grey darken-3">
      <Menu :mainTitle="mainTitle" :username="username"></Menu><!--  -->
    </v-navigation-drawer>

    <v-app-bar app dark class="grey darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ mainTitle }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';
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