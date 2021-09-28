<template>

  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.tipo }}</td>
      <td class="text-xs-right">{{ props.item.marca }}</td>
      <td class="text-xs-right">{{ props.item.color }}</td>
      <td class="text-xs-right">{{ props.item.placa }}</td>
      <td class="text-xs-right">{{ props.item.fecha }}</td>
      <td class="text-xs-right">{{ props.item.hora }}</td>
    </template>
    
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Tipo de Vehiculo', value: 'tipo' },
          { text: 'Marca', value: 'marca' },
          { text: 'Color', value: 'color' },
          { text: 'Placa', value: 'placa' },
          { text: 'Fecha de ingreso', value: 'fecha' },
          { text: 'Hora de ingreso', value: 'hora' }
        ],
        desserts: [
          {
            name: 'LUIS EDUARDO ARCILA',
            tipo: 'Carro',
            marca: 'RENAULT',
            color: 'GRIS',
            placa: 'MMI-268',
            fecha: '21-09-2021',
            hora: '10:00 am'
          },
          {
            name: 'ELKIN RAMIREZ',
            tipo: 'CARRO',
            marca: 'CHEVROLET',
            color: 'NEGRO',
            placa: 'PID-489',
            fecha: '22-09-2021',
            hora: '12:00 pm'
          },
          {
            name: 'SEBASTIAN MURILLO',
            tipo: 'CARRO',
            marca: 'TOYOTA',
            color: 'BLANCO',
            placa: 'JNH-595',
            fecha: '21-09-2021',
            hora: '8:00 am'
          },
          {
            name: 'FABIAN GOYENECHE',
            tipo: 'MOTO',
            marca: 'SUZUKI',
            color: 'NEGRO',
            placa: 'AWR-25C',
            fecha: '23-09-2021',
            hora: '10:00 am'
          },
          {
            name: 'PEPITO PEREZ',
            tipo: 'BICICLETA',
            marca: 'GW',
            color: 'NEGRA',
            placa: '149845',
            fecha: '21-09-2021',
            hora: '11:00 am'
          },
          {
            name: 'RAMIRO CANO',
            tipo: 'MOTO',
            marca: 'AKT',
            color: 'BLANCA',
            placa: 'PIR-25E',
            fecha: '25-09-2021',
            hora: '2:00 pm'
          },
          {
            name: 'CARLOS ZAPATA',
            tipo: 'MOTO',
            marca: 'HONDA',
            color: 'VERDE',
            placa: 'NHD-98B',
            fecha: '26-09-2021',
            hora: '8:00 am'
          },

        ]
      }
    }
  }
</script>
