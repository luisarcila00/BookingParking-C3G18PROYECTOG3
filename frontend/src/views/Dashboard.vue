<template>
  <div class="dashboard">
    <v-subheader class="d-flex justify-space-between ma-2 pa-2">
      <h3>Dashboard</h3>
    </v-subheader>
    <div class="user-data">
      <admin-dashboard-cards></admin-dashboard-cards>
    </div>
  </div>
</template>

<script>
import adminDashboardCards from "../components/adminDashboardCards.vue";
export default {
  components: { adminDashboardCards },
  name: "Dashboard",
};
</script>

<style>
</style>