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
                <v-btn color="error" @click="eliminar()">Eliminar</v-btn>
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
                {text: 'code',  value:'zero'},
                {text: '1 a 15 minutos',  value:'one'},
                {text: '15 a 30 nimutos', value:'two'},
                {text: '30 a 45 minutos', value:'three'},
                {text:'45 a 60 minutos', value: 'four'},
                {text: '1 Hora', value:'five'},
                {text: '2 Horas', value: 'six'},
                {text: '3 Horas', value: 'seven'},
                {text:'3 a 8 Horas', value: 'eight'},
                {text: 'Hora adicional', value: 'nine'},
                {text: '1 Día', value: 'ten'},
                {text: '1 mes', value: 'eleven'}
            ],
            datos: []
        }

    },

    created(){
        tarifas.getAllTarifas()
        .then((response)=> {
            this.datos = response.data;
            this.item = this.datos.code;
            console.log(this.datos)
        })
    },

    methods: {
        editar(){
            console.log(`editar ${this.item}`);
            this.$router.push(`/asignarTarifas/${this.item}`);
        },
        eliminar(){
            console.log(`Eliminar ${this.item}`);
        }
    },

    

}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
h4 { 
    font-family: 'Varela Round', sans-serif;
}

</style>