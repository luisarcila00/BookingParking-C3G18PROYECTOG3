<template>

<div class="container">
  <h3>FORMULARIO DE    RESERVAS</h3>
  <div class="row">

    <div class="col m12 card-panel">
      <validation-observer
        ref="observer"
        v-slot="{ invalid }"
  >
        <form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            name="Nombre y Apellido"
            rules="required|max:30"

      >   <div class="col m6"> 
            <v-text-field
            v-model="name"
            :error-messages="errors"
            label="Nombre y Apellido"
            required
        >   </v-text-field>
          </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Numero de Celular"
            :rules="{
            required: true,
            digits: 10,
            regex: ''
            }"
      >   <div class="col m4">
            <v-text-field
            v-model="phoneNumber"
            :error-messages="errors"
            label="Celular"
            required
        >   </v-text-field>
          </div>
          </validation-provider>
      
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
      >   <div class="col m6">
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
        > </v-text-field>
          </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Tipo de Reserva"
            rules="required"
      >   <div class="col m6">
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Tipo de Reserva"
            data-vv-name="select"
            required
        > </v-select>
          </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Tipo de Vehiculo"
            rules="required"
      >   <div class="col m6">
            <v-select
              v-model="select"
              :items="items1"
              :error-messages="errors"
              label="Tipo de Vehiculo"
              data-vv-name="select"
              required
        >   </v-select>
          </div>
          </validation-provider>
      
          <validation-provider
            v-slot="{ errors }"
            name="Marca del Vehiculo"
            rules="required|max:30"

      >   <div class="col m6"> 
            <v-text-field
            v-model="marca"
            :error-messages="errors"
            label="Marca del Vehiculo"
            required
        >   </v-text-field>
          </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Color del Vehiculo"
            rules="required|max:30"

      >   <div class="col m6"> 
            <v-text-field
            v-model="color"
            :error-messages="errors"
            label="Color del Vehiculo"
            required
        >   </v-text-field>
          </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Placa del Vehiculo"
            rules="required|max:30"

      >   <div class="col m6"> 
            <v-text-field
            v-model="placa"
            :error-messages="errors"
            label="Placa del Vehiculo"
            required
        >   </v-text-field>
          </div>

          </validation-provider>

            <validation-provider
           v-slot="{ errors }"
           name="Fecha de ingreso"
            rules="required"
            >
            <div class="col m6">       
            <v-text-field
            v-model="fecha"
            :error-messages="errors"
            label="Fecha de ingreso"
            value=""
            type="date"
        >   </v-text-field>
          </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Hora de ingreso"
            rules="required"
            >
            <div class="col m6">       
            <v-text-field
            v-model="hora"
            :error-messages="errors"
            label="Hora de ingreso"
            value=""
            type="time"
        >   </v-text-field>
          </div>
          </validation-provider>

        


          <div class="col m6">
          <v-btn href="/" color="secondary"  :disabled="invalid">Enviar</v-btn>                       
           
            <v-btn @click="clear">
            Borrar
            </v-btn>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</div>

</template>

<script>
  import { required, digits, email, max, regex, } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'


  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} necesita ser {length} digitos. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} No puede estar vacío',
  })

  extend('max', {
    ...max,
    message: '{_field_} puede no ser mayor que {length} caracteres',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} No coincide {regex}',
  })

  extend('email', {
    ...email,
    message: 'El email debe ser válido',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      items: [
        'Fracción',
        'Hora',
        'Dia',
        'Mensual',
      ],
       items1: [
        'Moto',
        'Carro',
        'Bicicleta',
      ],
      marca: '',
      color: '',
      placa: '',
      fecha: '',
      hora: '',
      checkbox: null,
      
    }),
      watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
        },
    methods: {
        submit () {
        this.$refs.observer.validate()  
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.marca = ''
        this.color = ''
        this.placa = ''
        this.menu = ''
        this.fecha = ''
        this.hora = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      }
    }  
  }

</script>
