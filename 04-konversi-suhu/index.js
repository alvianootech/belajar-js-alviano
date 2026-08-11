// Tugas 04 — Konversi Suhu
// Buat fungsi konversi yang ME-RETURN hasil, lalu panggil beberapa kali.

// TODO: fungsi celsiusToFahrenheit(celsius)
function celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
}

// TODO: fungsi celsiusToReamur(celsius)
function celsiusToReamur(c) {
    return c * 4 / 5;
}

// TODO: panggil kedua fungsi dengan suhu berbeda dan tampilkan hasilnya
console.log("25°C = " + celsiusToFahrenheit(25) + "°F");
console.log("25°C = " + celsiusToReamur(25) + "°R");
console.log("100°C = " + celsiusToFahrenheit(100) + "°F");
console.log("100°C = " + celsiusToReamur(100) + "°R");