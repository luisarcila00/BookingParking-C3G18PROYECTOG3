<template>
  <div>
    <div>
      <v-row wrap>
        <v-col class="px-2 ma1 text-left">
          <h1 class="pa-3 ma-3">Dahsboard</h1>
        </v-col>
      </v-row>
    </div>
    <div class="dashboard-cards ma-3">
      <v-row wrap>
        <v-card
          class="info-card  pa-1 ma-3"
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
                  class="pa-1 ma-1 blue rounded-circle d-inline-block"
                >
                  <v-card-subtitle class="text-center white--text font-weight-bold">{{
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
      { title: "Total vehículos registrados", subtitle: "03"},
      { title: "Reservas canceladas", subtitle: "00"},
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