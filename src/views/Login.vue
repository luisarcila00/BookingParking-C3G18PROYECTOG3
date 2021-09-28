<template>
  <v-app>
  
    <v-hover></v-hover>
    <v-content>
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
    </v-content>

    <template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
       

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

    </v-card>
  </v-footer>
</template>
  </v-app>
</template>
<script>
export default {
  data()
  {
    return{
      showPassword:false
    }
  }
}
</script>