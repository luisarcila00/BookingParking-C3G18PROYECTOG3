<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          CUPOS
        </div>
        
        <v-list-item-subtitle>Administra los cupos de tu parqueadero</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="orange"
        
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text :to="'/asignarCupos'" >
        Comenzar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>