<template>
  <v-app id="inspire">
    <Navbar @hidden-show-drawer="drawer = !drawer" :mainTitle="mainTitle" :username="username"/>
    <navigationDrawer :mainTitle="mainTitle" :username="username" :drawer="drawer"/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/footer";
import Navbar from "./components/appbar/Appbar";
import navigationDrawer from "./components/navigationDrawer/NavigationDrawer";

export default {
  name: "App",
  components: {Navbar, Footer, navigationDrawer},
  data: () => ({
    mainTitle: "Booking Parking",
    username: "User0000",
    drawer: true
  }),
};
</script>
<style lang="scss">
#pantalla {
  background: rgb(97, 97, 97);
  margin: 1em;
}
</style>
