<template>
  <div class="home">
    <v-row>
      <v-col lg="6" cols="12">
        <div class="container">
          <h1 class="titles">¡Bienvenido a Booking parking!</h1>
          <h2 class="subtitles">
            ¡Administrar y gestionar tu parqueadero nunca fue más fácil!
          </h2>
          <h2 class="subtitles">
            - Realiza reservas, edita y cancela.<br />
            - Gestiona el ingreso de y salida de vehículos.<br />
            - Paga en línea tu mensualidad, día o fracción.
          </h2>
        </div>
      </v-col>
      <v-col lg="6" cols="12">
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
* {
  font-family: "Roboto";
}
.titles {
  color: #fa6f41;
  text-align: center;
  font-size: 48px;
}
.subtitles {
  color: #1c1724;
  text-align: center;
  font-size: 32px;
}
</style>