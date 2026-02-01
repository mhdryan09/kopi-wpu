# 🎬 Hero Section - Banner Utama Website

Hero section adalah bagian pertama yang dilihat pengunjung saat membuka website. Di sini kita buat banner dengan background image kopi yang menarik!

---

## 📝 Perubahan File

### 1. HTML - Struktur Hero Section

Tambahkan di [index.html:42-48](../index.html#L42-L48):

```html
<!-- Hero Start -->
<section class="hero" id="home">
	<main class="content">
		<h1>Mari Nikmati Secangkir <span>Kopi</span></h1>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, neque!</p>
		<a href="#" class="cta"> Beli Sekarang </a>
	</main>
</section>
<!-- Hero End -->
```

**Struktur:**
- `<section class="hero">` = Container utama dengan background image
- `<main class="content">` = Konten text di dalam hero
- `<h1>` = Judul besar dengan highlight di kata "Kopi"
- `<p>` = Deskripsi singkat
- `<a class="cta">` = Tombol Call-to-Action

---

### 2. CSS - Styling Hero Section

Tambahkan di [style.css:84-140](../css/style.css#L84-L140):

#### A. Container Hero dengan Background Image

```css
.hero {
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-image: url("../img/hero.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
}
```

**Penjelasan:**
- `min-height: 100vh` = Tinggi minimal satu layar penuh (100% viewport height)
- `display: flex` + `align-items: center` = Konten berada di tengah secara vertikal
- `background-image: url("../img/hero.jpg")` = Gambar kopi sebagai background
- `background-size: cover` = Gambar memenuhi seluruh area (tidak ada ruang kosong)
- `background-position: center` = Gambar terpusat
- `position: relative` = Agar pseudo-element `::after` bisa diposisikan

---

#### B. Gradient Overlay di Bawah

```css
.hero::after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 30%;
	bottom: 0;
	background: linear-gradient(0deg, rgba(1, 1, 3, 1) 8%, rgba(255, 255, 255, 0) 50%);
}
```

**Apa ini?**
- `::after` = Pseudo-element untuk membuat layer gradient di atas background
- `position: absolute` + `bottom: 0` = Gradient menempel di bagian bawah
- `height: 30%` = Gradient setinggi 30% dari hero section
- `linear-gradient(0deg, ...)` = Gradient dari bawah ke atas
  - `rgba(1, 1, 3, 1)` = Hitam pekat di bagian bawah (8%)
  - `rgba(255, 255, 255, 0)` = Transparan di bagian atas (50%)

**Fungsi:** Memberikan transisi smooth dari hero ke section berikutnya.

---

#### C. Konten Text

```css
.hero .content {
	padding: 1.4rem 7%;
	max-width: 60rem;
}
```

**Penjelasan:**
- `padding: 1.4rem 7%` = Konsisten dengan padding navbar
- `max-width: 60rem` = Lebar maksimal 600px (agar text tidak terlalu lebar, mudah dibaca)

---

#### D. Heading (Judul)

```css
.hero .content h1 {
	font-size: 5em;
	color: #fff;
	text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
	line-height: 1.2;
}

.hero .content h1 span {
	color: var(--primary);
}
```

**Penjelasan:**
- `font-size: 5em` = Ukuran sangat besar untuk menarik perhatian
- `color: #fff` = Putih agar kontras dengan background
- `text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5)` = Bayangan text agar lebih jelas dibaca
- `line-height: 1.2` = Jarak antar baris lebih rapat
- `h1 span` warna primary (#b6895b) untuk highlight kata "Kopi"

---

#### E. Paragraph

```css
.hero .content p {
	font-size: 1.6rem;
	margin-top: 1rem;
	line-height: 1.4;
	font-weight: 100;
	text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
	mix-blend-mode: difference;
}
```

**Trivia Penting:**
- `font-weight: 100` = Text tipis/ringan (elegant look)
- `mix-blend-mode: difference` = Mode blending agar text tetap terlihat di background apapun
  - Jika background terang → text jadi gelap
  - Jika background gelap → text jadi terang

---

#### F. Tombol CTA (Call-to-Action)

```css
.hero .content .cta {
	margin-top: 1rem;
	display: inline-block;
	padding: 1rem 3rem;
	background-color: var(--primary);
	color: #fff;
	font-size: 1.4rem;
	border-radius: 0.5rem;
	box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
}
```

**Penjelasan:**
- `display: inline-block` = Link jadi seperti button (bisa dikasih padding)
- `padding: 1rem 3rem` = Vertical 10px, horizontal 30px (tombol cukup besar)
- `background-color: var(--primary)` = Warna coklat keemasan (#b6895b)
- `border-radius: 0.5rem` = Sudut tombol melengkung sedikit
- `box-shadow` = Bayangan halus agar tombol terlihat "mengambang"

---

## 🎨 Konsep Penting

### 1. Viewport Height (vh)

```css
min-height: 100vh;
```

- `vh` = Viewport Height (tinggi layar)
- `100vh` = 100% tinggi layar
- Berbeda dengan `%` biasa yang relatif terhadap parent element
- Hero section selalu full screen di device apapun

### 2. Flexbox untuk Centering

```css
display: flex;
align-items: center;
```

Cara paling mudah untuk center konten secara vertikal. Tanpa ini, konten akan menempel di atas.

### 3. Background Cover vs Contain

```css
background-size: cover;  /* Yang kita pakai */
```

- `cover` = Gambar memenuhi area, mungkin terpotong
- `contain` = Gambar utuh, mungkin ada ruang kosong

Untuk hero section, `cover` lebih bagus agar tidak ada ruang kosong.

### 4. Pseudo-element ::after

```css
.hero::after { /* ... */ }
```

- Membuat element "virtual" setelah `.hero`
- Tidak perlu tambah HTML
- Cocok untuk effect dekoratif seperti gradient overlay

### 5. Text Shadow

```css
text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
```

Format: `x-offset y-offset blur-radius color`
- `1px 1px` = Bayangan ke kanan-bawah 1px
- `3px` = Blur/kabur sejauh 3px
- `rgba(1, 1, 3, 0.5)` = Hitam semi-transparan

**Fungsi:** Text lebih mudah dibaca di atas background image yang sibuk.

---

## 🖼️ Persiapan Image

Siapkan gambar hero dengan spesifikasi:
- **Ukuran:** Minimal 1920x1080px (Full HD)
- **Format:** JPG (ukuran file lebih kecil)
- **Path:** Letakkan di `img/hero.jpg`
- **Subject:** Gambar kopi/kafe yang menarik

**Tips:**
- Pastikan area tengah/kiri gambar tidak terlalu ramai (agar text tetap jelas)
- Gunakan gambar dengan resolusi tinggi agar tidak pecah
- Compress gambar dengan tools seperti TinyPNG agar loading cepat

---

## 📱 Responsive Behavior

Hero section sudah responsive otomatis karena:
1. **Font pakai `em`** → Mengikuti base font-size dari media queries
2. **Padding pakai `rem`** → Ikut menyesuaikan
3. **`min-height: 100vh`** → Selalu full screen di device apapun
4. **`background-size: cover`** → Gambar selalu memenuhi area

Di mobile (font-size 55%), semua text otomatis mengecil proporsional.

---

## 🎓 Rangkuman

**Yang Ditambahkan:**
- **HTML:** Section hero dengan heading, paragraph, dan CTA button
- **CSS:** Styling lengkap dengan background image, gradient overlay, dan text styling

**Teknik yang Dipakai:**
1. `100vh` untuk full-screen section
2. Flexbox untuk vertical centering
3. `background-size: cover` untuk background image
4. `::after` untuk gradient overlay
5. `text-shadow` untuk keterbacaan text
6. `mix-blend-mode: difference` untuk contrast otomatis

**Files Modified:**
- HTML: [index.html:42-48](../index.html#L42-L48)
- CSS: [style.css:84-140](../css/style.css#L84-L140)

---

Selamat! Hero section-mu sekarang terlihat profesional! 🎉
