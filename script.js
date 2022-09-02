
//***************************************************** */ ÖDEV1 -HESAP MAKİNASI(2 SAYI 1 İŞLEM İSTE)-

//let numb1= +prompt(`enter your first number`)
//console.log(numb1)
//let numb2 = +prompt (`enter your second number`)
//console.log(numb2)
//let oprt = prompt(`enter your operator`)
//console.log(oprt)
//let result = 0

    //if (oprt == `+`)
       // {result = (numb1 + numb2)}
    //else if (oprt == `-`)
       // {result = (numb1 - numb2)}
    //else if (oprt == `/`)
       // {result = (numb1 / numb2)}
    //else if (oprt == `*`)
      //  {result = (numb1 * numb2)};
    //console.log(result)
    //else
      //console.log(`geçerli değerler giriniz`)



//************************************* */ ÖDEV2 -Clarusway’deki haftalık ders ve etkinlik programınızı, 
// console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
//## Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//## Cuma -> Teamwork
//## Cumartesi ->  InClass + Workshop
//## Pazar -> Self-Study
//## Aksi takdirde -> Yanlis gun girildi.

//let day = prompt (`bugün hangi gün lütfen giriniz`).toLowerCase();
//switch (day) {
   // case `pazartesi`:
    //    faaliyet =`Inclass`;
    //break;
    //case `salı`:
     //   faaliyet =`Inclass`;
    //break;
    //case `çarşamba`:
     //   faaliyet =`Inclass`;
    //break;
    //case `perşembe`:
      //  faaliyet =`Inclass`;
    //break;
    //case `cuma`:
      //  faaliyet=`Teamwork`;
    //break;
    //case `cumartesi`:
       // faaliyet=`InClass + Workshop`;
    //break;
    //case `pazar`:
       // faaliyet=`Self-Study`;
    //break;
    //default:
        //faaliyet=`Yanlış bir şey girdiniz`;
//}
//console.log(`Bugün ki faaliyetiniz: ${faaliyet}`);


//*********************************************************** */ ÖDEV3 -ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//fazla olanlara ise %10 zam yapmak istiyoruz.


//let maas = +prompt (`lütfen maaşınızı giriniz`);
//let aücret = 5250
//if (maas >= aücret)
   //   {ücret = maas*110/100}
//else if (maas < aücret)
     // {ücret = maas*150/100}
   //console.log(`yeni maaşınız: ${ücret}`)


//**************************************************************** */ ODEV4: Kredi Risk Programı
//## Console’dan kişinin gelir ve gider miktarını alan
//## eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir :money_mouth_face:
//## değilse Kredi Verilemez :pleading_face:
//## şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

//let gelir = +prompt(`aylık gelirinizi yazınız`);
//let gider = +prompt(`aylık giderinizi yazınız`);
//let aücret = 5250
//let sonuç = (gelir >= gider + aücret) ? console.log (`kredi kullanabilir`) 
 //     : console.log(`kredi kullanamaz`)
  

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



//*****************************************************************ÖDEV5: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve 
//bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların
 //ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

 //let toplam = 0
 //let n = 0
 
 //while(true){
  //let girilen = prompt(`lütfen alınan puanı giriniz çıkmak için q/Q ya tuşlayınız`);
   // if( girilen == "q" || girilen == "Q" ){
    //console.log(`işlemler sona erdi`)
     //   break 
  //} else if ( Number(girilen)>0 && Number(girilen)<=100){
   // toplam += +girilen
    //n += +1
   // let ort = toplam /n
   // console.log(`toplam: ${toplam}`)
    //console.log(`ortalama : ${ort}`)
  //} else{
    //console.log(`hatalı giriş yapıldı`)}
  //}


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



//********************************ÖENEK SORU ÇÖZÜMLERİ -----29.08.2022------- */
//******ÖRNEK 1 */

// Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year)

// pseudocode:

// (0-99) only divisible by 4 --> leap year
// (100-400) divided by 4 and  if not divisible by 100 --> leap year
// if divisible by 100 and divisible by 400 --> leap year


//***** */ first way:
//const isLeapYear = (year) => {
 //   if (year % 100 === 0) {
 //       if (year % 400 === 0) {
  //          console.log(`${year} is a leap year.`);
  //      } else {
  //          console.log(`${year} is not a leap year.`);
  //      }
    //} else {
     //   if (year % 4 === 0) {
     //       console.log(`${year} is a leap year.`);
      //  } else {
      //      console.log(`${year} is not a leap year.`);
      //  }
   // }
//}

//isLeapYear(64);
//isLeapYear(1900);
//isLeapYear(2000);
//isLeapYear(1912);

//****** */ second way:
//function leapYear(year) {
    //return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//}
