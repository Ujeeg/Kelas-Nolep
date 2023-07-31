// SOAL NO 1
console.log("SOAL NO 1")

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "Ujeeg", peran = "hello";

if (nama=="") {console.log("nama wajib diisi")
} else if  (peran=='') {
    console.log('Pilih Peranmu untuk memulai game')
} else if (peran=='Ksatria') {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran=='Tabib') {
    console.log(`Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
} else if (peran=='Penyihir') {
    console.log(`Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else {console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')}

//code disini gunakan console.log untuk outputnya


console.log("")

// SOAL NO 2
console.log("SOAL NO 2")

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 40; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 14 ; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 210; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


if (tanggal < 0 || tanggal > 32 ) {
    tanggal = ("Error"); 
} 

if (bulan <0 || bulan > 12 ) {
    month = "Error";}
    else {
        switch (bulan) {
            case 1:
                bulan = "January";
                break;
            case 2:
                bulan = "February";
                break;
            case 3:
                bulan = "March";
                break;
            case 4:
                bulan = "April";
                break;
            case 5:
                bulan = "May";
                break;
            case 6:
                bulan = "June";
                break;
            case 7:
                bulan = "July";
                break;
            case 8:
                bulan = "August";
                break;
            case 9:
                bulan = "September";
                break;
            case 10:
                bulan = "October";
                break;
            case 11:
                bulan = "November";
                break;
            case 12:
                bulan = "December";
                break;
            default:
                bulan = "Error";
            break;
        }
} 

if (tahun < 1900 || tahun > 2200) {
    tahun = ('Error');}



console.log(`${tanggal}`, `${bulan}`, `${tahun}`)
    


//code switch case kamu disini