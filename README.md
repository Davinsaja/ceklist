# Aplikasi Daftar Tugas (Checklist)

Aplikasi web sederhana untuk mengelola dan melacak daftar tugas harian dengan kategori dan progress tracking.

## Fitur Utama

- **Tambah Tugas** - Menambahkan tugas baru dengan kategori (Kerja, Personal, Mendesak, Kesehatan)
- **Mark Selesai** - Menandai tugas sebagai selesai dengan checkbox
- **Filter Tugas** - Menyaring tugas berdasarkan status (Semua, Belum selesai, Sudah selesai, Mendesak)
- **Statistik Real-time** - Menampilkan total tugas, selesai, dan belum selesai
- **Progress Bar** - Visualisasi persentase penyelesaian tugas
- **Hapus Tugas** - Menghapus tugas individual atau semua tugas yang sudah selesai
- **Responsive Design** - Tampilan yang baik di desktop dan mobile

## Struktur File

```
membuat ceklist sederhana/
|-- index.html          # File HTML utama dengan struktur halaman
|-- style.css           # File CSS untuk styling dan tampilan
|-- script.js           # File JavaScript untuk logika aplikasi
|-- README.md           # Dokumentasi ini
```

## Penjelasan File

### index.html
File HTML yang berisi struktur halaman aplikasi:
- **Header** - Judul dan deskripsi aplikasi
- **Stats Section** - Menampilkan statistik tugas (total, selesai, belum selesai)
- **Progress Bar** - Visualisasi progress keseluruhan
- **Add Form** - Form untuk menambah tugas baru dengan input teks dan dropdown kategori
- **Filter Buttons** - Tombol untuk menyaring tugas
- **Task Lists** - Dua bagian untuk tugas belum selesai dan sudah selesai

### style.css
File CSS yang mengatur tampilan aplikasi:
- **Responsive Design** - Layout yang adaptif untuk berbagai ukuran layar
- **Modern UI** - Desain bersih dengan warna hijau sebagai tema utama
- **Interactive Elements** - Hover effects dan transisi untuk UX yang baik
- **Tag System** - Warna berbeda untuk setiap kategori tugas
- **Progress Visualization** - Progress bar dengan animasi smooth

### script.js
File JavaScript yang mengandung logika aplikasi:
- **Data Management** - Array `tasks` untuk menyimpan semua tugas
- **CRUD Operations** - Fungsi untuk Create, Read, Update, Delete tugas
- **Filter Logic** - Menyaring tugas berdasarkan kategori dan status
- **DOM Manipulation** - Update tampilan secara dinamis
- **Event Handlers** - Menangani interaksi pengguna

## Cara Penggunaan

1. **Buka index.html** di browser web
2. **Tambah Tugas** - Ketik tugas di input field, pilih kategori, klik "Tambah"
3. **Mark Selesai** - Klik checkbox lingkaran di sebelah kiri tugas
4. **Filter Tugas** - Gunakan tombol filter untuk melihat tugas tertentu
5. **Hapus Tugas** - Klik tombol × untuk menghapus tugas individual
6. **Hapus Selesai** - Klik "Hapus semua selesai" untuk membersihkan tugas selesai

## Kategori Tugas

- **Kerja** (Biru) - Tugas terkait pekerjaan
- **Personal** (Ungu) - Tugas pribadi/household
- **Mendesak** (Merah) - Tugas yang prioritas tinggi
- **Kesehatan** (Hijau) - Tugas terkait kesehatan dan fitness

## Teknologi

- **HTML5** - Struktur halaman semantic
- **CSS3** - Modern styling dengan flexbox dan grid
- **Vanilla JavaScript** - Logika aplikasi tanpa framework
- **Responsive Design** - Mobile-first approach

## Data Storage

Saat ini aplikasi menggunakan data sample yang tersimpan di memori browser. Data akan reset saat halaman di-refresh. Untuk implementasi production, dapat ditambahkan localStorage atau backend database.

## Customization

- **Tambah Kategori** - Edit object `TAGS` di script.js
- **Ubah Warna** - Modifikasi CSS variables di style.css
- **Ganti Bahasa** - Edit teks di index.html dan script.js
