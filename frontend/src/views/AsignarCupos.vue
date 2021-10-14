<template>
  <div class="cupos">


      <v-row align="center" justify="center" >
        <v-col cols="12">

          <v-hover v-slot="{ hover }"  >
            <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="auto" max-width="350" >
              <v-card-text class="my-4 text-center text-h6">
              Asignar Cupos
              </v-card-text>

            
              <v-row align="center" justify="center" >
                <v-col cols="10">

                  <v-text-field label="Code" v-model="code"></v-text-field>


                  <v-text-field   label ="Total de Cupos" :rules ="totalRules" v-model="totalCup" type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                    <v-icon slot="prepend" > mdi-traffic-cone </v-icon>
                  </v-text-field>

                  <div class="botones">
                    <v-spacer></v-spacer>
                      <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrar()" >
                        <v-icon left> mdi-check-bold</v-icon>
                        Confirmar
                       </v-btn>
                  </div>



                  <v-text-field  v-if="isHidden" label ="Cupos Reservados" :rules ="totalRules" v-model="reservadosCup" type="number" min="0" v-bind:max="maximum" v-on:keyup.enter="confirmarMostrarReservas()">
                    <v-icon slot="prepend" > mdi-calendar-remove</v-icon>  
                    </v-text-field>

                    <div class="botones" v-if="isHidden">
                    <v-spacer></v-spacer>
                      <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrarReservas()">
                        <v-icon left> mdi-check-bold</v-icon>
                        Confirmar
                       </v-btn>
                  </div>

                  <v-text-field  v-if="isHiddenCars" label ="Cupos Carro" :rules ="totalRules" v-model="carroCup" type="number" min="0" v-bind:max="maximumCars" v-on:keyup.enter="confirmarMostrarCar()">
                    <v-icon slot="prepend" > mdi-car </v-icon>
                  </v-text-field>

                  <div class="botones" v-if="isHiddenCars">
                    <v-spacer></v-spacer>
                      <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrarCar()" >
                        <v-icon left> mdi-check-bold</v-icon>
                        Confirmar
                       </v-btn>
                  </div>



                  <v-text-field   v-if="isHiddenMot" label ="Cupos Moto" :rules ="totalRules" v-model="motoCup" type="number" min="0" v-bind:max="maximumMot" v-on:keyup.enter="confirmarMostrarMot()">
                    <v-icon slot="prepend" > mdi-moped </v-icon>
                  </v-text-field>



                  <div class="safe" v-if="isHiddenSafe">
                      <v-btn @click="guardar(); confirmarMostrarMot()"   color="primary" >
                        <v-icon left > mdi-content-save </v-icon>
                        Guardar
                      </v-btn>
                  </div>

                </v-col> 
              </v-row>  
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="closeConfirmation()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>


  </div>
</template>

<script>
import { createCupo } from "../controllers/Cupos.controller"
export default {
  data: ()=>({

    code:"",

    totalCup:"", reservadosCup: "", carroCup: "", motoCup: "",

    isHidden: false,  isHiddenCars: false, isHiddenMot: false, isHiddenSafe: false,
    maximum:"", maximumCars:"", maximumMot:"",
    totalRules: [
                    value => !!value || 'Required.',

      ],
    snackbar: false,
    snackbarText: ""



    

  }),
  methods: {
    confirmarMostrar() {
      if(this.totalCup != 0){
      this.maximum = this.totalCup;
      this.isHidden = !this.isHidden;
      }else {
        alert("no tiene ningún cupo disponible");
      }
      
    },
    confirmarMostrarReservas() {
      
      
      
        if(parseInt(this.reservadosCup)> parseInt(this.maximum)){
          alert("tiene " + this.maximum + " cupos disponibles ");
         
          
        }else{
            this.maximumCars = this.totalCup - this.reservadosCup;
            this.isHiddenCars = !this.isHiddenCars;
        }

      if (this.reservadosCup == 0) {
        alert("Ningún cupo reservado");
      }
      
    },
    confirmarMostrarCar() {
      if(this.carroCup != 0){
      
        
        if(parseInt(this.carroCup) > parseInt(this.maximumCars)){
          alert("tiene " + this.maximumCars + " cupos disponibles");
        
          
        }else{
          this.maximumMot = ((this.totalCup - this.reservadosCup) - this.carroCup);
          this.isHiddenMot = !this.isHiddenMot;
          this.isHiddenSafe = !this.isHiddenSafe;
          
        }
      }else {
        alert("no tiene ningún cupo disponible");
      }
      
    },

    confirmarMostrarMot() {
      
      
        
        if(parseInt(this.motoCup) > parseInt(this.maximumMot)){
          alert("tiene " + this.maximumMot + " cupos disponibles");
          

        }else if(this.maximumMot == 0) {
          alert("no tiene ningún cupo disponible");
          }
        
    },

    guardar(){
      console.log("guardar en db");
      const cupo = {
        code: this.code,
        totalCup: this.totalCup,
        reservadosCup: this.reservadosCup,
        carroCup: this.carroCup,
        motoCup: this.motoCup
      };
      createCupo(cupo)
      .then(() => {
          this.snackbarText="Guardado correctamente";
          this.snackbar= true;
    
      })
      .catch((err) => console.error(err));

    },

    closeConfirmation(){
        this.snackbar= false;
        this.$router.push("/config")
        
    }
  }

}
</script>

<style scope>
.cupos{
  margin-top: 5%;
  
  
}

.safe{
  float:inherit;
  margin-bottom: 5%;
}

.botones{
  margin-bottom: 5%;
}
</style>

