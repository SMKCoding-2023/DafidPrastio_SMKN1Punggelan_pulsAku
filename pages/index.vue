<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold text-center mt-10" style="color: rgba(35, 208, 251, 0.645);">WELCOME</h1>
    <p class="text-3xl text-center mt-4" style="font-family:helvetica;">Nikmati Kecepatan Transaksi di Platform Kami</p>
    <img src="/img/background.png" alt="Gambar Mu" class="mx-auto mb-4 md:mb-8 max-w-full md:max-w-md"> 
    <div class="flex justify-center mt-8">
      <router-link to="/product" class="flex justify-center mt-8">
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">Mulai Belanja</a>
    </router-link>

    </div>
    

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.text {
  text-align: center;
}

a {
  text-decoration: none;
  margin-bottom: 10px;
}

a:hover {
  transform: translateY(-2px);
}

.color-blue-500 {
  color: blue;
}

/* Style untuk header, konten, dan footer */
.header, .footer {
  height: 10vh; /* Menggunakan 10% tinggi viewport */
  background-color: #f0f0f0; /* Warna latar belakang header dan footer */
  padding: 20px; /* Padding untuk header dan footer */
}

.content {
  height: 80vh; /* Menggunakan 80% tinggi viewport */
  /* Style untuk konten */
}

p{
  padding-bottom:20%;
  font-size: px;
  background: -webkit-linear-gradient(rgb(51, 131, 229), rgb(222, 41, 235));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

img {
  display: block;
  margin: 0 auto 1rem; /* Adjust nilai margin bottom di sini */
  max-width: 100%;
  height: auto;
  border-radius :0;
}
</style>
