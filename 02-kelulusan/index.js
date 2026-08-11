// Tugas 02 — Cek Kelulusan
// Tentukan status kelulusan dan grade dari sebuah nilai.

const nilai = 40;
let status;
let grade;  // TODO: coba ganti-ganti nilai ini untuk menguji semua kondisi

// TODO: if-else untuk status kelulusan (lulus jika nilai >= 75)
if (nilai >= 75){
    status = "Lulus";
} else {
    status = "Tidak Lulus";
}

// TODO: if-else bertingkat untuk grade A sampai E
if (nilai >= 90) {
    grade = "A";
} else if (nilai >= 80){
    grade = "B";
} else if (nilai >= 70){
    grade = "C";
} else if (nilai >= 60){
    grade = "D";
} else {
    grade = "E";
}

console.log(`Nilai: ${nilai}`);
console.log(`Status: ${status}`);
console.log(`Grade: ${grade}`);