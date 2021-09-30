<template>

    <v-app id="inspire">
      <Navbar :mainTitle="mainTitle" :username="username"/>
      <v-main>
        <router-view></router-view>
      </v-main>
      <Footer/>
    </v-app>

</template>

<script>
import Footer from "./components/footer";
import Navbar from "./components/appbar/navbar";
export default {
  name: "App",
  components: {Navbar, Footer},
  data: () => ({
    mainTitle: "Booking Parking",
    username: "User0000",
  }),
};
</script>
<style lang="scss">
  #pantalla {
    background: rgb(97, 97, 97);
    margin: 1em;
  }
</style>
