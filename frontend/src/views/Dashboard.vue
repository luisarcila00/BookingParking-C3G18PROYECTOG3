<template>
  <div class="dashboard">
    <v-subheader class="d-flex justify-space-between ma-3 pa-3">
      <h3>Dashboard</h3>
    </v-subheader>
    <div class="user-data">
      <dashboard-cards-admin></dashboard-cards-admin>
    </div>
  </div>
</template>

<script>
import DashboardCardsAdmin from "../components/DashboardCardsAdmin.vue";
export default {
  components: { DashboardCardsAdmin },
  name: "Dashboard",
};
</script>

<style>
</style>