<template>
  <div id="cupos">
      
      <v-container>
          <v-row>
              <v-col v-for="cupo in cupos" :key="cupo.code" md="4" sm="6" cols="12">
                  <CuposCard :item ="cupo"></CuposCard>
                  <v-spacer></v-spacer>
              </v-col>
              <v-col md="8" sm="12" cols="12">
                  <TarifasCard ></TarifasCard>
                  
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import TarifasCard from '../components/TarifasCard.vue';
import CuposCard from '../components/CuposCard.vue';
import { getAllCupos } from '../controllers/Cupos.controller';
export default {
    components:{
      CuposCard, 
      TarifasCard 
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