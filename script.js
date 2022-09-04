
  

 //********************************************************************* */ asal sayıları bulma
//*******************1.yöntem
 //let girilen = +prompt(`lütfen bir sayı giriniz`);
 //let arttır = 0;
 //if (girilen < 2 ){
  // console.log(`${girilen} sayısı asal değildir başka sayı giriniz`)}
//else {

  // for (let i=2; i<girilen; i++){
   //   if (girilen % i== 0){
    //     arttır +=1}
    //  }
//arttır > 0 ? (console.log(`girilen değer asal değilidr`)) : (console.log(`girilen değer asaldır`))}

//***************** *2.yöntem
//const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
//let asal = true;

//if (sayi <= 1) {
  //alert("Sayi 1'den buyuk olmalidir.");
//} else {
  //for (let i = 2; i < sayi; i++) {
   // if (sayi % i === 0) {
     // asal = false;
     // break;
    //}
 // }

  //const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
  //console.log(`${sayi} ${sonuc}`); }


  //********************************************************console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.


//if ile test edilmek istenen test edilir ancak tekrar sorgu ekranı açılmaz bunun için whilw kullanılmalı

//let not = Number(prompt("0-100 arası bir not girin"));
//while(not < 0 || not > 100){
   //console.log("0-100 arasında giriniz ");
    //let not = Number(prompt("0-100 arası not girin"))
//}
//console.log("thnks");



//let not1;
//do {
  //not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
  //if (not1 < 0 || not1 > 100) {
   // console.log("Not 0-100 arasinda olmaldir.");
  //}
//} while (not1 < 0 || not1 > 100);

//console.log("Giridiginiz Not:", not1);





 // ********************************************************* 5 HAKLI TAHMİN OYUNU *********** SUDO KOD ===>>>>>
//* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)


//* let hak = 5;
//const rastgele = Math.round(Math.random()*100);
//let tahmin;
//let istek = true;

//while(istek){
    //do{
       // tahmin = Number(prompt("tahmin sayiyi giriniz:"));
      //  hak-=1;
       // if(tahmin===rastgele){
         //   console.log(`Tebrikler ${5-hak} kere de bildiniz.`)
       //     break;
       // }else if(tahmin<rastgele){
       //     console.log("Arttır")
       // }else if(tahmin>rastgele){
       //     console.log("Azalt")
      //  }
    //}while(hak>0);
    
   // if(tahmin!==rastgele){
     //   console.log("Uzgunuz oyunu kaybettiniz")
    //}

   // const tercih = prompt("Tekrar oynamak ister misiniz? E veya e giriniz!")
   // if(tercih === "E" || tercih === 'e'){
   //     istek = true;
   //     hak=5;
 //   }else if(tercih !== 'E' || tercih !== 'e'){
  //      istek = false;
 //   }
//}


//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

//*********************************************************console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//********************************************* */
//yazdir();

//! Fonksiyonun tanimlanmasi (declaration)
//function yazdir() {
 // console.log("merhaba");
//}

//yazdir(); //! invoke, call, cagirma
//yazdir();

//* ORNEK2:
//*************************************************/

//function selamla(ad, soyAd = "") {
//  console.log(`Merhaba ${ad} ${soyAd}`);
//}

//selamla("Can", "Yilmaz");
//selamla("Canan", "Ozturk");
//selamla("Ayse");
//selamla("John");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/

//function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
  // return sonuc;
  //return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
//}

//const mesaj1 = yasHesapla("Elif Can", 1990);
//console.log(mesaj1);
//console.log(yasHesapla("Veli Canan", 1980));

//* ORNEK4:
//*****************************************************/

//function tekCift(sayi) {
 // return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
//}

//console.log(tekCift(5));
//console.log(tekCift(2));


//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
//const tekCift1 = function (sayi) {
  //return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
//};

//console.log(tekCift1(5));


//*ÖRNEK 
//****************************************************** */
//const buyukBul =function(n1, n2, n3= -Number.MAX_VALUE){
 // let enBuyuk;
 // if (n1 >= n2 && n1 >= n3) {
 //   enBuyuk = n1;

 // } else if (n2 >= n1 && n2 >= n3) {
 //   enBuyuk = n2

 // } else if (n3 >= n1 && n3 >= n2) {
 //   enBuyuk = n3

 // }
 // return ; enBuyuk;


//};

//const n1 = +prompt("Sayi1:");
///const n2 = +prompt("Sayi2:");
//const n3 = +prompt("Sayi3:");

//console.log("Girilen sayıların en buyugu :", buyukBul(n1, n2, n3));



//let sentence = `hello world bu nasıl iş böyle`
//let a = sentence.split(" ")
//console.log(a)


// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

//console.log("**** ARROW ******");

//* ORNEK: Silindir Hacmi
//************************************************/

//const r = Number(prompt("yaricap giriniz:"));
//const h = Number(prompt("yukseklik giriniz:"));

//const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
//console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

//* ORNEK: Yas hesapla
//************************************************/

//const tarih = Number(prompt("Dogum Tarihini giriniz:"));

//! Arrow Func yontemi ile tanimlama
//const yasHesapla = (tarih) => {
  //const yas = new Date().getFullYear() - tarih;
  //return yas;
//};

// console.log("YASINIZ:" + yasHesapla2(tarih));
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//! Func Expression yontemi ile tanimlama
//const yasHesapla2 = function (tarih) {
  //const yas = new Date().getFullYear() - tarih;
  //return yas;
//};

//console.log("YASINIZ:" + yasHesapla(tarih));

//const sentence = prompt("lütfen bi cümle giriniz")


