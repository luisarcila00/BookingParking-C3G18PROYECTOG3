<template>
  <div>
    <h2 class="titles mx-auto">Registrar nuevo usuario</h2>
    <div>
      <v-card class="ma-auto my-2 rounded-lg" max-width="800">
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              v-model="name"
              label="Nombre"
              name="name"
              prepend-icon="mdi-account"
              type="text"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              v-model="correo"
              label="correo"
              prepend-icon="mdi-email"
              type="mail"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              v-model="celular"
              label="No. celular"
              prepend-icon="mdi-cellphone-basic"
              type="mail"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              v-model="confirmpassword"
              label="Confirm Password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="inputRules"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn flat @click="register()" class="success mx-0 mt-3"
              >Registrarse</v-btn
            >
          </v-form>
        </v-card-text>
        <v-card-text class="d-flex justify-center align-center">
          ¿Ya estás registrado? &nbsp;<a href="/" color="secondary"
            >Inicia sesión</a>
        </v-card-text>
      </v-card>
    </div>
  </div>
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
        confirm_password: "",
      },
    };
  },
  methods: {
    async usersRegisters() {
      usersRegisters.createUser();
      this.$v.$touch();
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        })
        .then(() => {
          this.$router.push({ name: "App" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
* {
  font-family: "Roboto";
}
.titles {
  color: #fa6f41;
  text-align: center;
  font-size: 48px;
}
.subtitles {
  color: #1c1724;
  text-align: center;
  font-size: 32px;
}
</style>