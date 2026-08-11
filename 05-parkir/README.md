# Tugas 05 — Tarif Parkir

## Tujuan
Menggabungkan semua materi: variabel, pengkondisian, perulangan, dan fungsi.

## Instruksi
Kamu diminta membuat program penghitung tarif parkir motor dengan aturan:

- **1 jam pertama:** Rp3.000
- **Jam berikutnya:** Rp2.000 per jam
- **Tarif maksimal:** Rp10.000 (selama apa pun parkir, bayarnya tidak lebih dari Rp10.000)

Langkah pengerjaan:

1. Buat **fungsi** `hitungTarif(jam)` yang me-return biaya parkir. Di dalam fungsi, gunakan **perulangan** untuk menjumlahkan tarif jam demi jam. Ingat: jam pertama harganya beda!
2. Jangan lupakan aturan tarif maksimal — pakai **pengkondisian** di sini.
3. Simpan lama parkir 5 kendaraan di dalam **variabel**: 2 jam, 5 jam, 1 jam, 9 jam, dan 3 jam.
4. Tampilkan biaya tiap kendaraan, lalu hitung total pendapatan parkir hari itu.

## Contoh Output
```
===== LAPORAN PARKIR =====
Kendaraan 1 (2 jam): Rp5000
Kendaraan 2 (5 jam): Rp10000
Kendaraan 3 (1 jam): Rp3000
Kendaraan 4 (9 jam): Rp10000
Kendaraan 5 (3 jam): Rp7000
---------------------------
Total pendapatan   : Rp35000
```

## Tantangan Tambahan (tidak wajib)
Tandai kendaraan yang kena tarif maksimal, contoh: `Kendaraan 2 (5 jam): Rp10000 (tarif maksimal)`.

## Penjelasan
> Tulis di sini (3–5 kalimat, bahasamu sendiri):
> - Bagaimana caramu menghitung tarif di dalam fungsi? Kenapa jam pertama perlu diperlakukan berbeda di dalam perulangan?
> - Apa yang terjadi pada pendapatan parkir kalau aturan tarif maksimal dihapus?

// Saya menghitung tarif di dalam fungsi dengan menggunakan perulangan untuk menghitung biaya parkir setiap jam, tapi jam pertamanya memiliki tarif parkir yang berbeda dengan jam setelahnya.
// setelah itu saya memakai perkondisian untuk membuat batas tarif yang maksimalnya adalah 10ribu, dan kalau tarif maksimalnya dihapus maka kendaraan yang parkir lama banget akan membayar lebih mahal