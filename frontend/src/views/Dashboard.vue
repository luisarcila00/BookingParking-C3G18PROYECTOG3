<template>
  <div class="dashboard">
    <v-subheader class="d-flex justify-space-between ma-2 pa-2">
      <h3>Dashboard</h3>
    </v-subheader>
    <div class="user-data">
      <dashboard-cards></dashboard-cards>
    </div>
  </div>
</template>

<script>
import DashboardCards from "../components/DashboardCards.vue";
export default {
  components: { DashboardCards },
  name: "Dashboard",
};
</script>

<style>
</style>