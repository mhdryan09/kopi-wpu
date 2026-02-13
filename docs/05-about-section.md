# 👥 About Section - Tentang Kami

Section ini menampilkan informasi kedai kopi dengan layout dua kolom — gambar di kiri, teks di kanan.

---

## 📝 Perubahan File

### 1. HTML - Struktur About Section

Tambahkan di [index.html:51-68](../index.html#L51-L68):

```html
<!-- About Start -->
<section id="about" class="about">
	<h2><span>Tentang</span> Kami</h2>

	<div class="row">
		<div class="about-img">
			<img src="img/tentang-kami.jpg" alt="Tentang Kami" />
		</div>

		<div class="content">
			<h3>Kenapa Memilih Kopi Kami?</h3>
			<p>Lorem ipsum dolor sit amet consectetur...</p>
			<p>Lorem ipsum, dolor sit amet consectetur...</p>
		</div>
	</div>
</section>
<!-- About End -->
```

**Struktur:**
- `id="about"` = Target anchor link dari navbar (`href="#about"`)
- `<div class="row">` = Container flexbox untuk dua kolom
- `<div class="about-img">` = Kolom kiri (gambar)
- `<div class="content">` = Kolom kanan (teks)

---

### 2. CSS - Styling About Section

Tambahkan di [style.css:142-186](../css/style.css#L142-L186):

#### A. Container Section

```css
.about {
	padding: 8rem 7% 1.4rem;
}
```

- `padding: 8rem 7% 1.4rem` = Atas 8rem, kiri-kanan 7%, bawah 1.4rem
- `8rem` atas yang besar supaya konten tidak tertutup navbar yang fixed

---

#### B. Heading

```css
.about h2 {
	text-align: center;
	font-size: 2.6rem;
	margin-bottom: 3rem;
}

.about h2 span {
	color: var(--primary);
}
```

- Judul di tengah dengan kata "Tentang" berwarna coklat primary

---

#### C. Layout Dua Kolom (Flexbox)

```css
.about .row {
	display: flex;
}

.about .row .about-img {
	flex: 1 1 45rem;
}

.about .row .content {
	flex: 1 1 35rem;
	padding: 0 1rem;
}
```

**Trivia — `flex: 1 1 45rem` artinya apa?**

```css
flex: [grow] [shrink] [basis];
```

- `grow: 1` = Boleh membesar mengisi ruang kosong
- `shrink: 1` = Boleh mengecil jika ruang tidak cukup
- `basis: 45rem` = Ukuran awal kolom (450px)

Kolom gambar (`45rem`) lebih lebar dari kolom teks (`35rem`), sehingga gambar mengambil porsi lebih besar.

---

#### D. Image

```css
.about .row .about-img img {
	width: 100%;
}
```

- `width: 100%` = Gambar mengisi penuh lebar kolom-nya

---

#### E. Teks Konten

```css
.about .row .content h3 {
	font-size: 1.8rem;
	margin-bottom: 1rem;
}

.about .row .content p {
	margin-bottom: 0.8rem;
	font-size: 1.4rem;
	font-weight: 100;
	line-height: 1.6;
}
```

- `font-weight: 100` = Text tipis, terkesan ringan dan elegan
- `line-height: 1.6` = Jarak antar baris agak longgar agar nyaman dibaca

---

### 3. CSS Responsive — Tablet (≤758px)

Tambahkan di dalam `@media (max-width: 758px)` di [style.css:133-154](../css/style.css#L133-L154):

```css
.about .row {
	flex-wrap: wrap;
}

.about .row .about-img img {
	height: 24rem;
	object-fit: cover;
	object-position: center;
}

.about .row .content {
	padding: 0;
}

.about .row .content h3 {
	margin-top: 1rem;
	font-size: 2rem;
}

.about .row .content p {
	font-size: 1.6rem;
}
```

**Penjelasan perubahan di tablet:**

- `flex-wrap: wrap` = Kolom-kolom "turun ke bawah" jika tidak muat (dari dua kolom → satu kolom)
- `height: 24rem` + `object-fit: cover` = Gambar punya tinggi tetap dan tidak gepeng/stretch
- `object-position: center` = Bagian tengah gambar yang ditampilkan saat terpotong
- Font size di-naikkan sedikit karena base `rem` lebih kecil di tablet

---

## 🎨 Konsep Penting

### 1. Padding Top yang Besar

```css
padding: 8rem 7% 1.4rem;
```

Navbar kita `position: fixed` — artinya navbar "menempel" dan **tidak memakan ruang** di halaman. Tanpa padding top yang cukup, konten about akan tertutup navbar!

---

### 2. Flex Wrap untuk Responsive

```css
/* Desktop: dua kolom berdampingan */
.about .row { display: flex; }

/* Tablet: satu kolom bertumpuk */
.about .row { flex-wrap: wrap; }
```

Dengan `flex-wrap: wrap`, saat layar mengecil dan kolom tidak muat berdampingan, kolom otomatis turun ke bawah — tanpa perlu mengubah HTML!

---

### 3. object-fit: cover

```css
height: 24rem;
object-fit: cover;
```

Sama seperti `background-size: cover` yang kita pakai di hero, tapi untuk tag `<img>`. Gambar akan memotong bagian yang tidak muat, daripada gepeng/terdistorsi.

```
object-fit: fill   → gambar gepeng/stretch ❌
object-fit: cover  → gambar terpotong, tidak gepeng ✅
object-fit: contain → gambar utuh, ada ruang kosong
```

---

## 🎓 Rangkuman

**Yang Ditambahkan:**
- **HTML:** Section about dengan layout dua kolom (gambar + teks)
- **CSS:** Styling flexbox dua kolom + responsive ke satu kolom di tablet
- **Image:** `img/tentang-kami.jpg`

**Teknik yang Dipakai:**
1. `padding-top` besar untuk menghindari navbar fixed
2. Flexbox `flex: grow shrink basis` untuk dua kolom proporsional
3. `flex-wrap: wrap` untuk responsive satu kolom di tablet
4. `object-fit: cover` agar gambar tidak gepeng

**Files Modified:**
- HTML: [index.html:51-68](../index.html#L51-L68)
- CSS: [style.css:142-186](../css/style.css#L142-L186)
- CSS Responsive: [style.css:133-154](../css/style.css#L133-L154)
- Image: `img/tentang-kami.jpg`
