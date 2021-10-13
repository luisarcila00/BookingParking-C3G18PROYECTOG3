<template>
  <v-card width="600" class="mx-auto mt-9 rounded-lg" >
    <v-card-title>Iniciar sesión</v-card-title>
    <v-card-text>
      <v-text-field
          label="Usuario"
          prepend-icon="mdi-account-circle"
          v-model="username"
      />
      <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Contraseña"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn elevation="2" class="rounded-lg" href="formulario" color="secondary">Registarse</v-btn>
      <v-btn elevation="2" class="rounded-lg" color="info" @click="loginPage()">Ingresar</v-btn>
    </v-card-actions>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="closeConfirmation()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
import {users} from '../controllers/Users.controller'

export default {
  data() {
    return {
      valid: true,
      password: '',
      username: '',
      showPassword: false,
      snackbar: false,
      snackbarText: ""
    }
  },
  methods: {
    loginPage() {
      // Tomar email y contraseña para verificar si es válido
      users.login({username: this.username, password: this.password}).then((response) => {
        console.log(response)
        this.$emit("update:username", response.data.username);
        sessionStorage.setItem('role', response.data.roles)
        this.$router.push('Dashboard')
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
        this.snackbarText = err.message;
        this.snackbar = true;
      });
    },
    closeConfirmation() {
      this.snackbar = false;
    }
  },
}
</script>