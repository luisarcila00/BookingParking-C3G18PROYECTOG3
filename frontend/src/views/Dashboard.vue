<template>
  <v-parallax aspect-ratio="2" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <dashboard-cards></dashboard-cards>
  </v-parallax>
</template>

<script>
import DashboardCards from "../components/DashboardCards.vue";
export default {
  components: { DashboardCards },
};
</script>

<style>

</style>