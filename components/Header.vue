<template>
  <header class="w-full border-b border-slate-200 py-2 header-gradient" style="background-color: rgba(35, 208, 251, 0.645);">
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <!-- Logo -->
        <img src="/img/logo.avif" alt="Logo" class="w-12 h-12 rounded-full mr-4 ml-4 logo-outline">


        <!-- Judul atau nama situs -->
        <NuxtLink to="/" class="text-xl font-bold">
          PULS<span class="text-blue-500">A</span>KU
        </NuxtLink>
      </div>

      <!-- Navigasi untuk desktop -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink to="/" class="text-base hover:text-blue-500">Home</NuxtLink>
        <NuxtLink to="/product" class="text-base hover:text-blue-500">Products</NuxtLink>
        <NuxtLink to="/contact" class="text-base hover:text-blue-500">Contact</NuxtLink>
      </nav>

<!-- Tombol dropdown (hamburger icon) untuk mobile -->
<div class="md:hidden flex items-center">
  <button @click="toggleDropdown" class="text-white focus:outline-none">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
</div>

<div v-if="isDropdownOpen" class="md:hidden absolute top-16 right-0 bg-white border border-gray-300 py-2 px-4 rounded shadow-lg">
  <NuxtLink @click="closeDropdown" to="/" class="block text-base mb-2 hover:text-blue-500">Home</NuxtLink>
  <NuxtLink @click="closeDropdown" to="/product" class="block text-base mb-2 hover:text-blue-500">Products</NuxtLink>
  <NuxtLink @click="closeDropdown" to="/contact" class="block text-base hover:text-blue-500">Contact</NuxtLink>
</div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    }
  }

};
</script>

<style>
.header-gradient {
  background:radial-gradient(circle at -20.71% 50%, #b0e7ff 0, #86d2fa 25%, #53bcf2 50%, #00a6ea 75%, #0091e3 100%);


  /* Atur properti lainnya jika diperlukan */
}
/* Gaya untuk membuat gambar bulat */
img {
  border-radius: 50%; /* Untuk membuat gambar bulat */
}
.text-blue-500 {
  color: #f7efe5; /* Warna biru (tersedia dalam palet warna Tailwind) */
}

/* Gaya untuk perubahan warna pada hover */
.hover-text-white:hover {
  color: #ffffff; /* Warna putih saat di-hover */
}

.hover-text-black:hover {
  color: #000000; /* Warna hitam saat di-hover */
}

/* Gaya untuk dropdown pada mobile */
@media (max-width: 768px) {
  .hidden {
    display: none !important; /* Sembunyikan elemen pada ukuran layar tertentu */
  }

  .absolute {
    position: absolute; /* Gunakan posisi absolut untuk dropdown */
  }
}
.logo-outline {
  outline: 2px solid black; /* Outline dengan ketebalan 2px dan warna hitam */
}

</style>
