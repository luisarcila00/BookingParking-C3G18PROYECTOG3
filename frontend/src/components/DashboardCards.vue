<template>
  <div>
    <div>
      <v-row>
        <v-col class="px-2 ma1 text-left">
          <h1 class="pa-3 ma-3 white-text">Dahsboard</h1>
        </v-col>
      </v-row>
    </div>
    <div class="dashboard-cards pa-1 ma-3">
      <v-row wrap>
        <v-card
          class="d-block pa-1 ma-3 sm-12"
          elevation="2"
          outlined
          color="grey lighten-4"
          v-for="card in cards"
          :key="card.cardTitle"
          v-show="card.admin"
          ><div>
            <v-card-cardTitle class="text-center pa-3 ma-3">{{
              card.cardTitle
            }}</v-card-cardTitle>
          </div>

          <div class="ma-3 pa-3">
            <v-row>
              <v-col class="text-center">
                <div
                  id="datos-dashboard"
                  class="pa-3 ma-3 blue rounded-circle d-inline-block"
                >
                  <v-card-cardValue
                    class="text-center white--text font-weight-bold"
                    >{{ card.cardValue }}</v-card-cardValue
                  >
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
    admin: true,
    cards: [
      {
        cardTitle: "Capacidad total de Vehículos",
        cardValue: "250",
        admin: true,
      },
      { cardTitle: "Usuarios registrados", cardValue: "109", admin: true },
      { cardTitle: "Vehículos registrados", cardValue: "03", admin: true },
      { cardTitle: "Reservas realizadas", cardValue: "02", admin: true },
      { cardTitle: "Reservas canceladas", cardValue: "00", admin: true },
      {
        cardTitle: "Total vehículos que han ingresado",
        cardValue: "1023918",
        admin: true,
      },
      { cardTitle: "Multas", cardValue: "00", admin: true },
      { cardTitle: "Horas en estacionamiento", cardValue: "27", admin: true },
    ],
  }),
};
</script>

<style>

</style>