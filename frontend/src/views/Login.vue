<template>
  <v-card width="600" class="mx-auto mt-9">
    <v-card-title>Iniciar sesión</v-card-title>
    <v-card-text>
      <v-text-field label="Usuario" prepend-icon="mdi-account-circle"/>
      <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn href="formulario" color="secondary">Registarse</v-btn>
      <v-btn href="/" color="secondary">Iniciar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false
    }
  }
}
</script>