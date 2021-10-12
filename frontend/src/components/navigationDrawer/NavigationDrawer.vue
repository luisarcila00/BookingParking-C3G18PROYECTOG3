<template>
  <v-navigation-drawer v-model="drawer" app dark src="../../assets/bg3.jpg">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-img contain src="../../assets/logo_Booking_Parking_2.png" max-height="50" max-width="100"></v-img>
        </v-list-item-title>
        <div class="text-center my-2">
          <v-avatar class="" color="grey darken-1" size="64">
            <v-img
                aspect-ratio="30"
                src="https://randomuser.me/api/portraits/men/73.jpg"
            >
            </v-img>
          </v-avatar>
          <v-list-item-subtitle > Bienvenido {{ username }}</v-list-item-subtitle>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <Menu/>
  </v-navigation-drawer>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "NavigationDrawer",
  components: {
    Menu,
  },
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
}
</script>

<style scoped>

</style>