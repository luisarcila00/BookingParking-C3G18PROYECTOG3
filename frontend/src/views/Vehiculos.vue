<template>
  <v-card elevation="2" width="600" class="rounded-lg mx-auto mt-9">
    <v-card-title>Registrar Ingreso/Salida</v-card-title>
    <v-card-text>
      <v-text-field label="Placa" prepend-icon="mdi-minus" v-model="placa" />
      <v-select
        v-model="type"
        :items="['Carro', 'Moto']"
        label="Tipo de Vehiculo"
        data-vv-name="select"
        required
      ></v-select>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn elevation="2" class="rounded-lg" color="info" @click="registrar()"
        >Registrar</v-btn
      >
    </v-card-actions>
    <v-snackbar elevation="2" class="rounded-lg" v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="closeConfirmation()"
          elevation="2"
          class="rounded-lg"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import { vehicles } from "../controllers/Registros.controller";

export default {
  name: "vehiculos",
  data() {
    return {
      placa: "",
      type: "",
      snackbar: false,
      snackbarText: "",
    };
  },
  methods: {
    registrar() {
      // Tomar email y contraseña para verificar si es válido
      vehicles
        .registerVehicle({ placa: this.placa, type: this.type })
        .then(() => {
          debugger;
          this.snackbarText = "Registro guardado";
          this.snackbar = true;
          this.placa = "";
          //window.location.reload();
        })
        .catch((err) => {
          debugger;
          console.log(err.message);
          this.snackbarText =
            err.response.data && err.response.data.message
              ? err.response.data.message
              : err.message;
          this.snackbar = true;

          //window.location.reload();
        });
    },
    closeConfirmation() {
      this.snackbar = false;
      sessionStorage.clear();
      this.$router.push("/login");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
</style>