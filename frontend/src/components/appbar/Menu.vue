<template>
  <v-menu bottom offset-y rounded="b-xl">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-if="!isLoggedIn" link to="/login">
        <v-list-item-title>Iniciar sesión</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isLoggedIn" link @click="logOut()">
        <v-list-item-title>Cerrar sesión</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {users} from '../../controllers/Users.controller'
export default {
  name: "Menu",
  data: () => ({
    items: [
      {title: "Iniciar sesión", icon: "mdi-login", route: "/login", show: true},
      {title: "Cerrar sesión", icon: "mdi-location-exit", route: "/logout", show: true},
    ],
    offset: true
  }),
  computed: {
    isLoggedIn() {
      return sessionStorage.getItem("username") != undefined;
    },
  },
  methods: {
    logOut() {
      users.logout().then((response) => {
        console.log(response)
        sessionStorage.clear()
        this.$router.push('Inicio')
        window.location.reload();
      }).catch((err) => {
        sessionStorage.clear()
        this.$router.push('Inicio')
        window.location.reload();
        console.log(err.message)
      });
    }
  },

}
</script>

<style scoped>

</style>