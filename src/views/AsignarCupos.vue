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
                  <v-img  max-height="300"  :src="img" ></v-img> 

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

                  

                  <v-text-field  v-if="isHidden" label ="Cupos Reservados" :rules ="totalRules" v-model="reservadosCup" type="number" min="0" v-bind:max="maximum" v-on:keyup.enter="confirmarMostrarReserv()">
                    <v-icon slot="prepend" > mdi-calendar-remove</v-icon>  
                    </v-text-field>

                    <div class="botones" v-if="isHidden">
                    <v-spacer></v-spacer>
                      <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrarReserv()">
                        <v-icon left> mdi-check-bold</v-icon>
                        Confirmar
                       </v-btn>
                  </div>

                  <v-text-field  v-if="isHiddenCars" label ="Cupos Carro" :rules ="imgRules" v-model="carroCup" type="number" min="0" v-bind:max="maximumCars" v-on:keyup.enter="confirmarMostrarCar()">
                    <v-icon slot="prepend" > mdi-car </v-icon>
                  </v-text-field>

                  <div class="botones" v-if="isHiddenCars">
                    <v-spacer></v-spacer>
                      <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrarCar()" >
                        <v-icon left> mdi-check-bold</v-icon>
                        Confirmar
                       </v-btn>
                  </div>

                 

                  <v-text-field   v-if="isHiddenMot" label ="Cupos Moto" :rules ="imgRules" v-model="motoCup" type="number" min="0" v-bind:max="maximumMot" v-on:keyup.enter="confirmarMostrarMot()">
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


  </div>
</template>

<script>
export default {
  data: ()=>({

    totalCup:"", reservadosCup: "", carroCup: "", motoCup: "",
 
    isHidden: false,  isHiddenCars: false, isHiddenMot: false, isHiddenSafe: false,
    maximum:"", maximumCars:"", maximumMot:"",
    totalRules: [
                    value => !!value || 'Required.',
                    
      ]
      
    

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
    confirmarMostrarReserv() {
      if(this.reservadosCup != 0){
      this.maximumCars = this.totalCup - this.reservadosCup;
      this.isHiddenCars = !this.isHiddenCars;
      
        if(this.reservadosCup > this.maximum){
          alert("tiene " + this.maximum + " cupos disponibles");
          this.isHiddenCars = !this.isHiddenCars;
        }

      }else {
        alert("Ningún cupo reservado");
      }
      
    },
    confirmarMostrarCar() {
      if(this.carroCup != 0){
      
        this.maximumMot = ((this.totalCup - this.reservadosCup) - this.carroCup);// definitivamente el error está acá ¿¿NaN??
      
        if(this.carroCup > this.maximumCars){
          alert("tiene " + this.maximumCars + " cupos disponibles");
          
        }else{
          this.isHiddenMot = !this.isHiddenMot;
          this.isHiddenSafe = !this.isHiddenSafe;
          
        }
      }else {
        alert("no tiene ningún cupo disponible");
      }
      
    },

    confirmarMostrarMot() {
      
      
        
        if(this.motoCup > this.maximumMot){
          alert("tiene " + this.maximumMot + " cupos disponibles");
          

        }else if(this.maximumMot == 0) {
          alert("no tiene ningún cupo disponible");
          }
        
    },

    guardar(){
      //alert("Falta conectar la db")
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
}
</style>