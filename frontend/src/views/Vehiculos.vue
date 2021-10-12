<template>
  <v-card width="600" class="mx-auto mt-9">
    <v-card-title>Registrar Ingreso/Salida</v-card-title>
    <v-card-text>
      <v-text-field
          label="Placa"
          prepend-icon="mdi-minus"
          v-model="placa"
      />
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" @click="registrar()">Registrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {vehicles} from "../controllers/Registros.controller";

export default {
  name: "vehiculos",
  data() {
    return {
      placa: '',
    }
  },
  methods: {
    registrar() {
      // Tomar email y contraseña para verificar si es válido
      vehicles.registerVehicle({placa: this.placa}).then(() => {
        debugger
        window.location.reload();
      }).catch((err) => {
        debugger
        console.log(err.message)
        sessionStorage.clear()
        this.$router.push('inicio')
        window.location.reload();
      });
    }
  },
}
</script>

<style scoped>

</style>