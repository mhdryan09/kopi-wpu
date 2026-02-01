# 📱 Media Queries - Membuat Website Responsive

## 🎯 Apa itu Media Queries?

Media Queries adalah teknik CSS yang memungkinkan kita mengatur tampilan website berdasarkan ukuran layar perangkat. Dengan Media Queries, website kita bisa tampil sempurna di laptop, tablet, maupun smartphone.

**Analogi Sederhana:**
Seperti lemari pakaian yang punya pakaian untuk berbagai acara (formal, santai, olahraga), website kita juga punya "pakaian" berbeda untuk berbagai ukuran layar!

---

## 📐 Breakpoint yang Digunakan

Kita menggunakan 3 breakpoint utama berdasarkan ukuran layar yang umum:

| Perangkat | Max-Width | Font Size | Keterangan |
|-----------|-----------|-----------|------------|
| **Laptop** | 1366px | 75% | Laptop standar |
| **Tablet** | 758px | 62.5% | Tablet dan iPad |
| **Mobile** | 450px | 55% | Smartphone |

**Kenapa angka-angka ini?**
- **1366px**: Resolusi laptop paling umum
- **758px**: Ukuran tablet portrait mode
- **450px**: Smartphone ukuran standar

---

## 🔧 Implementasi di CSS

### 1. Media Query untuk Laptop (≤1366px)

```css
/* Laptop */
@media (max-width: 1366px) {
	html {
		font-size: 75%;
	}
}
```

**Apa yang dilakukan?**
- Mengecilkan ukuran font dasar menjadi 75% dari ukuran normal
- Semua elemen yang menggunakan `rem` akan otomatis mengecil secara proporsional
- Website tetap rapi di layar laptop yang lebih kecil

**Contoh Efek:**
- Jika sebelumnya `font-size: 2rem` = 32px
- Sekarang jadi: `2rem` = 24px (75% dari 32px)

---

### 2. Media Query untuk Tablet (≤758px)

```css
/* Tablet */
@media (max-width: 758px) {
	html {
		font-size: 62.5%;
	}

	#hamburger-menu {
		display: inline-block;
	}

	.navbar .navbar-nav {
		position: absolute;
		top: 100%;
		right: -100%;
		background-color: #fff;
		width: 30rem;
		height: 100vh;
		transition: 0.3s;
	}

	.navbar .navbar-nav.active {
		right: 0;
	}
}
```

**Apa yang dilakukan?**

1. **Font Size 62.5%**
   - Mengecilkan font lebih jauh untuk layar tablet
   - `1rem` sekarang = 10px (memudahkan perhitungan)

2. **Menampilkan Hamburger Menu**
   - Icon hamburger (☰) yang tadinya `display: none` sekarang muncul
   - Digunakan untuk toggle menu mobile

3. **Navbar Navigation Berubah**
   - `position: absolute` - Menu keluar dari normal flow
   - `right: -100%` - Menu tersembunyi di luar layar kanan
   - `width: 30rem` - Lebar menu sidebar 300px
   - `height: 100vh` - Tinggi penuh layar (100% viewport height)
   - `background-color: #fff` - Background putih untuk kontras

4. **Menu Active State**
   - `.navbar-nav.active` → `right: 0`
   - Saat diberi class `active`, menu slide masuk dari kanan
   - Transisi smooth berkat `transition: 0.3s`

**Visualisasi:**
```
┌─────────────────┐
│  Logo    ☰     │  ← Navbar dengan hamburger menu
└─────────────────┘
                  │ ← Menu sidebar tersembunyi (right: -100%)
                  │
      Klik ☰ →   ┌─────────┐
                  │ Home    │
                  │ About   │ ← Menu muncul (right: 0)
                  │ Menu    │
                  │ Contact │
                  └─────────┘
```

---

### 3. Media Query untuk Mobile (≤450px)

```css
/* Mobile */
@media (max-width: 450px) {
	html {
		font-size: 55%;
	}
}
```

**Apa yang dilakukan?**
- Font size dikecilkan lagi menjadi 55%
- Memaksimalkan ruang yang terbatas di layar smartphone
- Menu sidebar dari tablet tetap digunakan (karena ini lebih kecil dari 758px)

