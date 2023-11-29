<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold my-4">Produk Pulsa:</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Loop untuk menampilkan daftar produk dari Supabase -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        :style="index !== products.length - 1 ? 'margin-bottom: 20px;' : ''"
      >
        <h2 class="text-xl font-semibold">{{ product.nama_operator }}</h2>
        <img :src="`https://sdtqtrjftyflftoxwfyi.supabase.co/storage/v1/object/public/${product.image}`" alt="Product Image" class="w-full h-48 object-cover mb-5">



        <div class="flex justify-between items-center">
          <div>
            <p>Harga: {{ product.harga }}</p>
            <p>Operator: {{ product.nama_operator }}</p>
          </div>
          <!-- Menggunakan router-link untuk navigasi ke halaman pembayaran -->
          <router-link :to="{ path: '/pembelian', query: { operator: product.nama_operator, harga: product.harga } }">
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black hover:text-white self-end">Beli</button>
</router-link>

        </div>
        <!-- Tambahan informasi lainnya tentang produk -->
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';

export default {
  data() {
    return {
      products: [], // Inisialisasi array kosong untuk menyimpan produk dari Supabase
    };
  },
  async created() {
    const SUPABASE_URL ='https://sdtqtrjftyflftoxwfyi.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkdHF0cmpmdHlmbGZ0b3h3ZnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMTAwNDYsImV4cCI6MjAxNjU4NjA0Nn0.M8eXTFuQp8xREZiVDzZTf883jDHJ6aaphrhbdFUSEWk';

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    // Ambil data produk dari tabel di Supabase
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      this.products = data; // Isi array products dengan data produk dari Supabase
    }
  },
  methods: {
    getProductImageURL(imageFileName) {
      // Ganti 'products' dengan nama bucket Anda di Supabase
      const BUCKET_NAME = 'products';
      // Ganti 'public' jika gambar berada di folder lain dalam bucket
      const BUCKET_FOLDER = 'public';
      const SUPABASE_URL = 'https://sdtqtrjftyflftoxwfyi.supabase.co'; // Ganti dengan URL proyek Supabase Anda
      const IMAGE_SIZE = 'small'; // Ganti dengan ukuran gambar yang diinginkan (jika diperlukan)

      return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_FOLDER}/${imageFileName}?size=${IMAGE_SIZE}`;
    },
  },

};
</script>


<style>
.container {
  padding: 10px;
}

/* Gaya produk */
.product-card {
  border: 4px solid #ddd;
  border-radius: 20px;
  padding: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 2px 4px rgba(27, 224, 231, 0.521);
}

.product-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 3px;
}

.product-card h2 {
  font-size: 1.25rem;
  margin-bottom: 8fr;
}

.product-card p {
  margin-bottom: 3px;
  font-size: 0.875rem;
}

.product-card button {
  background-color: #3490dc;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.product-card button:hover {
  background-color: #1e4e8c;
}

</style>
