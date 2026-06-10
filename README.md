# Binary <> Decimal Converter (Iteratif)

Aplikasi web sederhana untuk mengonversi bilangan biner ke desimal dan sebaliknya. Aplikasi ini merupakan bagian dari Tugas Besar (TUBES) mata kuliah Analisis Kompleksitas Algoritma (AKA) yang mengimplementasikan pendekatan **iteratif** dalam algoritma konversinya.

## 👥 Pembuat
Karya: **HILMI** dan **ARYA**

## ✨ Fitur
- **Binary to Decimal Converter**: Mengubah angka biner (basis 2) menjadi angka desimal (basis 10).
- **Decimal to Binary Converter**: Mengubah angka desimal (basis 10) menjadi angka biner (basis 2).
- **Validasi Input**: Menangani kesalahan input dengan memberikan peringatan jika format angka yang dimasukkan tidak valid (misalnya huruf atau angka selain 0 dan 1 pada biner).
- **Tampilan Interaktif**: Antarmuka pengguna (UI) yang menarik dengan *background gradient*, transisi, dan animasi *marquee*.

## 🚀 Teknologi yang Digunakan
- **HTML5**: Sebagai kerangka dan struktur halaman web.
- **CSS3**: Untuk *styling* halaman, termasuk pewarnaan (Gradient background), layouting (Flexbox), efek hover, dan animasi *marquee*.
- **JavaScript (Vanilla)**: Menangani logika program dan manipulasi DOM, khususnya mengimplementasikan fungsi algoritma iteratif.

## ⚙️ Penjelasan Algoritma (Pendekatan Iteratif)
Aplikasi ini murni menggunakan pendekatan iteratif (perulangan) tanpa rekursi untuk melakukan proses konversi:
1. **Biner ke Desimal (`binaryToDecimalIterative`)**: 
   Menggunakan perulangan `for` yang berjalan dari indeks terakhir string biner ke indeks pertama. Setiap digit dikalikan dengan $2^n$ (dimana $n$ adalah pangkat yang bertambah 1 setiap iterasinya) dan ditambahkan ke hasil akhir.
2. **Desimal ke Biner (`decimalToBinaryIterative`)**: 
   Menggunakan perulangan `while` yang akan terus membagi angka desimal dengan 2. Sisa bagi (`modulo 2`) akan dirangkai menjadi string biner dari belakang ke depan, hingga nilai desimal habis (0).

## 📂 Struktur File
- `index.html` - Antarmuka halaman utama web.
- `style.css` - Kode desain visual untuk mengatur *layout* dan warna.
- `script.js` - File yang berisi logika algoritma iteratif dan *event handler*.

## 💻 Cara Menjalankan Aplikasi
1. Unduh (Download) semua file atau *clone* folder repositori ini.
2. Buka direktori penyimpanan folder `TUBES-AKA-Iteratif`.
3. Klik kanan pada file `index.html`, lalu pilih **Open with > [Browser Pilihan Anda]** (misal: Google Chrome, Firefox, atau Edge).
4. Masukkan angka pada kolom input yang tersedia dan klik tombol **Convert** untuk melihat hasilnya.