//:david-moses:
//11
///:eyvallah:
//7


//*************************ÖRNEK2 */

// Write a JavaScript code to find the area of a triangle.

// pseudocode:
// a, b and c sides of a triangle
// assume bottom = c
// semiperimeter = s
// s = (a + b + c) / 2
// (s(s-a)(s-b)(s-c))**0.5

//const areaOfTriangle = (a, b, c) => {
 //   let s = (a + b + c) / 2;
  //  return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
//};

// console.log(areaOfTriangle(3, 4, 5));


//******************************ÖRNEK3 */

// Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.

// pseudode:
// if given number is greater than 20 or not.
// if false 20 - given number
// if true abs((20 - given number) * 2) or multiply * (-1)

//const absoluteResult = (num) => {
  //  if (num < 20) {
    //    return 20 - num;
   // } else {
   //     return Math.abs((20-num) * 2);
    //}
//};

// console.log(absoluteResult(15));
// console.log(absoluteResult(35));


//*************************************ÖRNEK4 */

// Write a JavaScript program that takes two integers from a user and displays the larger.

// pseudocode:
// get two numbers
// compare them with if first greater than second one 
// compare them with else first equals or smaller than second one 

// let number1 =  5;//prompt('pls enter a number');
// let number2 =  6;//prompt('pls enter second number');

//const largerNumOfTwo = (number1, number2) => {
 //   if (number1 > number2) {
  ///      return `${number1} is greater than ${number2}`;
  //  } else if (number1 === number2) {
   //     return `${number1} equals ${number2}`;
   // } else {
    //    return `${number2} is greater than ${number1}`;

   // }
//};

// console.log(largerNumOfTwo(5, 6));

//*****************************ÖRNEK5 */

// Write a JavaScript program that takes 3 integers from a user and displays the largest.

//const largestNumOfThree = (number1, number2, number3) => {  // array ise spread ile açmak gerekir
    // return Math.max(...[number1, number2, number3]);
    //let largest;


    //if (number1 > number2 && number1 > number3) {
    //    largest = number1;
   // }

   // else if (number2 > number1 && number2 > number3) {
     //   largest = number2;
//
   // }
   // else {
   //     largest = number3;
   // }
   // return `${largest} is the largest`;
//};

// console.log(largestNumOfThree(2, 6, 9));


//**************************ÖRNEK6 */

// Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.
// Example1: 
// number1 = 5, number2 = -4, number3 = 2 ⇒ product is -40. Then the sign is "-"
// Example2: 
// number1 = -5, number2 = -4, number3 = 2 ⇒ product is 40. Then the sign is "+"

// pseudocode:
// if product is greater than zero sign is + else -

//const multiplyOfThreeNum = (numee1, numee2, numee3) => {
 //   let product = numee1 * numee2 * numee3;
  ///  return product > 0 ? "the sign is +" : "the sign is -";
//};

// console.log(multiplyOfThreeNum(1, -8, 75));



//********************************ÖRNEK7 */

// Write a JavaScript program to check whether a given integer is in the range 50 to 100.

// pseudocode:
// if num is greater than 50 && is smaller than 100 => num is in the range 50 to 100;
// else num is not in the range 50 to 100;

///const isInTheRange50To100 = (numberee) => {
   // if (numberee > 50 && numberee < 100) {
    //    return `${numberee} is in the range 50 to 100`;
    //} else {
    //    return `${numberee} is NOT in the range 50 to 100`;
    //}
//};

// console.log(isInTheRange50To100(51));
// console.log(isInTheRange50To100(49));



//***********************ÖRNEK8 */

// Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

// Example:
// number1 = 5, number2 = 6, operand = * ⇒ result is 5 * 6 = 30
// pseudocode:
// parameters a, b, operand
// switch case

//const calc = (a, b, operand) => {
//    let result;
//
 //   switch (operand) {
 //       case '+':
 //           result = a + b;    
 //           break;
  //      case '-':
  //          result = a - b;
   //         break;
   //     case '/':
   //         result = a / b;    
    //        break;
    //    case '*':
     //       result = a * b;    
     //       break;
    
       // default:
      //      return 'invalid process'; 
    //}
  //  return result;
//};

// console.log(calc(2, 9, '+'));
// console.log(calc(2, 9, '-'));
// console.log(calc(2, 9, '/'));
// console.log(calc(2, 9, '*'));
// console.log(calc(2, 9, 'ğ'));

//****************************ÖRNEK9 */

// Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.
// Example1:
// input = Tuesday ⇒ output: Tuesday is a weekday
// Example2:
// input = Saturday⇒ output: Saturday is not a weekday

