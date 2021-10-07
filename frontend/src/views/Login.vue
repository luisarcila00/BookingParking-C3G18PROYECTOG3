<template>
  <v-card width="600" class="mx-auto mt-9">
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
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn href="formulario" color="secondary">Registarse</v-btn>
      <v-btn color="info" @click="loginPage({username:username,password:password})">Ingresar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {users} from '../controllers/users.controller'

export default {
  data() {
    return {
      valid: true,
      password: '',
      username: '',
      showPassword: false
    }
  },
  methods: {
    loginPage: (datos) => {
      // Tomar email y contraseña para verificar si es válido
      users.login(datos).then((response) => {
        console.log(response)
        this.$emit("update:username", response.data.username);
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
      });
    }
  },
}
</script>