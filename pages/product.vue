<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold my-4">Detail Produk Pulsa</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Loop untuk menampilkan daftar produk -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        :style="index !== products.length - 1 ? 'margin-bottom: 20px;' : ''"
      >
        <h2 class="text-xl font-semibold">{{ product.name }}</h2>
        <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover mb-5">
        <div class="flex justify-between items-center">
          <div>
            <p>Harga: {{ product.price }}</p>
            <p>Operator: {{ product.operator }}</p>
          </div>
          <!-- Menggunakan router-link untuk navigasi ke halaman pembayaran -->
          <router-link :to="{ path: '/pembelian', query: { product: product.name } }">
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black hover:text-white self-end">Beli</button>
          </router-link>
        </div>
        <!-- Tambahan informasi lainnya tentang produk -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        // Data produk (dalam array)
        // ...

          // Data produk
             // Data produk
              // Data produk
                    // Contoh daftar produk (bisa diganti dengan data dari API atau database)
                    {
            name: 'Pulsa 10.000',
            price: 'Rp 10.000',
            operator: 'Smartfren',
            image: "images/products/axis.png" // Path gambar produk
          },
          {
            name: 'Pulsa 20.000',
            price: 'Rp 20.000',
            operator: 'Indosat',
            image: 'images/products/telkomsel.png' // Path gambar produk lainnya
          },
          {
            name: 'Pulsa 10.000',
            price: 'Rp 10.000',
            operator: 'Smartfren',
            image: "images/products/axis.png" // Path gambar produk
          },
          {
            name: 'Pulsa 10.000',
            price: 'Rp 10.000',
            operator: 'Smartfren',
            image: "images/products/axis.png" // Path gambar produk
          },
          {
            name: 'Pulsa 10.000',
            price: 'Rp 10.000',
            operator: 'Smartfren',
            image: "images/products/axis.png" // Path gambar produk
          },
          {
            name: 'Pulsa 10.000',
            price: 'Rp 10.000',
            operator: 'Smartfren',
            image: "images/products/axis.png" // Path gambar produk
          },
          // Produk lainnya...



      ]
    };
  }
  // Fungsi-fungsi lainnya
}
</script>

<style>
/* Gaya untuk border yang mengelilingi produk dan sudut yang sedikit bulat */
/* ... */
/* Gaya untuk border yang mengelilingi produk dan sudut yang sedikit bulat */
.container {
  padding: 10px;
}

/* Gaya untuk produk */
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(2, 5, 5, 0.5);
}

.product-card img {
  width: 100%;
  height: 120px; /* Ubah sesuai kebutuhan */
  object-fit: cover;
  border-radius: 6px;
}

.product-card h2 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.product-card p {
  margin-bottom:3px;
  font-size: 0.875rem; /* Menyesuaikan ukuran font */

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
