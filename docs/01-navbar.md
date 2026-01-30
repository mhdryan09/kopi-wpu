# 🧭 Navbar - Navigation Bar

**Commit:** `feat: Navbar`
**Tanggal:** 30 Januari 2026

## 🎯 Apa yang Dibuat?

Navigation bar (navbar) yang nempel di atas halaman. Jadi meski kita scroll ke bawah, navbar tetep keliatan. Keren kan? Ini namanya **fixed position**.

## 🏗️ Struktur HTML

Navbar kita punya 3 bagian utama:

```html
<nav class="navbar">
  <!-- 1. Logo di kiri -->
  <a href="#" class="navbar-logo">kenangan <span>senja</span>.</a>

  <!-- 2. Menu navigasi di tengah -->
  <div class="navbar-nav">
    <a href="#">Home</a>
    <a href="#about">Tentang Kami</a>
    <a href="#menu">Menu</a>
    <a href="#contact">Kontak</a>
  </div>

  <!-- 3. Icon-icon di kanan -->
  <div class="navbar-extra">
    <a href="#" id="search"><i data-feather="search"></i></a>
    <a href="#" id="shopping-cart"><i data-feather="shopping-cart"></i></a>
    <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
  </div>
</nav>
```

### 💡 Penjelasan Struktur:

- **navbar-logo**: Nama brand kita dengan styling khusus di kata "senja"
- **navbar-nav**: Kumpulan link menu
- **navbar-extra**: Icon-icon seperti search dan shopping cart (pakai Feather Icons)

## 🎨 Styling CSS yang Dipelajari

### 1. **Flexbox untuk Layout**

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Kenapa pakai Flexbox?**
- `display: flex` → Bikin elemen di dalamnya bisa diatur horizontal
- `justify-content: space-between` → Logo di kiri, icon di kanan, menu di tengah
- `align-items: center` → Semua elemen rata tengah secara vertical

### 2. **Fixed Position**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
```

**Penjelasan:**
- `position: fixed` → Navbar nempel terus di posisinya meski kita scroll
- `top: 0; left: 0; right: 0` → Nempel di atas dan full width
- `z-index: 9999` → Angka gede biar navbar selalu di depan elemen lain

### 3. **Background Semi-Transparent**

```css
background-color: rgba(1, 1, 1, 0.8);
```

**Apa itu RGBA?**
- R = Red (1)
- G = Green (1)
- B = Blue (1)
- A = Alpha/Opacity (0.8 = 80% solid)

Jadi backgroundnya hitam tapi agak tembus pandang. Keren buat effect modern!

### 4. **Hover Effect dengan Animasi**

Ini bagian paling asik! Link menu punya efek garis bawah yang muncul pas di-hover:

```css
.navbar .navbar-nav a::after {
  content: "";
  display: block;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid var(--primary);
  transform: scaleX(0);
  transition: 0.2s linear;
}

.navbar .navbar-nav a:hover::after {
  transform: scaleX(0.5);
}
```

**Gimana cara kerjanya?**
- `::after` → Bikin elemen "invisible" setelah link
- `transform: scaleX(0)` → Awalnya garis punya lebar 0 (gak keliatan)
- `transform: scaleX(0.5)` → Pas hover, lebarnya jadi 50%
- `transition: 0.2s` → Animasinya smooth selama 0.2 detik

**Hasilnya:** Garis muncul dari tengah dengan animasi halus. Smooth banget!

### 5. **CSS Variables (Custom Properties)**

```css
:root {
  --primary: #b6895b;
  --bg: #010101;
}

/* Dipake di: */
color: var(--primary);
```

**Kenapa pakai variable?**
- Gampang ganti warna tema di satu tempat aja
- Lebih rapi dan reusable
- Kalau mau ganti warna primary, tinggal ubah di `:root`

## 🔍 Hal Menarik yang Dipelajari

1. **Nested Selector** - `.navbar .navbar-logo span` untuk styling span di dalam logo
2. **Inline-block** - `display: inline-block` biar link bisa dikasih margin horizontal
3. **Border dengan Opacity** - `#b6895b75` → warna dengan opacity langsung di kode hex
4. **Pseudo-element** - `::after` untuk bikin element tambahan tanpa HTML
5. **Transform** - `scaleX()` untuk animasi scale horizontal

## 🎓 Kesimpulan

Di sini kita belajar:
- ✅ Bikin navbar fixed dengan Flexbox
- ✅ Styling hover effect yang keren
- ✅ Pakai CSS variables biar praktis
- ✅ Animasi smooth dengan transition
- ✅ Background semi-transparent dengan RGBA

## 🚀 Next Steps

- [ ] Bikin navbar responsive untuk mobile
- [ ] Tambah functionality untuk hamburger menu
- [ ] Smooth scroll ke section (#about, #menu, dll)

---

**Pro Tips:**
- Coba ubah-ubah nilai `scaleX()` untuk eksperimen effect
- Ganti durasi `transition` biar animasi lebih cepet/lambat
- Mainkan dengan `z-index` buat paham layer element

Happy coding! ☕
