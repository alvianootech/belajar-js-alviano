// Tugas Bonus — FizzBuzz
// Cetak 1 sampai 100 dengan aturan FizzBuzz.

// TODO: perulangan 1..100
//   - kelipatan 3 dan 5 → "FizzBuzz"
//   - kelipatan 3       → "Fizz"
//   - kelipatan 5       → "Buzz"
//   - selain itu        → angka

for (let i =1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizzbuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}