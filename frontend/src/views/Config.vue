<template>
  <div id="cupos">
      <h1>Cupos</h1>
      <v-btn color ="warning" to="/asignarCupos">Registrar Cupos</v-btn>
      <v-container>
          <v-row>
              <v-col v-for="cupo in cupos" :key="cupo.code" md="4" sm="6" cols="12">
                  <CuposCard :item ="cupo"></CuposCard>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import CuposCard from '../components/CuposCard.vue';
import { getAllCupos } from '../controllers/Cupos.controller';
export default {
    components:{
      CuposCard,  
    },
    data(){
        return{
            cupos: [],
        }
    },
    mounted(){
        getAllCupos()
        .then((response)=> {
            this.cupos = response.data;
        })
        .catch((err)=> console.error(err));
    },
}
</script>

<style>

</style>