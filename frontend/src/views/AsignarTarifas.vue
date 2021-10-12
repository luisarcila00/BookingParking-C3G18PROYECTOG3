        <template>
  <div class ="tarifas">
      <v-row>
          <v-col >
              <v-hover v-slot="{ hover }"  >
                <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="auto" width="90%"  > 
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            <v-card class="orange accent-4" dark> 
                                <v-card-text class="my-4 text-center text-h4" >
                                    Asignar Tarifas
                                </v-card-text>
                            </v-card>
                            <v-container class="grey lighten-5">
                                <v-row >
                        
                                    
                                    <v-col cols="12" sm="4">

                                        <v-card-text class="text-h5 text-center font-weight"> 
                                        Tarifas por fracción y/o minutos
                                        </v-card-text>

                                        <v-text-field   label ="code" :rules ="tarifasRules" v-model="code" type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Un (1) minuto a quince (15) minutos" :rules ="tarifasRules" v-model="unoAQuince" type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Quince (15) a treinta (30) minutos" :rules ="tarifasRules" v-model="quinceATreinta" type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Treinta (30) a cuarenta y cinco (45) minutos" :rules ="tarifasRules" v-model="treintaACuarentaycinco"  type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Cuarenta y cinco (45) a sesenta (60) minutos" :rules ="tarifasRules" v-model="cuarentaycincoASesenta"  type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>
                                    </v-col>
                                    <v-col cols="12" sm="4">
                                        <v-card-text class="text-h5 text-center font-weight">
                                            Valor por Hora
                                        </v-card-text>

                                        <v-text-field   label ="Una (1) Hora" :rules ="tarifasRules" v-model="hora" type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Dos (2) Horas" :rules ="tarifasRules" v-model="dosHoras"  type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Tres (3) Horas" :rules ="tarifasRules" v-model="tresHoras"  type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>

                                        <v-text-field   label ="Tres (3) Horas a Ocho (8) Horas" :rules ="tarifasRules" v-model="tresAOcho"  type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>
                                        
                                        <v-text-field   label ="Por cada Hora adicional el valor es de" :rules ="tarifasRules" v-model="adicional"  type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>
                                    </v-col>
                                    <v-col cols="12" sm="4">
                                        <v-card-text class="text-h5 text-center font-weight">
                                            Valor por Día
                                        </v-card-text>

                                        <v-text-field   label ="Un (1) Día" :rules ="tarifasRules" v-model="dia" type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>
                                   
                                    
                                        <v-card-text class="text-h5 text-center font-weight">
                                            Valor Mensual
                                        </v-card-text>

                                        <v-text-field   label ="Un (1) Mes" :rules ="tarifasRules" v-model="mes" type="number" min="0" >
                                        </v-text-field>
                                        <v-spacer></v-spacer>
                                     </v-col>   
                                </v-row>

                                <div class="botones">
                            <v-spacer></v-spacer>
                            <v-btn    color="warning" dark v-on:click="guardarTarifas()" >
                                <v-icon left> mdi-check-bold</v-icon>
                                Confirmar
                            </v-btn>
                        </div>
                            </v-container>


                        
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
import {tarifas} from "../controllers/Tarifas.controller"
export default {
    data: () => ({
        snackbar: false,
        snackbarText: "",
        code: "",    
        unoAQuince:"", quinceATreinta:"", treintaACuarentaycinco:"", cuarentaycincoASesenta:"",
        hora:"", dosHoras:"", tresHoras:"", tresAOcho:"", adicional:"", dia:"", mes:"", 
        tarifasRules: [
                    value => !!value || 'Required.',
                    
      ]
    }), methods: {
        guardarTarifas(){
            console.log('tarifa guardada');
            const tarifa = {
                code: this.code,
                unoAQuince: this.unoAQuince,
                quinceATreinta: this.quinceATreinta,
                treintaACuarentaycinco: this.treintaACuarentaycinco,
                cuarentaycincoASesenta: this.cuarentaycincoASesenta,
                hora: this.hora,
                dosHoras: this.dosHoras,
                tresHoras: this.tresHoras,
                tresAOcho: this.tresAOcho,
                adicional: this.adicional,
                dia: this.dia,
                mes: this.mes
            };
            tarifas.createTarifa(tarifa).then(() => {
                
                this.snackbarText="Guardado correctamente";
                this.snackbar=true;
            }).catch((err) => console.error(err));
        },
        closeConfirmation(){
            this.snackbar= false;
        }

    }
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