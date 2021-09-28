<template>
  <div>
    <v-app-bar app dark src="../assets/bg_black.png">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.mainTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y rounded="b-xl">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Menu :mainTitle="this.mainTitle" :username="this.username" :drawer="drawer"/>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "navbar",
  components: {
    Menu
  },
  props: {
    mainTitle: {
      type: String,
      default: 'Booking Parking'
    },
    username: {
      type: String,
      default: 'Invitado'
    }
  },
  data: () => ({
    items: [
      {title: "Cerrar sesión", icon: "mdi-import", route: "/logout"},
    ],
    drawer: true,
    offset: true
  }),
  methods: {},
  computed: {}
}
</script>

<style scoped>
</style>