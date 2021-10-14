<template>
  <div class="dashboard-cards-admin">
    <v-row>
      <v-col lg="7" cols="12">
        <v-alert dense text type="success" class="mx-3">
          <strong>¡Ha iniciado sesión exitosamente!</strong>
        </v-alert>
        <v-row>
          <v-col lg="6" cols="12" v-for="stat in stats" :key="stat.title">
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div class="">
                  <strong>{{ stat.title }}</strong>
                </div>
                <v-avatar :color="stat.color">
                  <span class="white--text">{{ stat.amount }}</span>
                </v-avatar>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="5" cols="12">
        <v-card>
          <v-card-title class="subtitles">Actividad reciente</v-card-title>
          <v-timeline align-top dense>
            <v-timeline-item color="blue" small>
              <strong color="#1c1724">Hace 1 hora</strong>
              <div class="text-caption">ingreso de vehículo xyz-123</div>
            </v-timeline-item>

            <v-timeline-item color="red" small>
              <strong>Hace 2 minutos</strong>
              <div class="text-caption">Salida de vehículo xyz-123</div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12" cols="12">
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>

      </v-col>
    </v-row>

  </div>
</template>

<script>

export default {
  name: "DashboardCardsAdmin",
  data() {
    return {
      props: ["items1"],
      stats: [
        {
          title: "Capacidad total de vehículos",
          amount: "250",
          color: "purple",
        },
        {
          title: "Estacionamientos en uso",
          amount: "250",
          color: "deep-purple",
        },
        {
          title: "Estacionamientos disponibles",
          amount: "250",
          color: "indigo",
        },
        {title: "Usuarios registrados", amount: "109", color: "blue"},
        {title: "Vehículos registrados", amount: "03", color: "light-blue"},
        {title: "Reservas realizadas", amount: "02", color: "amber"},
        {title: "Reservas canceladas", amount: "00", color: "orange"},
        {title: "Multas", amount: "00", color: "red"},
        {
          title: "Total vehículos que han ingresado",
          amount: "1023918",
          color: "pink",
        },
        {title: "Horas en estacionamiento", amount: "27", color: "blue-grey"},
      ],

      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Tipo de Vehiculo', value: 'tipo'},
        {text: 'Marca', value: 'marca'},
        {text: 'Color', value: 'color'},
        {text: 'Placa', value: 'placa'},
        {text: 'Fecha de ingreso', value: 'fecha'},
        {text: 'Hora de ingreso', value: 'hora'}
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
    };
  },
  mounted:{
    getInfo() {

    }
  },
  methods: {

  }
};
</script>

<style>
</style>