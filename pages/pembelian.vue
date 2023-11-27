<template>
  <div class="container">
    <div class="form-container">
      <h1>Form Pembayaran Pulsa</h1>
      <form @submit.prevent="submitForm" class="form">
        <label for="phoneNumber">Nomor Handphone:</label>
        <input
          type="text"
          id="phoneNumber"
          v-model="phoneNumber"
          placeholder="Masukkan nomor handphone"
          required
          class="input-field"
        />
        <br /><br />
        <button type="submit" class="submit-btn">Bayar Pulsa</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '' // State to hold the phone number
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, bisa tambahkan logika untuk pembayaran pulsa disini
      // Contoh: console.log("Nomor handphone yang akan dibayar pulsa:", this.phoneNumber);
      // Lakukan proses pembayaran menggunakan nomor handphone yang telah diisi
      alert(`Nomor handphone ${this.phoneNumber} akan melakukan pembayaran pulsa.`);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Ubah tinggi menjadi 60% dari viewport height */
}

.form-container {
  width: 40%; /* Ubah lebar% menjadi 40% dari lebar layar */
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.form {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 5px;
}

.input-field {
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-btn {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
