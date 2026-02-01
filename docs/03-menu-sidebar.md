# 🎨 Menu Sidebar - Styling & Auto-Close Feature

Setelah hamburger menu bisa dibuka/tutup, sekarang kita buat sidebar-nya lebih cantik dan tambahkan fitur auto-close saat user klik di luar menu!

---

## 🎯 Apa yang Akan Kita Buat?

Di tutorial sebelumnya, menu sidebar sudah bisa toggle (buka/tutup) tapi masih ada yang kurang:

**Problem:**

1. ❌ Menu link warna putih di background putih (tidak terlihat!)
2. ❌ Hover effect garis bawah tidak terlihat jelas
3. ❌ Menu tidak auto-close saat user klik di luar sidebar
4. ❌ User harus klik hamburger lagi untuk menutup menu (kurang user-friendly)

**Solusi yang Akan Dibuat:**

1. ✅ Styling menu link di sidebar (warna, ukuran, spacing)
2. ✅ Memperbaiki hover effect agar terlihat jelas
3. ✅ Auto-close menu saat user klik di luar sidebar
4. ✅ Better user experience

---

## 🎨 Part 1: Styling Menu Sidebar (CSS)

### Masalah yang Diperbaiki

Di media query tablet, kita sudah punya:

```css
.navbar .navbar-nav {
	background-color: #fff; /* Background putih */
	width: 30rem;
	height: 100vh;
	/* ... */
}
```

Tapi link-nya masih pakai warna dari style desktop (putih), jadi tidak terlihat!

### Solusi: Styling Link di Sidebar

