<template>
  <div class="dashboard-cards ma-3">
    <v-row wrap>
      <v-card
        class="info-card pa-1 ma-3"
        elevation="2"
        outlined
        color="orange lighten-4"
        v-for="card in cards"
        :key="card.title"
        ><v-card-title class="text-center">{{ card.title }}</v-card-title>
        <v-card-subtitle class="text-center">{{card.subtitle}}</v-card-subtitle>
        <v-card-text
          >{{card.text}}.</v-card-text
        >
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  data: () => ({
    cards: [
      { title: "Total reservas", subtitle: "2" },
      { title: "Total horas en estacionamiento", subtitle: "" },
    ],
  }),
};
</script>

<style>
</style>