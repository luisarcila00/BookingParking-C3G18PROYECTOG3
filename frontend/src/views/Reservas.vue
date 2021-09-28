<template>
  <v-container>
    <!--<FormularioReservas :items="items"/>-->
    <FormEdwin />
  </v-container>
</template>

<script>

//import FormularioReservas from "../components/FormularioReservas";

import FormEdwin from "../components/FormEdwin";
export default {
  components: {FormEdwin},
  //components: {FormularioReservas},
  data: () => (
      [{
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: [
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

  }]),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    submit() {
      this.$refs.observer.validate()

    },
    clear() {
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
    },

  }
}

</script>
<style lang="scss">
.fondo {
  background: url(../assets/02.jpg);
  margin: 1em;
}

.formulario {
  div {
    background-color: #d3cbcb;
  }
}
</style>