---

## 🎨 Teknik Responsive: Font Sizing dengan REM

### Kenapa Pakai `rem` bukan `px`?

**REM (Root EM)** = Relatif terhadap font-size di elemen `<html>`

**Keuntungan:**
1. **Scaling Otomatis** - Ubah 1 nilai, semua ukuran ikut berubah
2. **Konsistensi** - Proporsi tetap terjaga di semua ukuran layar
3. **Mudah Maintenance** - Tidak perlu ubah satu-satu

**Contoh di Navbar:**
```css
.navbar .navbar-logo {
	font-size: 2rem;  /* 32px di desktop, 24px di laptop, 20px di tablet */
}

.navbar .navbar-nav a {
	font-size: 1.3rem; /* Ikut menyesuaikan secara proporsional */
}
```

**Perhitungan:**
- Default: `1rem = 16px` (browser default)
- Laptop (75%): `1rem = 12px` → `2rem = 24px`
- Tablet (62.5%): `1rem = 10px` → `2rem = 20px`
- Mobile (55%): `1rem = 8.8px` → `2rem = 17.6px`

---

## 🎯 Mobile-First vs Desktop-First

Project ini menggunakan **Desktop-First Approach**:

```css
/* Default style untuk desktop */
.navbar { padding: 1.4rem 7%; }

/* Kemudian override untuk layar lebih kecil */
@media (max-width: 1366px) { /* Laptop */ }
@media (max-width: 758px)  { /* Tablet */ }
@media (max-width: 450px)  { /* Mobile */ }
```

**Alternatif: Mobile-First Approach**
```css
/* Default style untuk mobile */
.navbar { padding: 1rem 5%; }

/* Kemudian enhance untuk layar lebih besar */
@media (min-width: 451px)  { /* Tablet up */ }
@media (min-width: 759px)  { /* Desktop up */ }
```

**Kapan pakai yang mana?**
- **Desktop-First**: Jika target utama adalah pengguna desktop
- **Mobile-First**: Jika traffic terbesar dari mobile (trend modern)

---

## 🔍 Cara Kerja Cascading di Media Queries

Media Queries dibaca dari atas ke bawah. Jika beberapa kondisi terpenuhi, yang paling bawah akan menang.

**Contoh di Mobile (375px):**
```css
/* ✓ Terpenuhi (375 < 1366) */
@media (max-width: 1366px) {
	html { font-size: 75%; }
}

/* ✓ Terpenuhi (375 < 758) - OVERRIDE yang atas */
@media (max-width: 758px) {
	html { font-size: 62.5%; }
}

/* ✓ Terpenuhi (375 < 450) - OVERRIDE lagi */
@media (max-width: 450px) {
	html { font-size: 55%; }  /* ← Yang ini yang dipakai! */
}
```

**Hasil akhir:** `font-size: 55%` karena media query terakhir yang override.

---

## 🛠️ Testing Responsive Design

### Di Browser (Chrome/Edge/Firefox):

1. **Buka Developer Tools**
   - Windows: `F12` atau `Ctrl + Shift + I`
   - Mac: `Cmd + Option + I`

2. **Toggle Device Toolbar**
   - Windows: `Ctrl + Shift + M`
   - Mac: `Cmd + Shift + M`

3. **Pilih Device Preset**
   - iPhone SE (375px) → Mobile
   - iPad (768px) → Tablet
   - Laptop (1366px) → Laptop
   - Atau custom size dengan drag

4. **Yang Harus Dicek:**
   - ✅ Font size mengecil sesuai breakpoint
   - ✅ Hamburger menu muncul di tablet/mobile
   - ✅ Menu navigasi tersembunyi di mobile
   - ✅ Layout tidak "berantakan" atau overflow

---

## 💡 Tips & Best Practices

### 1. Gunakan Relative Units
```css
/* ❌ Kurang Flexible */
.navbar { padding: 22px 7%; }

/* ✅ Lebih Responsive */
.navbar { padding: 1.4rem 7%; }
```