//*********************************ÖRNEK */
//!Run Length
//!Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
//function runLength(str) {
  // solution 1
 // let result = [];
  //let arr = str.toLowerCase().split("").join("").match(/(.)\1*/g);
  //for (let i = 0; i < arr.length; i++) {
    //result.push(arr[i].length + arr[i][0]);
  //}
  //console.log(arr)
  //console.log(arr.length)
 // return result.join("") }
 
  //console.log(runLength(`hello world`))



  //***********************************ÖRNEK********** */
  //!Have the function LetterCount(str) take the str parameter being passed and return the first word with the
//!greatest number of repeated letters.
//!For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1.
//!Words will be separated by spaces.

//unction letterCount(str) {
//  let count2 = 0;
//  let count1 = 0;
//  let greatestWord = "";
//  let newArr = str.split(" ");
//  for (const x of newArr) {
  //  for (const y of x) {
  //    for (var i = 0; i < x.length; i++) {
    //    if (x[i] == y) {
     //     count1++;
     //   }
      //}
     // if (count1 > count2) {
    //    count2 = count1;
     //   greatestWord = x;
     //   count1 = 0;
     // } else {
      //  count1 = 0;
    //  }
   // }
 // }
  //if (count2 >= 2) {
 //   return greatestWord;
 // } else {
 //   return -1;
 /// }
//}

//*******************************ÖRNEK***** */
//For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
//There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2, so the answer is 3.
//For a = [2, 2], the output should be solution(a) = 2;
//For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

//function firstDuplicate(arr) {
 // let elementSet = new Set();
 // console.log(elementSet)
 // for (let i = 0; i < arr.length; i++) {
//    if (elementSet.has(arr[i])) return arr[i];
//    elementSet.add(arr[i]);
 //   console.log(elementSet)
    
    
 // }
//  return -1;
  

//}

//console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))








//********************************ÖRNEK SORU(GRUP) */
//****************ÇÖZÜM1

/*const toLatin = {
  "I" : 1,
  "V": 5,
  "X":10,
  "L":50,
  "C" : 100,
  "D" : 500,
  "M" : 1000
}

const willBeTranslated = "III"
let total = toLatin[willBeTranslated[willBeTranslated.length-1]]
console.log(total)
let beforeTheNum = toLatin[willBeTranslated[willBeTranslated.length-1]];
console.log(beforeTheNum)
const romanToLatin = (a) => {
  const newArray = a.split("").reverse()
  console.log(newArray)
  for (let i of newArray.slice(1)){
     if (toLatin[i] < beforeTheNum){
          total -= toLatin[i];
         beforeTheNum = toLatin[i];
      }else{
          total += toLatin[i];
          beforeTheNum = toLatin[i]
      }
  }
  return total
}
//console.log(romanToLatin(willBeTranslated))
console.log(romanToLatin("MCMXC"))*/
//(hatalı çözüm yapmışşşş splitin işlevi neee ve total neden 1 den başlıyor üstteki için)

//**********************ÇÖZÜM2 

//let ert = "MCMXC";
//let a = {
 // "I": 1, "V":5 ,"X": 10,"L":50,"C":100,"D":500,"M":1000
//};
//let toplam = 0
//nav = (ek) =>{
//let at = ek.split("").reverse()
//for (i=0;i< at.length;i++){
   // if( i == (at.length - 1)){
        //toplam +=  a[at[0]];
        //return toplam 
    //}
    
      //if (a[at[i]] == a[at[i + 1]]) {
        //toplam += a[at[i]];
      //} else if (a[at[i]] > a[at[i + 1]]) {
       // toplam -=  a[at[i + 1]];
      //} else {
      //  toplam += a[at[i + 1]];
      //}
//}
//}
//console.log(nav("MCMXC"));


/*******ARRAYS ÖRNEKLERİ************************* */
/**************ÖRNEK1 */

/*const dizi = [-5, 15, 22, -4, 45, 78];

const topla = (n) => {
  let negatifler = 0;
  let pozitifler = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler += n[i];
    } else {
      pozitifler += n[i];
    }
  }
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);  */

/**************************ÖRNEK2 */

/*const dizi = [-5, 15, 22, -4, 45, 78];
const negatifler = [];
const pozitifler = [];
const dizilereAyır = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizilereAyır(dizi);
console.log(negatifler);
console.log(pozitifler);*/


/*******************ÖRNEK3 */

/*const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

let adSoyad = [];
for (let i in adlar){
    adSoyad[i] = adlar[i]+" "+soyAdlar[i];
}
console.log(`Ad Soyad birleşimi : `,adSoyad);


const birlestir = (arr1, arr2) => {
    let adSoyad = [];
    for (let i in arr1) {
      adSoyad[i] = arr1[i] + " " + arr2[i];
    }
    
}
birlestir(adlar, soyAdlar);
console.log(`Ad Soyad birleşim fonksiyon ile : `, adSoyad);*/



/***********************ÖRNEK4*** */

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

/*const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "ahmet",
  "can",
  "mehmet",
  "cem",
];
let counter = 0;
const diziİçinde = (arr, name) =>{
for (let i in arr){
  if(name == arr[i])
    counter++
}
  if(counter >=1){
    return `liste ${name} içeriyor`
  }else {
    return `listede ${name} bulunmuyor` 
  }
}
 const studentName = prompt("enter name").toLowerCase();
 console.log(diziİçinde(students, studentName))


/*return counter===0 ? `Bulunamadı` : `${counter} times we have ${search} in students`;*/

/*********  farklı çözümmmmmm  ***********/ 
/*const howMany = (name,arr) => {
  if (arr.includes(name)){
      const quantity = arr.filter(a => a == name).length;
      return `${name} found ${quantity} times.`;
  }else{
      return `${name} found 0 times.`;
  }
}

console.log(howMany("ahmet",students))  */