Tambahkan kode ini di dalam `@media (max-width: 758px)` di [style.css:117-131](../css/style.css#L117-L131):

```css
.navbar .navbar-nav a {
	color: var(--bg);
	display: block;
	margin: 1.5rem;
	font-size: 2rem;
	padding: 0.5rem;
}

.navbar .navbar-nav a::after {
	transform-origin: 0 0;
}

.navbar .navbar-nav a:hover::after {
	transform: scaleX(0.2);
}
```

### Penjelasan Baris per Baris

#### 1. Warna dan Display

```css
.navbar .navbar-nav a {
	color: var(--bg);
	display: block;
```

**Apa yang dilakukan?**

- `color: var(--bg)` = Warna text hitam (#010101) agar kontras dengan background putih
- `display: block` = Link jadi block element (satu baris penuh)

**Kenapa `display: block`?**

```
┌────────────────────┐
│ Home               │  ← Block: clickable area penuh
├────────────────────┤
│ Tentang Kami       │  ← Block: clickable area penuh
├────────────────────┤
│ Menu               │
└────────────────────┘

VS

┌────────────────────┐
│ Home Tentang Menu  │  ← Inline: clickable hanya text
└────────────────────┘
```

Block element membuat area klik lebih besar (better UX di mobile!).

---

#### 2. Spacing

```css
margin: 1.5rem;
padding: 0.5rem;
```

**Apa yang dilakukan?**

- `margin: 1.5rem` = Jarak antar link (atas, bawah, kiri, kanan)
- `padding: 0.5rem` = Ruang di dalam link (memperbesar area klik)

**Perhitungan di Tablet (font-size: 62.5%):**

- `1rem = 10px`
- `margin: 1.5rem = 15px`
- `padding: 0.5rem = 5px`

**Visualisasi:**

```
┌────────────────────────────┐
│ ↕ margin 15px              │
│  ┌──────────────────────┐  │
│  │ ↔ padding 5px        │  │
│  │     Home             │  │ ← Link clickable area
│  │                      │  │
│  └──────────────────────┘  │
│ ↕ margin 15px              │
│  ┌──────────────────────┐  │
│  │   Tentang Kami       │  │
│  └──────────────────────┘  │
└────────────────────────────┘
```

---

#### 3. Font Size

```css
font-size: 2rem;
```

**Apa yang dilakukan?**

- Font lebih besar untuk kemudahan baca di mobile
- `2rem = 20px` di tablet (karena `html { font-size: 62.5% }`)

**Perbandingan:**

- Desktop: `font-size: 1.3rem` = 20.8px (dari base 16px)
- Tablet: `font-size: 2rem` = 20px (dari base 10px)

Link di sidebar sedikit lebih besar dan mudah diketuk di touchscreen!

---

#### 4. Hover Effect: Transform Origin

```css
.navbar .navbar-nav a::after {
	transform-origin: 0 0;
}
```

**Apa yang dilakukan?**

- `::after` = Pseudo-element untuk garis bawah (sudah ada dari style desktop)
- `transform-origin: 0 0` = Titik awal transform di kiri atas

**Kenapa perlu override?**

Default dari CSS desktop, garis animasi muncul dari tengah:

```
Home
─────  ← Muncul dari tengah (default)

VS

Home
─────  ← Muncul dari kiri (transform-origin: 0 0)
```

**Nilai Transform Origin:**

- `0 0` = Top-left (kiri atas)
- `50% 50%` = Center (tengah, default)
- `100% 100%` = Bottom-right (kanan bawah)

---

#### 5. Hover Effect: Scale

```css
.navbar .navbar-nav a:hover::after {
	transform: scaleX(0.2);
}
```

**Apa yang dilakukan?**

- Override scale dari desktop (`scaleX(0.5)` → `scaleX(0.2)`)
- Garis bawah jadi lebih pendek (20% dari lebar link)

**Kenapa lebih kecil?**

Di desktop, link berjajar horizontal (space terbatas):

```
Home     About     Menu     Contact
─────    ─────     ────     ───────  ← scaleX(0.5) pas
```

Di sidebar, link vertikal (space lebih luas):

```
Home
──                ← scaleX(0.2) lebih elegan

Tentang Kami
────

Menu
──
```

**Visualisasi ScaleX:**

```css
scaleX(0.2)  →  ──        (20% lebar)
scaleX(0.5)  →  ─────     (50% lebar)
scaleX(1.0)  →  ──────────  (100% lebar)
```

---

### Hasil Akhir Styling

Sebelum vs Sesudah:

**❌ Sebelum (Kurang Bagus):**

```
┌──────────────────┐
│                  │ Background putih
│ [text putih]     │ ← Tidak terlihat!
│ [text putih]     │
│ [text putih]     │
└──────────────────┘
```

**✅ Sesudah (Lebih Baik):**

```
┌──────────────────┐
│                  │
│   Home           │ ← Text hitam, jelas
│   ──             │ ← Hover: garis pendek
│                  │
│   Tentang Kami   │
│                  │
│   Menu           │
│                  │
│   Kontak         │
└──────────────────┘
```

---

## 🎮 Part 2: Auto-Close Menu (JavaScript)

### Problem: Menu Tidak Auto-Close

Saat ini, user harus klik hamburger menu lagi untuk menutup sidebar. Kurang praktis!

**User Flow Sekarang:**

1. Klik hamburger → menu buka ✅
2. Baca menu
3. **Klik hamburger lagi** → menu tutup ❌ (ribet!)

**User Flow yang Lebih Baik:**

1. Klik hamburger → menu buka ✅
2. Baca menu
3. **Klik di luar menu** → menu auto-close ✅ (praktis!)

### Implementasi JavaScript

Tambahkan kode ini di [script.js:10-17](../js/script.js#L10-L17):

```javascript
// Klik diluar Sidebar untuk menghilangkan Nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
	// selama yg diklik bukan navbar dan bukan hamburger
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});
```

### Penjelasan Baris per Baris

#### 1. Selecting Hamburger Element

```javascript
const hamburger = document.querySelector("#hamburger-menu");
```

**Apa yang dilakukan?**

- Ambil reference ke hamburger menu button
- Simpan di variable `hamburger`

**Kenapa perlu variable terpisah?**

- Kita sudah punya `navbarNav` untuk menu
- Sekarang perlu reference ke hamburger button juga
- Akan dipakai untuk cek "apakah yang diklik adalah hamburger?"

---

#### 2. Document-Level Click Listener

```javascript
document.addEventListener("click", function (e) {
```

**Apa yang dilakukan?**

- `document.addEventListener()` = Pasang event listener ke seluruh document
- `"click"` = Event yang didengarkan (setiap klik di mana saja)
- `function (e)` = Callback function dengan parameter `e` (event object)

**Kenapa pakai `document` bukan element tertentu?**

- Kita mau detect klik **di mana saja** di halaman
- Kalau cuma di element tertentu, klik di luar tidak terdetect

**Parameter `e` (Event Object):**

- `e.target` = Element yang diklik
- `e.preventDefault()` = Cancel default behavior
- `e.stopPropagation()` = Stop event bubbling

---

#### 3. Conditional Check

```javascript
if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
```

**Apa yang dilakukan?**

- Cek apakah yang diklik **BUKAN** hamburger dan **BUKAN** navbar

**Breakdown Kondisi:**

```javascript
!hamburger.contains(e.target);
```

- `.contains(element)` = Apakah element ini atau child-nya yang diklik?
- `!` = NOT (negasi)
- Artinya: "Yang diklik BUKAN hamburger button"

```javascript
!navbarNav.contains(e.target);
```

- Artinya: "Yang diklik BUKAN menu navbar (atau link di dalamnya)"

```javascript
&&
```

- AND operator
- Kedua kondisi harus `true`

**Logika Lengkap:**

> "Jika yang diklik BUKAN hamburger DAN BUKAN navbar, maka tutup menu"

---

#### 4. Remove Active Class

```javascript
navbarNav.classList.remove("active");
```

**Apa yang dilakukan?**

- Hapus class `active` dari navbar
- Menu sidebar slide keluar (kembali ke `right: -100%`)

**Bedanya dengan `.toggle()`:**

```javascript
// Toggle (buka/tutup bergantian)
navbarNav.classList.toggle("active");

// Remove (pasti tutup, tidak peduli state sebelumnya)
navbarNav.classList.remove("active");
```

Di sini kita pakai `.remove()` karena kita **pasti** ingin tutup menu, tidak toggle.

---

### Cara Kerja Keseluruhan

**Flow Diagram:**

```
User                Browser                     JavaScript
  │                    │                           │
  │ Klik hamburger     │                           │
  ├───────────────────>│                           │
  │                    │ onclick hamburger         │
  │                    ├──────────────────────────>│
  │                    │                           │ toggle("active")
  │                    │                           │ Menu BUKA ✅
  │                    │                           │
  │ Klik NAVBAR link   │                           │
  ├───────────────────>│                           │
  │                    │ document click event      │
  │                    ├──────────────────────────>│
  │                    │                           │ Cek: contains?
  │                    │                           │ YES (di dalam navbar)
  │                    │                           │ ❌ Tidak tutup menu
  │                    │                           │
  │ Klik di LUAR       │                           │
  ├───────────────────>│                           │
  │                    │ document click event      │
  │                    ├──────────────────────────>│
  │                    │                           │ Cek: contains?
  │                    │                           │ NO (di luar navbar & hamburger)
  │                    │                           │ ✅ remove("active")
  │                    │                           │ Menu TUTUP ✅
  │<───────────────────┤                           │
```

---

### Contoh Skenario

#### Skenario 1: Klik di Hamburger Menu

```javascript
e.target = <a id="hamburger-menu">  // Yang diklik
hamburger.contains(e.target) = true  // Klik di hamburger
// Kondisi: !true && ... = false
// ❌ Tidak masuk if, menu TIDAK ditutup
```

Benar! Karena klik hamburger sudah di-handle oleh `.onclick` (toggle).

---

#### Skenario 2: Klik di Link Navigation

```javascript
e.target = <a href="#about">Tentang Kami</a>  // Yang diklik
navbarNav.contains(e.target) = true  // Klik di dalam navbar
// Kondisi: ... && !true = false
// ❌ Tidak masuk if, menu TIDAK ditutup
```

Benar! User lagi klik menu, jangan tutup dulu.

---

#### Skenario 3: Klik di Area Luar (Background)

```javascript
e.target = <body>  // Yang diklik (area kosong)
hamburger.contains(e.target) = false  // BUKAN hamburger
navbarNav.contains(e.target) = false  // BUKAN navbar
// Kondisi: !false && !false = true && true = true
// ✅ Masuk if, menu DITUTUP!
```

Perfect! User klik di luar, menu auto-close.

---

### Kenapa Pakai `.contains()` bukan `===`?

**Bayangkan struktur HTML:**

```html
<a id="hamburger-menu"> <i data-feather="menu"></i> ← Icon di dalam </a>
```

Kalau user klik **icon** (bukan tag `<a>`):

```javascript
// Pakai === (Salah!)
e.target === hamburger; // false (karena e.target = <i>, bukan <a>)

// Pakai .contains() (Benar!)
hamburger.contains(e.target); // true (karena <i> ada di dalam <a>)
```

`.contains()` cek **element dan semua child-nya**, jadi lebih robust!

---

## 📚 Konsep yang Dipelajari

Dari implementasi menu sidebar ini, kamu sudah belajar:

### CSS:

1. **Media Query Styling** - Override style untuk breakpoint spesifik
2. **Display Block vs Inline** - Pengaruhnya terhadap clickable area
3. **Transform Origin** - Mengatur titik awal animasi transform
4. **ScaleX** - Animasi resize horizontal
5. **Specificity** - Selector lebih spesifik override yang general

### JavaScript:

1. **Event Delegation** - Event listener di document level
2. **Element.contains()** - Cek apakah element adalah parent/child
3. **Event Object** - Menggunakan `e.target` untuk tau apa yang diklik
4. **Conditional Logic** - Multiple conditions dengan `&&` operator
5. **classList Methods** - `.toggle()` vs `.remove()` vs `.add()`

---

## 🎓 Rangkuman

### Files Modified:

- **CSS:** [style.css:117-131](../css/style.css#L117-L131)
- **JavaScript:** [script.js:10-17](../js/script.js#L10-L17)
- **Commit:** `feat: Menu Sidebar`

---

Selamat! Menu sidebar-mu sekarang cantik dan user-friendly! 🎉