### 2. Batasi Jumlah Breakpoint
```css
/* ❌ Terlalu banyak, susah maintain */
@media (max-width: 1920px) { }
@media (max-width: 1600px) { }
@media (max-width: 1366px) { }
@media (max-width: 1200px) { }
/* ... */

/* ✅ Cukup 3-4 breakpoint utama */
@media (max-width: 1366px) { } /* Laptop */
@media (max-width: 758px)  { } /* Tablet */
@media (max-width: 450px)  { } /* Mobile */
```

### 3. Test di Real Device
- Emulator browser itu bagus, tapi tidak 100% akurat
- Kalau bisa, test di smartphone/tablet sungguhan
- Cek di berbagai orientasi (portrait & landscape)

### 4. Perhatikan Touch Target Size
```css
/* Di mobile, tombol harus cukup besar untuk disentuh */
.navbar .navbar-extra a {
	margin: 0 0.5rem;
	padding: 0.5rem; /* Minimal 44x44px untuk touch target */
}
```

---

## 🐛 Troubleshooting

### Problem: Media Query tidak bekerja

**Solusi:**
1. Pastikan ada meta viewport di HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. Cek urutan media query (yang lebih spesifik di bawah)
3. Clear cache browser (Ctrl + Shift + R)

### Problem: Font terlalu kecil di mobile

**Solusi:**
```css
/* Naikkan persentase font-size */
@media (max-width: 450px) {
	html {
		font-size: 60%; /* Dari 55% → 60% */
	}
}
```

### Problem: Menu sidebar tidak slide

**Solusi:**
- Pastikan ada JavaScript untuk toggle class `active`
- Lihat bagian JavaScript di bawah untuk implementasinya

---

## 🎮 JavaScript: Mengaktifkan Hamburger Menu

Sekarang kita sudah punya CSS untuk media queries dan animasi sidebar, tapi menu belum bisa dibuka/tutup. Kita perlu JavaScript untuk membuat hamburger menu interaktif!

### Persiapan: Struktur HTML

