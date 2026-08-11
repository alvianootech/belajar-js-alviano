// Tugas 05 — Tarif Parkir
// Gabungkan variabel, pengkondisian, perulangan, dan fungsi.
//
// Aturan tarif:
//   - 1 jam pertama : Rp3.000
//   - jam berikutnya: Rp2.000 per jam
//   - tarif maksimal: Rp10.000

const tarifPertama = 3000;
const tarifKedua = 2000;
const tarifKetiga = 10000;
let totalTarif;

// TODO: buat fungsi hitungTarif(jam)
// Pakai perulangan untuk menjumlahkan tarif jam demi jam.
// Ingat: jam pertama harganya beda, dan ada tarif maksimal!

function hitungTarif(jam){
    if (jam <= 0){
        return 0;
    }
    totalTarif = tarifPertama;

    for (let i = 1; i < jam; i++){
        totalTarif += tarifKedua;
    } 

    if (totalTarif >= 10000){
        return 10000;
    }
    return totalTarif;
}


// TODO: simpan lama parkir 5 kendaraan dalam variabel
// Kendaraan 1: 2 jam
// Kendaraan 2: 5 jam
// Kendaraan 3: 1 jam
// Kendaraan 4: 9 jam
// Kendaraan 5: 3 jam

const kendaraanSatu = hitungTarif(2);
const kendaraanDua = hitungTarif(5);
const kendaraanTiga = hitungTarif(1);
const kendaraanEmpat = hitungTarif(9);
const kendaraanLima = hitungTarif(3);
const totalPendapatan = (kendaraanSatu + kendaraanDua + kendaraanTiga + kendaraanEmpat + kendaraanLima);

// TODO: tampilkan biaya tiap kendaraan dan total pendapatan hari itu
console.log("\n===== LAPORAN PARKIR =====");
// console.log(`Kendaraan 1: ${totalTarif}`);
console.log(`Kendaraan 1 (2 jam): Rp${kendaraanSatu}`);
console.log(`Kendaraan 2 (5 jam): Rp${kendaraanDua}`);
console.log(`Kendaraan 3 (1 jam): Rp${kendaraanTiga}`);
console.log(`Kendaraan 4 (9 jam): Rp${kendaraanEmpat}`);
console.log(`Kendaraan 5 (3 jam): Rp${kendaraanLima}`);
console.log("--------------------------");
console.log(`Total Pendapatan   : Rp${totalPendapatan}\n`);