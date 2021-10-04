<template>
  <div class ="tarifas">
      <v-row align="center" justify="center">
          <v-col cols="12">
              <v-hover v-slot="{ hover }"  >
                <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="auto"  >
                    <v-card class="orange accent-4" dark> 
                        <v-card-text class="my-4 text-center text-h6" >
                            Asignar Tarifas
                        </v-card-text>
                    </v-card>
                    <v-row align="center" justify="center">
                        
                            <v-card-text class="text-h5 text-center font-weight"> 
                                Tarifas por fracción y/o minutos
                            </v-card-text>
                        <v-col cols= "10">
                            <v-text-field   label ="Un (1) minuto a quince (15) minutos" :rules ="totalRules" v-model="unoAQuince"          type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-text-field   label ="Quince (15) a treinta (30) minutos" :rules ="totalRules" v-model="quinceATreinta"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-text-field   label ="Treinta (30) a cuarenta y cinco (45) minutos" :rules ="totalRules" v-model="treintaACuarentaycinco"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-text-field   label ="Cuarenta y cinco (45) a sesenta (60) minutos" :rules ="totalRules" v-model="CuarentaycincoASesenta"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-card-text class="text-h5 text-center font-weight">
                                Valor por Hora
                            </v-card-text>

                            <v-text-field   label ="Una (1) Hora" :rules ="totalRules" v-model="hora" type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-text-field   label ="Dos (2) Horas" :rules ="totalRules" v-model="dosHoras"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-text-field   label ="Tres (3) Horas" :rules ="totalRules" v-model="tresHoras"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>

                            <v-text-field   label ="Tres (3) Horas a Ocho (8) Horas" :rules ="totalRules" v-model="tresAOcho"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>
                            
                            <v-text-field   label ="Por cada Hora adicional el valor es de" :rules ="totalRules" v-model="adicional"  type="number" min="0" v-on:keyup.enter="confirmarMostrar()">
                            </v-text-field>
                            <v-spacer></v-spacer>


                        <div class="botones">
                            <v-spacer></v-spacer>
                            <v-btn  x-small color="secondary" dark v-on:click="confirmarMostrar()" >
                                <v-icon left> mdi-check-bold</v-icon>
                                Confirmar
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

}
</script>

<style scope>
.tarifas{
  margin-top: 5%;  
}
.botones{
  margin-bottom: 5%;
}

</style>