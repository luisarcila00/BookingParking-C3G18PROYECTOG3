<template>
  <v-navigation-drawer v-model="this.drawer" app dark src="../assets/bg3.jpg">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-img contain src="../assets/logo_Booking_Parking_2.png" max-height="50" max-width="100"></v-img>
        </v-list-item-title>
        <v-list-item-subtitle> Bienvenido {{ this.username }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
        {title: "Inicio", icon: "mdi-home", route: "/"},
        {title: "Crear Usuarios", icon: 'mdi-account', route: "/CrearUsuario"},
        {title: "Mis vehículos", icon: "mdi-car", route: "/mis-vehiculos"},
        {title: "Mis reservas", icon: "mdi-car", route: "/bookings"},
        {title: "Reservas", icon: "mdi-calendar-month", route: "/reservas", show: this.hasRole('admin')},
      ],
    };
  },
  methods: {
    hasRole(role) {
      debugger
      return sessionStorage.getItem('role') === role
    }
  }
};
</script>
