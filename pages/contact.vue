<template>
    <div class="container mx-auto py-12">
      <h1 class="text-3xl font-bold mb-8">Hubungi Kami</h1>
      
      <!-- Formulir -->
      <form class="mb-12">
        <div class="mb-6">
          <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
          <input type="text" id="name" name="name" class="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-6">
          <label for="message" class="block text-sm font-medium text-gray-700">Pesan</label>
          <textarea id="message" name="message" rows="4" class="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Kirim Pesan</button>
      </form>
      
      <!-- Logo/link Social Media -->
      <div class="flex items-center space-x-4">
        <a href="https://www.facebook.com/link-to-facebook" target="_blank" rel="noopener noreferrer">
          <img src="/images/products/fb.png" alt="Facebook" class="w-8 h-8 hover:scale-110 transition-transform duration-300 ease-in-out">
        </a>
        <a href="https://www.instagram.com/link-to-instagram" target="_blank" rel="noopener noreferrer">
          <img src="/images/products/instagram-512.webp" alt="Instagram" class="w-8 h-8 hover:scale-110 transition-transform duration-300 ease-in-out">
        </a>
        <!-- Tambahkan logo/link sosial media lainnya -->
      </div>
    </div>
  </template>
  
  <style>
  /* Style untuk formulir */
  input[type="text"],
  input[type="email"],
  textarea {
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  .hover\:scale-110:hover {
  transform: scale(1.1);
}

  </style>
  