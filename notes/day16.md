# Day 16 - Function: Perkalian Dua Angka

## 📋 Review Kode

### Status
✅ **LULUS** - Konsep function sudah dipahami dengan baik!

### Penilaian (8.8/10)
- Pemahaman konsep: 8/10
- Logika: 9/10
- Sintaks: 10/10
- Kerapihan: 9/10
- Ketelitian: 8/10

---

## ✅ Yang Sudah Benar

1. **Function Declaration** - Ditulis dengan benar menggunakan `function` keyword
2. **Parameter** - `a` dan `b` didefinisikan dengan tepat sebagai input
3. **Return Value** - Operasi perkalian (`a * b`) dikembalikan dengan benar
4. **Pemanggilan Function** - `kali(10, 5)` memanggil dengan argumen yang sesuai
5. **Output** - `console.log()` menampilkan hasil dengan string concatenation

---

## 🔧 Yang Bisa Diperbaiki

### 1. Formatting/Spasi
Dalam JavaScript convention, ada spasi sebelum tanda kurung pembuka `{`:

**Sebelum:**
```javascript
function kali(a, b){
    return a * b;
}
```

**Sesudah:**
```javascript
function kali(a, b) {
    return a * b;
}
```

### 2. Penamaan Variable (Opsional)
Saat ini `hasil` sudah cukup jelas. Tapi bisa lebih deskriptif:
```javascript
let hasilPerkalian = kali(10, 5);
```

---

## 🎯 Konsep Penting

### Parameter vs Argumen
- **Parameter**: Variable dalam definisi function `(a, b)`
- **Argumen**: Nilai yang dikirim saat pemanggilan `kali(10, 5)`

### Mengapa `return` Penting?
Tanpa `return`, function tidak mengembalikan nilai, hasil akan `undefined`.

```javascript
function kali(a, b) {
    a * b;  // ❌ Hanya kalkulasi, tidak dikembalikan
}

console.log(kali(10, 5));  // Output: undefined
```

---

## 📚 Pelajaran Berikutnya

Siap lanjut ke **Day 17**! Pelajari konsep:
- Function dengan multiple return statements
- Function scope
- atau Function sebagai parameter (callback)
