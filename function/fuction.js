// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/
yazdir();

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {
  console.log("merhaba");
}

yazdir(); //! invoke, call, cagirma
yazdir();

//* ORNEK2:
//*************************************************/

function selamla(ad, soyAd = "") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
selamla("Ayse");
selamla("John");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/

function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
  // return sonuc;
  return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980));

//* ORNEK4:
//*****************************************************/

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}

console.log(tekCift(5));
console.log(tekCift(2));

//* ORNEK4:
//*****************************************************/
const a = +prompt("Bir sayi giriniz:");
console.log(tekCift(a));

// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

console.log(tekCift1(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9));

console.log("Girilen sayilarin en buyugu:", buyukBul(9, 10));

//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//**************************************************/
const topla = function (s1, s2) {
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  // console.log("SONUC:", sonuc);
  return sonuc;
};

hesapla(3, 5, "+");
console.log(hesapla(4, 3, "/"));

// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

// console.log("**** ARROW ******");

// //* ORNEK: Silindir Hacmi
// //************************************************/

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// // console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

// //* ORNEK: Yas hesapla
// //************************************************/

// const tarih = Number(prompt("Dogum Tarihini giriniz:"));

// //! Arrow Func yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// //* alternatif
// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// // console.log("YASINIZ:" + yasHesapla(tarih));
// console.log("YASINIZ:" + yasHesaplaKisa(tarih));

// //?-----------------------------------------

// // console.log("YASINIZ:" + yasHesapla2(tarih));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };
// //?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla3(tarih));

// //! Func Declaration yontemi ile tanimlama
// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// }
// //?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

let stringResult = "1,1";
// f(n) = f(n-1) + f(n-2)
const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2;
  }

  return fib2;
};

const n = +prompt("n terimini giriniz:");
if (n <= 0) {
  console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
} else {
  console.log(`FIBO(${n})= ${fibo(n)}`);
  console.log(stringResult);
}

// ? =================================================
// ?           FONKSİYONLAR - RECURSIVE
// ? ================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alınabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamini
//* hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("****** 2 - RECURSION ********");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const b = +prompt("n terimini giriniz:");
console.log(`FIBO(${b})= ${fibo(b)}`);

// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let sayi1 = 5; //! Global Scope
console.log(sayi1); //! 5

const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1); //! 22
};
fonks1();

console.log(++sayi1); //! 23
console.log(sayi1); //!23

//? --------------------------------------
const sayi2 = 7; //! Global scope
console.log(sayi2); //! 7

const fonks2 = () => {
  const sayi2 = 11; //! Function-scope
  console.log(sayi2); //! 11
};

fonks2();
console.log(sayi2); //!7

if (sayi2 === 8) {
  let sonuc = "Merhaba";
} else {
  sonuc = "Nasilsin"; //! Hoisting oluyor, yani degisken global hale geliyor.
  // console.log(sonuc);
}

console.log(sonuc);