//const isWeekday = (day) => {
//    let res;

  //  switch (day.toLowerCase()) {
  //      case "monday":
  //      case "tuesday":
   //     case "wednesday":
   //     case "thursday":
   //     case "friday":
    //        res = `${day} is a weekday`;

     //       break;
       // case "saturday":
       // case "sunday":
        //    res = `${day} is NOT a weekday`;

        //    break;

        //default:
         //   return 'invalid process';
    //};
   // return res;
//};

// console.log(isWeekday('MONDAY'));
// console.log(isWeekday('Saturday'));
// console.log(isWeekday('osman'));

//**********************************ÖRNEK10 */

// Write a JavaScript program that tells the user provided number is odd or even.

// pseudocode: 
// num % 2

//onst oddOrEven = (x) => {
    // return x % 2 === 0 ? 'even' : 'odd';
  //  return x % 2 ? 'odd' : 'even';
//};

// console.log(oddOrEven(2));
// console.log(oddOrEven(3));
// console.log(oddOrEven(-1));

//**********************************ÖRNEK11 */

// Write a JavaScript program to find a value that is nearest to 100 from two different given integer values.

// pseudocode:
// smaller result difference from 100 is the nearest

//const nearestNum = (y, z) => {
  //  let diffY = Math.abs(100 - y);
  // let diffZ = Math.abs(100 - z);

   // if (diffY > diffZ) {
   //     return `${z} is the nearest to 100`;
//} //else if (diffY === diffZ) {
  //      return `they are equally close`;
 //   } else {
   //     return `${y} is the nearest to 100`;
   // }
//};

// console.log(nearestNum(25, -96));
// console.log(nearestNum(95, 105));
// console.log(nearestNum(98, 99));




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


/********************************************************* ÖRNEK SORU ÇÖZÜMÜ ******************************/

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

 /*const validNumber = () => {
    let num = prompt("Enter a valid number")

    if (Number(num)){
         console.log("It is a valid number") 
   } else {
        console.log("It is not a valid number") 
        return validNumber()              // recursion
     }
 }
 console.log(validNumber());*/



//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.



/*const ebobNum = (num1, num2) => {
  let bigNumber;
  if(num1==0 || num2==0){
    return `Hatalı giriş yaptınız`
  }

  for (let i=1; i <= num1 && i <=num2; i++){
    
      if (num1%i === 0 && num2%i==0)
        bigNumber = i
    }  
  console.log(bigNumber) // return bigNumber
}  
console.log(ebobNum(55, 88));*/


/*let num1 = 20
let num2 = 50
const ebobNum = () => {
  let bigNumber;
  if(num1==0 || num2==0){
    return `Hatalı giriş yaptınız`
  }

  for (let i=1; i <= num1; i++){
    for(let i=1; i <= num2; i++){
      if (num1%i === 0 && num2%i==0)
        bigNumber = i
    }  
  console.log(bigNumber) // return bigNumber
}  
}
console.log(ebobNum());
//return ebobNum()  olmuyor*/


      //! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

/*let list = []
const tamBölen = () => {
let num = +prompt("pozitif sayı giriniz")
  for (let i = 1; i<=num; i++){
    if (num%i ===0){
    list.push(i)
    } else {  
    }
  } 
  return  list //console.log(list) 
}
console.log(tamBölen())*/

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

/*let a =1
const factl = (n) => {
  for(let i = 1; i<=n; i++){
    a = a*i
  } return a
}
console.log(factl(4));*/

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

/*let tamBölen = []
const numBölünen = () => {
  for(let i= 101; i < 1000; i++){
    if(i %5 === 0 && i%3 === 0){
    tamBölen.push(i)
  } else {

  }
  } return tamBölen
}    
console.log(numBölünen())*/

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.


 /*const multiplication = () => {
     let arr = []
    
     for (let i = 1; i <= 10; i++){
         arr.push(`multiplication table of ${i}`)
         for (let k = 0; k <= 10; k++){
             arr.push(`${i} * ${k} = ${i*k}`)
         }
     }

     return arr
 }

 console.log(multiplication())*/


//! Q-7
//? Write a code to draw Whit A
 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

/* const powerball = () => {
     let powerball = Math.floor(Math.random() * 26) + 1
     let whiteball = []

     for (let i = 1; i <= 5; i++){
         let random = Math.floor(Math.random() * 69) + 1
         whiteball.push(random)
         //console.log(whiteball)
     }

     return `${whiteball.join(',')},${powerball}`
 }

 console.log(powerball())*/


//2. Bölüm Functions

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.

// const currency = (amount, rate=1.5) => amount * rate
// console.log(currency(1000));

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

// const type = (x) => {
//     return typeof x
// }

// console.log(type(true))

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