Di file [index.html:36](../index.html#L36), kita punya hamburger menu button:

```html
<a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
```

Dan menu navigation yang akan kita toggle di [index.html:25-30](../index.html#L25-L30):

```html
<div class="navbar-nav">
	<a href="#">Home</a>
	<a href="#about">Tentang Kami</a>
	<a href="#menu">Menu</a>
	<a href="#contact">Kontak</a>
</div>
```

### Implementasi JavaScript

Buat file `js/script.js` dan tambahkan kode berikut:

```javascript
// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
	// tampil class active
	navbarNav.classList.toggle("active");
};
```

**Kode lengkap ada di:** [script.js:1-8](../js/script.js#L1-L8)

### Penjelasan Baris per Baris

#### 1. Selecting Element Navigation

```javascript
const navbarNav = document.querySelector(".navbar-nav");
```

**Apa yang dilakukan?**
- `document.querySelector()` = Cari elemen pertama yang cocok dengan selector
- `.navbar-nav` = Class CSS untuk menu navigation
- `const navbarNav` = Simpan reference ke elemen ini dalam variable

**Kenapa pakai `const`?**
- Variable tidak akan di-reassign (nilai tetap)
- Best practice untuk DOM reference

**Analogi:**
Seperti memberikan label pada remote TV. Sekali label ditempel, kita bisa pakai remote kapan saja tanpa harus cari lagi.

---

#### 2. Event Handler pada Hamburger Menu

```javascript
document.querySelector("#hamburger-menu").onclick = () => {
```

**Breakdown:**
- `document.querySelector("#hamburger-menu")` = Cari element dengan ID `hamburger-menu`
- `.onclick` = Property untuk event click
- `= () => { }` = Arrow function (ES6 syntax)

**Kenapa pakai Arrow Function?**
```javascript
// Modern (Arrow Function) ✅
onclick = () => { }

// Tradisional (Anonymous Function)
onclick = function() { }
```

Arrow function lebih ringkas dan punya behavior `this` yang lebih predictable (meskipun dalam kasus ini tidak mempengaruhi).

---

#### 3. Toggle Class Active

```javascript
navbarNav.classList.toggle("active");
```

**Apa yang dilakukan?**
- `classList` = API untuk manipulasi class CSS
- `.toggle("active")` = Tambah/hapus class `active`
  - Jika class `active` **tidak ada** → tambahkan
  - Jika class `active` **sudah ada** → hapus

**Visualisasi:**

```html
<!-- Kondisi Awal (Menu Tersembunyi) -->
<div class="navbar-nav">
  <!-- right: -100% dari CSS -->
</div>

<!-- Setelah Klik Pertama (Menu Muncul) -->
<div class="navbar-nav active">
  <!-- right: 0 karena ada class .active -->
</div>

<!-- Setelah Klik Kedua (Menu Sembunyi Lagi) -->
<div class="navbar-nav">
  <!-- right: -100% lagi -->
</div>
```

---

### Cara Kerja Keseluruhan

**Flow Diagram:**

```
User                Browser                   CSS
  │                    │                       │
  │ Klik hamburger     │                       │
  ├───────────────────>│                       │
  │                    │ Cek classList         │
  │                    │ .navbar-nav           │
  │                    │                       │
  │                    │ Ada "active"? Tidak   │
  │                    │ ── toggle("active") ──>│
  │                    │                       │ .navbar-nav.active {
  │                    │                       │   right: 0;
  │                    │<──────────────────────│ }
  │                    │ Menu slide masuk      │
  │<───────────────────│ (transition 0.3s)     │
  │                    │                       │
  │ Klik lagi          │                       │
  ├───────────────────>│                       │
  │                    │ Ada "active"? Ya      │
  │                    │ ── toggle("active") ──>│
  │                    │                       │ .navbar-nav {
  │                    │<──────────────────────│   right: -100%;
  │<───────────────────│ Menu slide keluar     │ }
  │                    │                       │
```

---

### Load Script di HTML

Jangan lupa load script di bagian bawah [index.html:47](../index.html#L47):

```html
<!-- My JS -->
<script src="js/script.js"></script>
```

**Kenapa di bawah?**
- JavaScript dieksekusi dari atas ke bawah
- Jika script di `<head>`, elemen belum ter-render
- `document.querySelector()` akan return `null` → error!

**Best Practice:**
```html
<body>
  <!-- Semua konten HTML -->

  <!-- Load external libraries dulu -->
  <script>
    feather.replace();
  </script>

  <!-- Baru load script kita -->
  <script src="js/script.js"></script>
</body>
```

---

### Alternative: querySelector vs getElementById

Kita bisa juga pakai `getElementById`:

```javascript
// Menggunakan querySelector ✅ (yang kita pakai)
document.querySelector("#hamburger-menu")

// Menggunakan getElementById (juga valid)
document.getElementById("hamburger-menu")
```

**Perbedaan:**
- `querySelector()` lebih flexible (bisa CSS selector apa saja: `.class`, `#id`, `div > p`, dll)
- `getElementById()` lebih cepat (tapi perbedaannya negligible untuk aplikasi kecil)
- `querySelector()` return `null` jika tidak ketemu, `getElementById()` juga return `null`

**Rekomendasi:** Pakai `querySelector()` untuk konsistensi (semua selector pakai method yang sama).

---

### Testing Hamburger Menu

**Cara Test:**

1. **Buka di Browser**
   - Buka `index.html` di browser

2. **Resize Window ke Mobile Size**
   - Tekan `F12` → Toggle Device Toolbar (`Ctrl + Shift + M`)
   - Pilih device mobile (iPhone SE, atau custom < 758px)

3. **Cek Hamburger Menu**
   - ✅ Icon hamburger (☰) harus muncul di kanan atas
   - ✅ Menu navigation harus tersembunyi

4. **Klik Hamburger**
   - ✅ Menu sidebar slide masuk dari kanan
   - ✅ Animasi smooth (transition 0.3s)
   - ✅ Background putih muncul

5. **Klik Lagi**
   - ✅ Menu sidebar slide keluar ke kanan
   - ✅ Kembali tersembunyi

6. **Cek Console**
   - Buka Console di DevTools (`F12` → Console tab)
   - ✅ Tidak ada error merah
   - Jika ada error "Cannot read property 'classList' of null" → berarti selector salah atau script load sebelum HTML

---

### Debugging Tips

#### Error: "Cannot read property 'classList' of null"

**Penyebab:**
- Element `.navbar-nav` tidak ditemukan
- Script load sebelum HTML selesai render

**Solusi:**
```javascript
// Cek apakah element ada
const navbarNav = document.querySelector(".navbar-nav");
console.log(navbarNav); // Harus ada object, bukan null

// Atau wrap dengan DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
	const navbarNav = document.querySelector(".navbar-nav");
	document.querySelector("#hamburger-menu").onclick = () => {
		navbarNav.classList.toggle("active");
	};
});
```

#### Menu Tidak Slide Mulus

**Cek CSS:**
```css
.navbar .navbar-nav {
	transition: 0.3s; /* Pastikan ada ini */
}
```

#### Menu Muncul tapi Tidak Bisa Ditutup

**Cek JavaScript:**
- Pastikan pakai `.toggle()` bukan `.add()`
- Kalau pakai `.add()`, menu akan buka terus tanpa bisa tutup

---

## 🎨 Enhancement Ideas (Opsional)

Setelah basic hamburger menu jalan, kamu bisa tambahkan fitur-fitur ini:

### 1. Auto-Close Menu saat Klik Link

```javascript
// Tutup menu saat user klik salah satu link navigasi
document.querySelectorAll('.navbar-nav a').forEach(link => {
	link.addEventListener('click', () => {
		navbarNav.classList.remove('active');
	});
});
```

### 2. Close Menu saat Klik di Luar

```javascript
// Tutup menu saat klik di area luar menu
document.addEventListener('click', (e) => {
	const hamburger = document.querySelector('#hamburger-menu');
	const nav = document.querySelector('.navbar-nav');

	// Jika yang diklik bukan hamburger dan bukan menu
	if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
		nav.classList.remove('active');
	}
});
```

### 3. Animasi Hamburger Icon

Ubah icon hamburger jadi "X" saat menu terbuka (butuh CSS tambahan dan class toggle di icon).

---

## 📚 Konsep JavaScript yang Dipelajari

Dari kode sederhana ini, kamu sudah belajar:

1. **DOM Selection**
   - `querySelector()` untuk select element

2. **Event Handling**
   - `.onclick` untuk handle click event
   - Arrow function `() => {}`

3. **DOM Manipulation**
   - `classList.toggle()` untuk manipulasi class CSS

4. **Variable Declaration**
   - `const` untuk immutable reference

5. **Integration HTML-CSS-JavaScript**
   - HTML untuk struktur
   - CSS untuk style & animation
   - JavaScript untuk interactivity

---

## 🎓 Rangkuman

### Media Queries (CSS)
1. **Media Queries** = Cara CSS beradaptasi dengan ukuran layar berbeda
2. **3 Breakpoint Utama**: 1366px (laptop), 758px (tablet), 450px (mobile)
3. **REM Units** = Memudahkan scaling responsif secara proporsional
4. **Mobile Navigation** = Hamburger menu + sidebar yang slide in/out dengan class `.active`
5. **Testing** = Gunakan browser DevTools + test di device nyata

### JavaScript (Interactivity)
1. **DOM Selection** = `querySelector()` untuk mengambil element
2. **Event Handler** = `.onclick` untuk handle user interaction
3. **Class Toggle** = `classList.toggle("active")` untuk show/hide menu
4. **Arrow Function** = Syntax modern untuk function expression
5. **Script Loading** = Load script di akhir `<body>` setelah HTML

**File yang terlibat:**
- CSS: [style.css:84-124](../css/style.css#L84-L124)
- JavaScript: [script.js:1-8](../js/script.js#L1-L8)
- HTML: [index.html:25-37](../index.html#L25-L37)

---

Selamat! Kamu sudah paham cara kerja Media Queries dan JavaScript untuk Hamburger Menu! 🎉

**Next Step:**
- Buat section Hero (banner utama dengan background image)
- Tambahkan smooth scrolling untuk navigasi
- Implementasi search box dan shopping cart (toggle show/hide)
