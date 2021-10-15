<template>
  <v-card>
     <v-card-title><b>Cupos Totales </b >{{item.totalCup}}</v-card-title>
     <v-spacer></v-spacer>
      <v-card-subtitle><b>Cupos Reservados</b> {{item.reservadosCup}}</v-card-subtitle>
      <v-card-subtitle><b>Cupos Carros</b> {{item.carroCup}}</v-card-subtitle>
      <v-card-subtitle><b>Cupos Motos</b> {{item.motoCup}}</v-card-subtitle>
      
       
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" :to="'/asignarCupos/'+item.code">Editar</v-btn>
        <v-btn color="error" @click="eliminar()">Eliminar</v-btn>
    </v-card-actions>
   </v-card>
</template>

<script>
export default {
    props:[
        "item"
    ],
    methods: {
        editar(){
            console.log(`editar ${this.item.code}`);
            this.$router.push(`/asignarCupos/${this.item.code}`);
        },
        eliminar(){
            console.log(`Eliminar ${this.item.code}`);
        }
    }

}
</script>

<style>

</style>