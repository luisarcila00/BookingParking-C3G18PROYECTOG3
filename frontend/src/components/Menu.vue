<template>
  <v-navigation-drawer v-model="this.drawer" app dark src="../assets/bg3.jpg">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-img contain src="../assets/logo_Booking_Parking_2.png" max-height="50" max-width="100"></v-img>
        </v-list-item-title>
          <v-divider></v-divider>
        <v-list-item-title class="text-center mt-2">Bienvenido</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <div class="text-center">
      <v-avatar class="" color="grey darken-1" size="64"></v-avatar>
      <v-list-item-subtitle>{{ this.username }}</v-list-item-subtitle>
    </div>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
  props: {
    mainTitle: {
      type: String,
      default: 'Booking Parking'
    },
    username: {
      type: String,
      default: 'Invitado'
    },
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      items: [
        { title: "Inicio", icon: "mdi-home", route: "/" },
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/Dashboard" },
        { title: "Crear Usuarios", icon: 'mdi-account', route: "/CrearUsuario" },
        { title: "Mis vehículos", icon: "mdi-car", route: "/mis-vehiculos" },
        { title: "Reservas", icon: "mdi-calendar-month", route: "/reservas" },
      ],
    };
  },
};
</script>
