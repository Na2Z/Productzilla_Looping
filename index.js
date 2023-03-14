console.log("Lopping");

//perulangan for
console.log("");
console.log("Perulangan For");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let wadah = ["Air", "Udara", "Tanah", "Api"];
for (let a = 0; a < wadah.length; a++) {
  console.log(wadah[a]);
}

//perulangan while
//biasanya digunakan untuk data yg tidak tahu pasti berapa datanya
console.log("");
console.log("Perulangan While");

let i = 1;
while (i <= 15) {
  console.log(i);
  i++;
}

//Perulangan Do While
console.log("");
console.log("Perulangan Do While");

let b = 1;
do {
  console.log(b);
  b++;
} while (b < 0);

let Wadah = {
  Nama: "Sunjoyo",
  Umur: 34,
  Alamat: "Jl. Ahmad Yani No 56",
};

for (let i in Wadah) {
  console.log(`Properti ${i} memiliki nilai ${Wadah[i]}`);
}
