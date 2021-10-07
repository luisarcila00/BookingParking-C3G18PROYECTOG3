<template>
  <v-card width="600" class="mx-auto mt-9">
    <v-card-title>Iniciar sesión</v-card-title>
    <v-card-text>
      <v-text-field label="Usuario" v-model="email" prepend-icon="mdi-account-circle"/>
      <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn href="formulario" color="secondary">Registarse</v-btn>
      <v-btn @click="login(email,password)" color="secondary">Iniciar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {users} from "../controllers/Users.controller";

export default {
  data() {
    return {
      email: '',
      showPassword: false,
      password: ''
    }
  },
  methods: {
    login: (email, password) => {
      // Tomar email y contraseña para verificar si es válido
      console.log(email, password)
      users.login(email, password)
          .then((response) => {
            debugger;
            console.log(response)
            sessionStorage.setItem("username", this.username);
            if (this.username == "cdiaz@example.com") {
              sessionStorage.setItem("role", "admin");
            } else {
              sessionStorage.setItem("role", "user");
            }
            this.$emit("login-success", this.username);
            window.location.reload();
          })
          .catch((err) => console.error(err));
    },
  },
}
</script>