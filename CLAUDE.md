# CLAUDE.md

File ini memberikan panduan untuk Claude Code (claude.ai/code) saat bekerja dengan kode di repository ini.

## Ringkasan Project

Ini adalah project website statis untuk "Kopi Kenangan WPU" (Kenangan Senja) - sebuah landing page untuk kedai kopi. Project ini menggunakan HTML, CSS, dan JavaScript murni tanpa framework atau build system.

**Cocok untuk pemula** - project ini dibuat untuk belajar web development dari dasar tanpa kompleksitas tools modern.

## Struktur dan Arsitektur

**Tech Stack:**
- HTML/CSS/JavaScript murni (tidak pakai framework seperti React/Vue)
- Feather Icons (via CDN) - untuk icon search, shopping cart, dan menu
- Google Fonts - Poppins family untuk typography

**Struktur File:**
- `index.html` - File HTML utama, berisi semua struktur halaman
- `css/style.css` - Semua styling, menggunakan CSS custom properties untuk tema warna
- Belum ada file JavaScript terpisah (Feather Icons diinisialisasi langsung di HTML)

**Sistem Desain:**
- CSS custom properties (variables) didefinisikan di `:root`:
  - `--primary`: #b6895b (warna aksen coklat keemasan)
  - `--bg`: #010101 (warna background hitam)
- Font: Poppins dengan beberapa weight (100, 300, 400, 700)
- Pendekatan mobile-first responsive design

**Komponen yang Sudah Ada:**
- Navbar fixed (menempel di atas saat scroll) dengan:
  - Logo "kenangan senja"
  - Navigation links (Home, Tentang Kami, Menu, Kontak)
  - Icon buttons (search, shopping cart, hamburger menu untuk mobile)
- Navbar menggunakan flexbox layout dengan background semi-transparent
- Navigasi menggunakan hash (#about, #menu, #contact) untuk single-page website

## Cara Development

**Melihat Preview:**
Buka `index.html` langsung di browser, atau gunakan local server untuk hasil lebih akurat:

```bash
# Menggunakan Python (jika sudah terinstall)
python -m http.server 8000
# Lalu buka browser ke: http://localhost:8000

# Atau menggunakan Node.js (jika sudah terinstall)
npx http-server
```

**Tidak ada build process** - setiap perubahan di HTML/CSS langsung terlihat saat refresh browser (F5).

## Konvensi Kode

**Penamaan:**
- CSS classes menggunakan pola BEM-like: `navbar-logo`, `navbar-nav`, `navbar-extra`
- Nama class deskriptif dan mudah dipahami

**Icon:**
- Feather Icons dipanggil dengan attribute `data-feather="icon-name"`
- Diaktifkan dengan `feather.replace()` di bagian bawah HTML

**Layout:**
- Standard horizontal padding: 7% (untuk container utama)
- Menggunakan flexbox untuk layout navbar

**Bahasa:**
- Teks konten menggunakan Bahasa Indonesia ("Tentang Kami", "Kontak")
- Nama class dan kode tetap Bahasa Inggris (standar programming)
