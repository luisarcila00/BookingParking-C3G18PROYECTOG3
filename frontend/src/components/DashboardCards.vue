<template>
  <div>
    <div>
      <v-row wrap>
        <v-col class="pa-2 ma1 blue--text text-left">
          <h1 class="">Dahsboard</h1>
        </v-col>
      </v-row>
    </div>
    <div class="dashboard-cards ma-3">
      <v-row wrap>
        <v-card
          class="info-card ma-3"
          elevation="2"
          outlined
          color="grey lighten-4"
          v-for="card in cards"
          :key="card.title"
          ><v-card-title class="text-center">{{ card.title }}</v-card-title>

          <div>
            <v-row>
              <v-col class="text-center">
                <div
                  id="datos-dashboard"
                  class="pa-2 ma-2 blue rounded-circle d-inline-block"
                >
                  <v-card-subtitle class="text-center pa-3 white--text font-weight-bold">{{
                    card.subtitle
                  }}</v-card-subtitle>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  data: () => ({
    cards: [
      { title: "Total reservas", subtitle: "02" },
      { title: "Horas en estacionamiento", subtitle: "27" },
      { title: "Total vehículos registrados", subtitle: "03", text: "motos" },
    ],
  }),
};
</script>

<style>
#v-card {
  margin-left: auto;
  margin-right: auto;
  color: aqua;
}
</style>