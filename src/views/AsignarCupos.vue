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

                  <v-text-field   label ="Total de Cupos" :rules ="totalRules" v-model="totalCup" type="number" min="0">
                    <v-icon slot="prepend" > mdi-traffic-cone </v-icon>
                  </v-text-field>

                  <div class="botones">
                    <v-spacer></v-spacer>
                      <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrar()" >
                        <v-icon left> mdi-check-bold</v-icon>
                        Confirmar
                       </v-btn>
                   
                  </div>

                  <v-text-field  v-if="isHidden" label ="Cupos Reservados" :rules ="totalRules" v-model="reservadosCup" type="number" min="0" v-bind:max="maximun">
                    <v-icon slot="prepend" > mdi-calendar-remove</v-icon>  
                  </v-text-field>

                  <v-text-field   label ="Cupos Carro" :rules ="imgRules" v-model="carroCup" type="number" min="0">
                    <v-icon slot="prepend" > mdi-car </v-icon>
                  </v-text-field>

                  <v-text-field   label ="Cupos Moto" :rules ="imgRules" v-model="motoCup" type="number" min="0">
                    <v-icon slot="prepend" > mdi-moped </v-icon>
                  </v-text-field>

                  <div class="safe">
                      <v-btn    color="primary" >
                        <v-icon left @click="guardar()"> mdi-content-save </v-icon>
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
    totalMenosReservas:"", isHidden: false, maximun:"",
    totalRules: [
                    value => !!value || 'Required.',
                    
      ]
      
    

  }),
  methods: {
    confirmarMostrar() {
      if(this.totalCup != 0){
      this.maximun = this.totalCup;
      this.isHidden = !this.isHidden
      }else {
        alert("no tiene ningún cupo disponible");
      }
      
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