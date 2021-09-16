<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark class="grey darken-3">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ mainTitle }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Bienvenido {{ usuario }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--  -->
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
export default {
  data: () => ({
    drawer: null,
    mainTitle: "Booking Parking",
    usuario: "UserPrueba",
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: '/' },
      { title: "Mis vehículos", icon: "mdi-car", route: '/mis-vehiculos' },
      { title: "Reservas", icon: "mdi-calendar-month", route: '/reservas' },
    ],
  }),
};
</script>