<template>
  <nav>
    <div class="menu">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ mainTitle }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Bienvenido {{ username }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" class="grey lighten-2">
            <img class="text-lg-center" src="../assets/logobp.jpeg"/>
          </v-avatar>
          <p class="white--text subheading mt-1">Booking Parking</p>
        </v-flex>
      </v-layout>
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
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: ["mainTitle", "username"],
  data: () => {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { title: "Mis vehículos", icon: "mdi-car", route: "/mis-vehiculos" },
        { title: "Reservas", icon: "mdi-calendar-month", route: "/reservas" },
      ],
    };
  },
};
</script>
