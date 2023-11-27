<template>
  <header class="w-full border-b border-slate-200 py-6" style="background-color: #3490dc;">
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <!-- Logo -->
        <img src="/img/logo.avif" alt="Logo" class="w-12 h-12 rounded-full mr-4 ml-4">

        <!-- Judul atau nama situs -->
        <NuxtLink to="/" class="text-xl font-bold">
          PULS<span class="text-blue-500">A</span>KU
        </NuxtLink>
      </div>

      <!-- Navigasi -->
      <nav class="flex items-center gap-6">
        <NuxtLink to="/" class="text-base hover:text-blue-500">Home</NuxtLink>
        <NuxtLink to="/product" class="text-base hover:text-blue-500">Products</NuxtLink>
        <NuxtLink to="/contact" class="text-base hover:text-blue-500">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style>
/* Gaya untuk membuat gambar bulat */
img {
  border-radius: 50%; /* Untuk membuat gambar bulat */
}
.text-blue-500 {
  color: #F7EFE5; /* Warna biru (tersedia dalam palet warna Tailwind) */
}

/* Gaya untuk perubahan warna pada hover */
.hover-text-white:hover {
  color: #FFFFFF; /* Warna putih saat di-hover */
}

.hover-text-black:hover {
  color: #000000; /* Warna hitam saat di-hover */
}
</style>
