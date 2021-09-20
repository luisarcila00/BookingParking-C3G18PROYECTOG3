<template>
  <v-app-bar app dark class="brown darken-4">
    <v-app-bar-nav-icon @click="this.drawer = !this.drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ mainTitle }}</v-toolbar-title>
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
</template>

<script>

export default {
  name: "navbar",
  mainTitle: "Booking Parking",
  components:{

  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      {title: "Cerrar sesión", icon: "mdi-import", route: "/logout"},
    ],
    offset: true
  }),
  methods:{

  },
  computed: {

  }
}
</script>

<style scoped>

</style>