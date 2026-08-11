# Tugas 02 — Cek Kelulusan

## Tujuan
Melatih pengkondisian `if` / `else if` / `else`.

## Instruksi
1. Simpan sebuah nilai ujian (0–100) di dalam variabel.
2. Tampilkan status kelulusan:
   - Nilai 75 ke atas → "Lulus"
   - Di bawah 75 → "Tidak lulus"
3. Tambahkan juga konversi nilai ke grade:
   - 90–100 → A
   - 80–89 → B
   - 70–79 → C
   - 60–69 → D
   - di bawah 60 → E
4. Coba ganti-ganti nilainya dan pastikan semua cabang berjalan benar.

## Contoh Output
```
Nilai: 85
Status: Lulus
Grade: B
```

## Penjelasan
> Tulis di sini (3–5 kalimat, bahasamu sendiri):
> - Bagaimana caramu menyelesaikan tugas ini?
> - Kenapa urutan kondisi if-else kamu susun seperti itu? Apa yang terjadi kalau urutannya dibalik?

// Saya buat variabel untuk simpan nilai ujian siswa, habis itu menggunakan if dan else if untuk saya nentuin status kelulusan dan grade nya.
// IF disusun dari nilai yang paling tinggi dulu ya, baru menurun ke nilai yang paling rendahbiar setiap nilainya bisa masuk ke perkondisian yang benar.
// Kalo urutannya dibalik ya otomatis kondisi yang rendah terpenuhi duluan. jadinya grade nya gak sesuai.