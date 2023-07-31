//1. Let's Form a Sentence
console.log('JAWABAN NO 1')

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here


// ---------------------------------------
console.log(word+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth +" "+seventh);
// ---------------------------------------

console.log(" ")

// 2. Index Accessing - 1 by 1
console.log("JAWABAN NO 2")
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word1 = 'wow JavaScript is so cool';
let exampleFirstWord = word1[0] + word1[1] + word1[2];
let exampleSecondWord = word1[4]+word1[5]+word1[6]+word1[7]+word1[8]+word1[9]+word1[10]+word1[11]+word1[12]+word1[13];
let exampleThirdWord = word1[15]+word1[16];
let exampleForthWord = word1[18]+word1[19];
let exampleFifthWord = word1[21]+word1[22]+word1[23]+word1[24];

console.log('First Word: ' + exampleFirstWord);


// ---------------------------------------
console.log('First Word'+" "+ exampleFirstWord);
console.log("Second Word"+" "+ exampleSecondWord); 
console.log('Third Word'+ " " + exampleThirdWord); 
console.log('Fourth word' +" "+exampleForthWord); 
console.log('Fifth Word' +" "+ exampleFifthWord);
// ---------------------------------------

console.log(" ")

// 3. Breaking Sentence (Again) using Substring\
console.log("JAWABAN NO 3")
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);


// ---------------------------------------
console.log('First Word'+ word3.substring(0, 3));
console.log('Second Word' + word3.substring(4, 14)); 
console.log('Third Word' + word3.substring(15, 17)); 
console.log('Fourth Word' + word3.substring(18, 20)); 
console.log('Fifth Word' + word3.substring(21, 25));
// ---------------------------------------

console.log(" ")

// 4. Breaking Sentence (yet Again) and Count Each Length
console.log("JAWABAN NO 4")
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 =  word4.substring(15, 17);
let exampleForthWord4 =  word4.substring(18, 20);
let exampleFifthWord4 =  word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let SecondWordLength = exampleSecondWord4.length;
let ThirdWordLength = exampleThirdWord4.length;
let FourthWordLength = exampleForthWord4.length;
let FifthWordLength = exampleFifthWord4.length;


console.log('First Word: ' + exampleFirstWord4 +" "+ ', with length: ' + " " + firstWordLength);
console.log('Second Word: ' + exampleSecondWord4 +" "+', with length: ' + " " + SecondWordLength);
console.log('Third Word: ' + exampleThirdWord4 +" "+', with length: ' + " " + ThirdWordLength);
console.log('Fourth Word: ' + exampleThirdWord4 +" "+', with length: ' + " " + FourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord4 +" "+', with length: ' + " " + FifthWordLength);