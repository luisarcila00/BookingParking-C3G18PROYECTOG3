<template>
 <div id="content">
    <v-row>
        <v-col lg="12" cols="12">
            <h4>Tarifas Actuales</h4>
            <v-data-table
                :headers="headers"
                :items="datos"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
            <v-card-actions>
                <v-btn color="success" :to="'/asignarTarifas/'+this.item">Editar</v-btn>
                
            </v-card-actions>
     </v-col>
    </v-row>

    

</div> 
</template>

<script>
import { tarifas } from '../controllers/Tarifas.controller'
export default {
    
    data() {

        return{
            
            item:"",

            headers: [
                {text: 'code',  value:'code'},
                {text: '1 a 15 minutos',  value:'unoAQuince'},
                {text: '15 a 30 nimutos', value:'quinceATreinta'},
                {text: '30 a 45 minutos', value:'treintaACuarentaycinco'},
                {text:'45 a 60 minutos', value: 'cuarentaycincoASesenta'},
                {text: '1 Hora', value:'hora'},
                {text: '2 Horas', value: 'dosHoras'},
                {text: '3 Horas', value: 'tresHoras'},
                {text:'3 a 8 Horas', value: 'tresAOcho'},
                {text: 'Hora adicional', value: 'adicional'},
                {text: '1 Día', value: 'dia'},
                {text: '1 mes', value: 'mes'}
            ],
            datos: [],
        };

    },
    
    created() {
    this.initialize()    
    },


    methods: {
        editar(){
            console.log(`editar ${this.item}`);
            this.$router.push(`/asignarTarifas/${this.item}`);
        },

        initialize() {
            tarifas.getAllTarifas()
            .then((response)=>{
                debugger
                this.datos = response.data
            })
            .catch((err)=> {console.error(err)
            this.datos =[]
            });
        }
        
        
    }
        
    

    

};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
h4 { 
    font-family: 'Varela Round', sans-serif;
}

</style>