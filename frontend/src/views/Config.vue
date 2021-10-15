<template>
  <div id="cupos">
      
      <v-container>
          <v-row>
              
                <v-col v-for="cupo in cupos" :key="cupo.code" md="4" sm="6" cols="12" >
                    <CuposCard :item ="cupo" v-if="!isNew"></CuposCard>
                    <v-spacer></v-spacer>
                </v-col>
              
                <v-col md="12" sm="12" cols="12">
                    <TarifasCard v-if="!isNewT"></TarifasCard>
                    
                </v-col>
              
          </v-row>
           <v-row>
               <v-col v-if="isNew">
                    <AdminCupos></AdminCupos>
               </v-col>
               <v-col id ="adminTar" v-if="isNewT">
                    <AdminTarifas></AdminTarifas>
               </v-col>
           </v-row>    
      </v-container>
  </div>
</template>

<script>
import AdminTarifas from '../components/Config/AdminTarifas.vue';
import AdminCupos from '../components/Config/AdminCupos.vue';
import TarifasCard from '../components/TarifasCard.vue';
import CuposCard from '../components/CuposCard.vue';
import { getAllCupos } from '../controllers/Cupos.controller';
import {tarifas} from '../controllers/Tarifas.controller';
export default {
    components:{
      CuposCard, 
      TarifasCard,
      AdminCupos,
      AdminTarifas
    },
    data(){
        return{
            cupos: [],
            isNew: true,
            isNewT: true,
        }
    },
   created(){ this.initialize()
   },

   methods:{
       initialize() {
           getAllCupos()
            .then((response)=> {
                debugger
                this.cupos = response.data;
                this.isNew = !this.isNew;
            })
            .catch((err)=> {
                debugger
                console.error(err)
                });
       
    
        tarifas.getAllTarifas()
            .then((response)=> {
                this.cupos = response.data;
                this.isNewT = false;
            })
            .catch((err)=> {console.error(err)});
        }
    }

        
}
</script>

<style scope>
    #adminCup{
        margin-top: 5%;
    }
</style>