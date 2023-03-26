console.log("Home Taslk");
console.log("");

/*
1. terdapat sebuah array seperti berikut:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

jika hasil yang perlu didapat dari penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!
0 + 17
1 + 16
2 + 15

2. ada 2 string "hello" dan "world", outputkan huruf yang sama dalam 2 string tersebut

l
0

hint: cara ambil huruf per index
> let huruf = "hello"
> huruf[0]
> h
*/

//Shahnaz Ferdiansyah
//BE Class

console.log("No 1 : ");
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const t = 17;

for (i = 0; i < a.length; i++) {
  for (j = i + 1; j < a.length; j++) {
    if (a[i] + a[j] == t) {
      console.log(`${a[i]}+${a[j]} = ${t}`);
    } else {
      console.log(`${a[i]}+${a[j]} = ${a[i] + a[j]} (Tidak sama dengan 17!)`);
    }
  }
}
console.log("");

console.log("No 2 : ");

const kata1 = "hello";
const kata2 = "world";
let hasil = "";

for (let i = 0; i < kata1.length; i++) {
  for (j = 0; j < kata2.length; j++) {
    if (kata1[i] == kata2[j]) {
      hasil += kata1[i] + " ";
      hasil += j + " \n";
    }
  }
}
console.log(hasil);
