<template>
    <div v-if="show" class="alert">
      <p>{{ message }}</p>
      <nuxt-link to="/product" class="close-button">Tutup</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        show: true
      };
    },
    methods: {
      hideAlert() {
        this.show = false;
      }
    }
  };
  </script>
  
  <style scoped>
.alert {
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #ddd;
  border-color: #a2f8b6; /* Warna latar belakang hijau */
  color: #000; /* Warna teks hijau gelap */
  margin-top:5%;
  background-color: #8afaa4;

}

.alert p {
color: #070908;
}

.success {
  background-color: #96ebaa; /* Warna latar belakang hijau */
  color: #fcfffd; /* Warna teks hijau gelap */
}

button {
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
  background-color: #007bff; /* Warna latar belakang hijau */
  border-radius: 15px;
  color:#fff;
  
}
.close-button {
  background-color: rgb(248, 108, 98);
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  margin-top:2%;
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.close-button:hover {
  background-color: darkblue;
}

</style>
