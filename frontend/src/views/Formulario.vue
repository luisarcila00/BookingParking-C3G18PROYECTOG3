<template>
  <v-container class="my-5">
    <v-card class="mx-auto" max-width="800">
      <v-card-title>
        <div class="text-center">
          <img class="img-thumbnail" alt="Center aligned image" src="../assets/logo_Booking_Parking.png"
               max-height="150" max-width="400"/>
        </div>
        <h2 class="mx-auto">Crear una nueva cuenta</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="name" label="Nombre" name="name" prepend-icon="mdi-account" type=text
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="correo" label="correo" prepend-icon="mdi-email" type=mail
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="celular" label="No. celular" prepend-icon="mdi-cellphone-basic" type=mail
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" type=password
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="confirmpassword" label="Confirm Password" prepend-icon="mdi-lock" type=password
                        :rules="inputRules"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn flat @click="register()" class="success mx-0 mt-3">Registrarse</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
import { usersRegisters } from "../controllers/UserRegister.controller";
export default {
  data() {
    return {
      resgistration: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  methods: {
    async usersRegisters() {
      usersRegisters.createUser()
      this.$v.$touch();
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password
        })
        .then(() => {
          this.$router.push({ name: "App" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  
  


};
</script>

<style>
</style>