/*const kaçTane = (strg, krk) => {
 let counter = 0
 for (let i = 0; i<=strg.length-1; i++){
  if (strg[i] == krk){
    counter += 1
  }
  } return `"${krk}" girile string içinde ${counter} tane var.`
}
console.log(kaçTane("clarusway", "a"))*/

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

/*let counter = 0
const perfectNums = (n) => {
  for( let i=1; i<n; i++){
      if (n%i==0 ){
        counter+= i
      } 
    }
  if (counter === n) {
           return `entered is perfect number`
  }else {
          return `entered is not perfect number`
  }     
  
}
console.log(perfectNums(496));



/************farklı */
 /*const perfectNums = () => {
     let arr = []

     for (let i = 1; i <= 1000; i++){
         sum = 0;
         for (let k = 1; k < i; k++){
             if (!(i % k)) {
                 sum += k;
             }
         }
         if (sum === i){
             arr.push(i)
        }
     }
     return arr
 }
 console.log(perfectNums()); */


 //! Q-5
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);*/


/*

//! ODEV1: String' deki kelimelerin sayisini donduren bir fonksiyon yaziniz.
const string = "uzun ince bir yoldayim gidiyorum gündüz gece.";
const kelimeSayisi = function (string) {
  const uzunluk = string.split(" ");
  return uzunluk.length;
};
console.log(kelimeSayisi(string));


//! //////////  ÖDEV :Youtube adres kısaltma   ///////
let yazi = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let kisaltma = function (yazi) {
  const bolme1 = yazi.slice("0", "8");
  let bolme2 = yazi.slice("8", "24");
  bolme2 = bolme2.replaceAll("www.youtube.com", "youtu.be");
  const bolme3 = yazi.slice("32", yazi.length);
  const kisaHali = bolme1 + bolme2 + bolme3;
  return kisaHali;
};
console.log(kisaltma(yazi));*/


/!********************challege***********/
/**********************************************soru1****/

//if first dice is 1 and second dice is 6, output should be 'one - six'
//For example :
//call this function with dices(10) Yo should display all 10 result.
//And display the result in the following format on the console: for Example:
//1st dice: 2 2nd dice: 3 output => 'two' - 'three'
//1st dice: 6 2nd dice: 4 output => 'four' - 'six' // Always dsiplay the low dice first.

/*const roll = (number) => {
  for (let i = 1; i <=number; i++) {
    let rol1 = Math.ceil(Math.random() * 6);
    let rol2 = Math.ceil(Math.random() * 6);
    const arr = ["one", "two", "three", "four", "five", "six"];
    if (rol1 > rol2) {
      return ` ${i} times => ${arr[rol2-1]} - ${arr[rol1-1]}`
    }else {
      return ` ${i} times =>${arr[rol1-1]} - ${arr[rol2-1]} `
    }
  }
}; roll(10)*/


/***********************************soru2********************************* */
/*

const arr = [
'C1234 - John Doe, London, Full-Stack', 
'C2345 - Jane Doe, London, Data-Science', 
'C2346 - Mary Ann, Paris, AWS-Devops', 
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack', 
'C2555 - William Cash, Manchester, Data-Science', 
'C2455 - Patrick Jane, Madrid, Full-Stack'
];

const student = (a) => {
  a.map((str) => { 
    let result = str.split(" ");
    console.log(result);
    console.log(`Student Nr: ${result[0]} \n
    First Name: ${result[2]} \n
    Last Name: ${result[3].slice(0, -1)} \n
    Location: ${result[4].replace(",", "")} \n
    program: ${result[5]} \n
    ======================`);
  });
}; student(arr);*/

/********************************soru3 */

/*Write a function that takes email variable and return true or false and write console invalid or valid.
Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. :
Capital letters are allowed.
An email should not start with '@' symbol and should not contain more than one '@' sign.
There should be at least two characters after the '.' sign. (like .co or .com) There should be at least one '. after the '@' sign.
For examples:
name.last_Name@company.com -> 🆗 Valid name.143@company.co -> 🆗 Valid name.last-Name@company.com -> ❌ Dashes are not allowed name.last_Name@company.c -> ❌ There should be at least two characters after the '.' sign. name.last_Name@company -> ❌ There should be at least one '. after the '@' sign.


const emailValidator = (email) => {
  const regexPatern = /^[A-Za-z0-9\_]+\@[A-Za-z]+\.[A_Za-z]{2,3}$/;
    if (regexPatern.test(email)) {
      console.log(`your email is true`);
    } else {
      console.log(`Your email is false`);
    }
    regexPatern.test(email)
      ? console.log(`your email is true`)
      : console.log(`Your email is false`);
    regexPatern.test(email) && console.log(`your email is true`);
  !regexPatern.test(email) || console.log(`your email is false`);
};
emailValidator("osmanmerhaba@gmail.com");*/