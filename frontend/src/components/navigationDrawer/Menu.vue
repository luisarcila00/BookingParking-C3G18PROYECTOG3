<template>
  <div>
    <v-list dense nav>
      <div v-for="item in items" :key="item.title">
        <v-list-item link :to="item.route" v-if="item.show">
          <v-list-item-icon>
            <v-icon class="menu-icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: "Booking Parking",
    },
    username: {
      type: String,
      default: "Invitado",
    },
  },
  data: () => {
    return {
      items: [
        { title: "Inicio", icon: "mdi-home", route: "/", show: true },
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/Dashboard",
          show: true,
        },
        {
          title: "Registrar usuario",
          icon: "mdi-account",
          route: "/CrearUsuario",
          show: true,
        },
        {
          title: "Registrar ingreso/salida",
          icon: "mdi-car",
          route: "/vehiculos",
          show: true,
        },
        {
          title: "Mis reservas",
          icon: "mdi-car",
          route: "/bookings",
          show: false,
        },
        {
          title: "Realizar reserva",
          icon: "mdi-calendar-month",
          route: "/reservas",
          show: true,
        },
        {
          title: "Configuración",
          icon: "mdi-cogs",
          route: "/config",
          show: true,
        }
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
.menu-icon {
  align-items: stretch;
}
</style>