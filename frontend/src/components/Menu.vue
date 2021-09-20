<template>
  <v-navigation-drawer :v-model="this.drawer" app dark class="brown darken-2">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ mainTitle }}
        </v-list-item-title>
        <v-list-item-subtitle> Bienvenido {{ username }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
        class="my-2"
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
  props: ["mainTitle", "username",'drawer'],
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
