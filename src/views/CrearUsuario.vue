<template>
<div class="container">
  <div class="row">
    <div class="col m12 card-panel">
<br>
      <form @submit.prevent="agregarUsuario">
          <div class="row">
            <div class="col m4">
              <label>Nombre</label>
              <input type="text" v-model="nombre">
            </div>
           
            <div class="col m4">
              <label>Apellido</label>
              <input type="text" v-model="apellido">
            </div>
            <div class="col m4">
            <label>Celular</label>
            <input type="text" v-model="celular">
            </div>
            <div class="col m4">
            <label>Correo</label>
            <input type="email" v-model="correo">
            </div>
            <div class="col m4">
            <label>Password</label>
            <input type="password" v-model="password">
            </div>
          </div>

          <div class="row">
            <div class="col m4">
            <label>Tipo de Usuario</label>
            <select v-model="users">
              <option value="">Seleccione</option>
              <option value="Administrador">Administrador</option>
              <option value="Cliente">Cliente</option>
            </select>
            </div>
          </div>  
        <div class="row">
          <button type="submit" class="btn grey darken-1">AGREGAR USUARIO <i class="material-icons right"></i></button>
        </div>
      </form> 
    </div>
  </div>

  <div class="row">
    <div class="col m12">
      <table class="table bordered striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Reserva</th>
            <th>Celular</th>
            <th>Correo</th>
            <th>password</th>
            <th>Tipo de Usuario</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="usuario in usuarios" v-bind:key="usuario">
              <td>{{usuario.nombre}}</td>
              <td>{{usuario.apellido}}</td>
              <td>{{usuario.reserva}}</td>
              <td>{{usuario.celular}}</td>
              <td>{{usuario.correo}}</td>
              <td>{{usuario.password}}</td>
              <td>{{usuario.users}}</td>
              <td><a href="CrearUsuario"><i class="material-icons">Eliminar</i></a></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  data(){
    return {
      nombre: '',
      apellido: '',
      reserva: '',
      celular: '',
      correo: '',
      password: '',
      users: '',
      usuarios: [],

      select_instances: []
    }
  },
  mounted()
  {
    var elems = document.querySelectorAll('select');
    this.select_instances = M.FormSelect.init(elems, null);
  },
  methods: {
    agregarUsuario()
    {
      var data = {
        nombre: this.nombre,
        apellido: this.apellido,
        reserva: this.reserva,
        celular: this.celular,
        correo: this.correo,
        password: this.password,
        users: this.users,
      };
      this.usuarios.push(data);
      this.nombre = '';
      this.apellido = '';
      this.reserva = '';
      this.celular = '';
      this.correo = '';
      this.password = '';
      this.users = '';
    },
    agregarPasatiempo()
    {
      var total = this.pasatiempos.length;
      var ultimo = 0;
      if(total > 0)
      {
        ultimo = this.pasatiempos[total - 1].id;
      }
      var data = {
        id: ultimo + 1,
        descripcion: this.pasatiempo
      };
      this.pasatiempos.push(data);
      this.pasatiempo = '';
    }
  }
}
</script>


<style>

</style>

