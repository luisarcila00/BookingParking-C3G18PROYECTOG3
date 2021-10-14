<template>
  <v-row>
    <v-col lg="12" cols="12">
      <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-2 rounded-lg"
      ></v-data-table>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Tipo de Vehiculo', value: 'tipo'},
        {text: 'Marca', value: 'marca'},
        {text: 'Color', value: 'color'},
        {text: 'Placa', value: 'placa'},
        {text: 'Fecha de ingreso', value: 'fecha'},
        {text: 'Hora de ingreso', value: 'hora'}
      ],
    }

  }

}
</script>

<style scoped>

</style>