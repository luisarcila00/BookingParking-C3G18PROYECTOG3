<template>
  <v-app id="inspire">
    <Navbar :drawer="drawer"/>
    <Menu :mainTitle="mainTitle" :username="username" :drawer="drawer"></Menu>
    <v-main>
      <div class="content">
        <p>Drawer: {{ drawer }}</p>
      </div>
      <router-view></router-view>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {Navbar, Footer, Menu},
  data: () => ({
    mainTitle: "Booking Parking",
    username: "User0000",
    drawer: false,
  }),
};
</script>