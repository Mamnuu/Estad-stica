<template>
    <v-container class="container-p">
      <br />
      <v-card
        class="mx-auto pa-4 pb-2"
        elevation="20"
        max-width="448"
        rounded="lg"
      >
        <v-card-title style="text-align: center">Intervalo de confianza para la proporción</v-card-title>
        <div class="text-subtitle-1 text-medium-emphasis">
          Valor de la proporción
        </div>
  
        <v-text-field
          v-model="proporcion"
          density="compact"
          placeholder="Valor de la proporción"
          prepend-inner-icon="mdi-chart-arc"
          variant="underlined"
          :rules="[Rules, numeroRules].flat()"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">
          Tamaño de la muestra
        </div>
  
        <v-text-field
          v-model="muestra"
          density="compact"
          placeholder="Tamaño de la muestra"
          prepend-inner-icon="mdi-abacus"
          variant="underlined"
          :rules="[Rules, numeroRules].flat()"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis">Confianza</div>
        <v-select
          v-model="confianza"
          density="compact"
          placeholder="Porcentaje de confianza"
          prepend-inner-icon="mdi-percent"
          :items="items2"
          variant="underlined"
        ></v-select>
  
        <v-btn
          block
          class="mb-6"
          style="color: azure; variant: outline; background-color: #765d39"
          color="#765D39"
          size="large"
          @click="calcular"
        >
          Calcular
        </v-btn>
      </v-card>
    </v-container>
  </template>
  <script>
  import Swal from "sweetalert2";
  const errorMessage = ref("");
  export default {
    data: () => {
      return {
        Rules: [(v) => !!v || "El campo es obligatorio"],
        numeroRules: [
          (v) => /^[0-9]+|[()\.]+/.test(v) || "Solo se permiten números",
        ],
        proporcion: "",
        muestra: "",
        confianza: "Seleccionar",
        items2: ["90%", "95%", "99%"],
      };
    },
    methods: {
      async calcular() {
  
        // Validación campos vacíos
        if (
          this.muestra == "" ||
          this.proporcion == "" ||
          this.confianza == "Seleccionar" 
        ) {
          errorMessage.value = "Por favor, ingresa todos los campos.";
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage.value,
          });
          return;
        }
  
        // Validación de solo números
        if (!/^[0-9]+|[()\.]+/.test(this.proporcion)) {
          errorMessage.value = "Solo se permiten números";
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage.value,
          });
          return;
        }
        if (!/^[0-9]+|[()\.]+/.test(this.muestra)) {
          errorMessage.value = "Solo se permiten números";
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage.value,
          });
          return;
        }
        if (!/^[0-9]+|[()\.]+/.test(this.desviacion)) {
          errorMessage.value = "Solo se permiten números";
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage.value,
          });
          return;
        }
        else {
        }
      },
    },
  };
  </script>
  <style>
  .titulo {
    font-family: sans-serif !important;
    font-weight: bold !important;
    text-align: center !important;
    font-size: 25px !important;
    margin-left: 10px !important;
    margin-top: 10px !important;
  }
  </style>