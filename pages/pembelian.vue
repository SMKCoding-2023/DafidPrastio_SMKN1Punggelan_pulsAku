<template>
  <div class="container">
    <div class="form-container">
      <h1>Form Pembayaran Pulsa</h1>
      <form @submit.prevent="submitForm" class="form">
        <label for="operator">Operator:</label>
        <input type="text" id="operator" v-model="operator" readonly class="input-field" />
        <label for="nominal">Nominal:</label>
        <input type="text" id="nominal" v-model="nominal" readonly class="input-field" />
        <label for="phoneNumber">Nomor Handphone:</label>
        <input type="text" id="phoneNumber" v-model="phoneNumber" placeholder="Masukkan nomor handphone" required class="input-field" />
        <button @click="bayarPulsa" class="submit-btn">Bayar Pulsa</button>
        <Alert v-if="showAlert" :message="alertMessage" />

      </form>
    </div>
  </div>
  <router-link to="/product" class="back-btn">Kembali</router-link>

</template>

<script>
import { createClient } from '@supabase/supabase-js';
import Alert from '~/components/Alert.vue';



export default {
  components: {
    Alert
  },

  data() {
    return {
      operator: '',
      nominal: '',
      phoneNumber: '',
      showAlert: false,
      alertMessage: ''

    };
  },
  mounted() {
    this.operator = this.$route.query.operator || 'null';
    this.nominal = this.$route.query.harga || 'null';
  },
  methods: {
    async bayarPulsa() {
      // Inisialisasi Supabase client
      const SUPABASE_URL ='https://sdtqtrjftyflftoxwfyi.supabase.co';
      const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkdHF0cmpmdHlmbGZ0b3h3ZnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMTAwNDYsImV4cCI6MjAxNjU4NjA0Nn0.M8eXTFuQp8xREZiVDzZTf883jDHJ6aaphrhbdFUSEWk';
      const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

      // Data pembelian yang akan disimpan
      const dataPembelian = {
        operator: this.operator,
        nominal: this.nominal,
        nomor_handphone: this.phoneNumber,
        waktu: new Date().toISOString(), // Atur waktu pembelian ke waktu saat ini
        // Jika Anda memiliki ID produk terpilih, dapat ditambahkan di sini
        // product_id: id_produk_terpilih
      };

      // Simpan data pembelian ke tabel pembelian di Supabase
      const { data, error } = await supabase.from('pembelian').insert([dataPembelian]);
      if (error) {
        console.error('Error saving data:', error.message);
        return;
      }
            // Jika sukses, tampilkan alert
            this.showAlert = true;
      this.alertMessage = 'Pembelian berhasil!';
      // ...


     alert('Data berhasil disimpan:', data);
      // Lakukan tindakan lanjutan, seperti menampilkan pesan sukses atau navigasi ke halaman lain
    }
  }
};

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Ubah tinggi menjadi 80% dari viewport height */
}

.form-container {
  width: 60%; /* Ubah lebar menjadi 60% dari lebar layar */
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-field {
  padding: 10px; /* Ubah padding menjadi 10px */
  margin-bottom: 20px; /* Ubah margin menjadi 20px */
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px; /* Ubah ukuran font menjadi 16px */
}

.submit-btn {
  padding: 10px 20px; /* Ubah padding menjadi 10px atas dan bawah, 20px kiri dan kanan */
  font-size: 16px; /* Ubah ukuran font menjadi 16px */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}
.back-btn {
  display: block;
  text-align: center;
  margin-top: -40px; /* Atur jarak dari tombol "Bayar Pulsa" */
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
}

.back-btn:hover {
  text-decoration: underline;
}

</style>
