console.log("Home_Task");
console.log("");

// 1. Buat 2 buah looping menggunakan for loop!
// 2. Buat 2 buah looping menggunakan for while!
// 3. Buat 2 buah looping menggunakan for do-while!
// 4. Buat 1 buah looping untuk mengeluarkan nilai dari sebuah array!

//Shahnaz Ferdiansyah
//BE Class

console.log("1. ");

for (let i = 0; i < 3; i++) {
  console.log("perulangan ", i);
}

for (let i = 100; i > 95; i--) {
  console.log("No : ", i);
}

console.log("");
console.log("2. ");

let a = 10;
while (a <= 15) {
  console.log(a);
  a++;
}
let b = -100;
while (b < -98) {
  console.log(b);
  b++;
}

console.log("");
console.log("3. ");

let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);

let y = -96;
do {
  console.log(y);
  y++;
} while (y <= -90);

console.log("");
console.log("4. ");

let Laptop = ["CPU", "GPU", "RAM", "ROM"];

for (let i = 0; i < Laptop.length; i++) {
  console.log(Laptop[i]);
}
