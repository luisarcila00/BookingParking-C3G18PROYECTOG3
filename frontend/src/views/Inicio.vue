<template>
  <div class="home">
    <v-row>
      <v-col>
            <div class="container" >
              <h1 class="title">Bienvenido a booking parking</h1>
              <h2 class="subtitle">
                ¡Encuentra un lugar de estacionamiento cerca a ti! Regístrate
                para realizar reservas y acceder a otros beneficios de nuestra
                plataforma.
              </h2>
            </div>

      </v-col>
      <v-col>
        <login></login>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "./Login.vue";
export default {
  components: { Login },
};
</script>

<style>
.home {
  background: #B4C2B5;
}
*{
  font-family: "Roboto";
}
</style>