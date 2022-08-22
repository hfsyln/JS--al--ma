
// ÖDEV1 -HESAP MAKİNASI(2 SAYI 1 İŞLEM İSTE)-

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
// ÖDEV2 -Clarusway’deki haftalık ders ve etkinlik programınızı, 
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


// ÖDEV3 -ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//fazla olanlara ise %10 zam yapmak istiyoruz.


//let maas = +prompt (`lütfen maaşınızı giriniz`);
//let aücret = 5250
//if (maas >= aücret)
   //   {ücret = maas*110/100}
//else if (maas < aücret)
     // {ücret = maas*150/100}
   //console.log(`yeni maaşınız: ${ücret}`)


//# ODEV4: Kredi Risk Programı
//## Console’dan kişinin gelir ve gider miktarını alan
//## eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir :money_mouth_face:
//## değilse Kredi Verilemez :pleading_face:
//## şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

//let gelir = +prompt(`aylık gelirinizi yazınız`);
//let gider = +prompt(`aylık giderinizi yazınız`);
//let aücret = 5250
//let sonuç = (gelir >= gider + aücret) ? console.log (`kredi kullanabilir`) 
 //     : console.log(`kredi kullanamaz`)
  

 // asal sayıları bulma

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


  //console.log("****** WHILE *******");

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

//**************************

//ÖDEV5: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve 
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


 // ***** 5 HAKLI TAHMİN OYUNU *********** SUDO KOD ===>>>>>
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

//console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/
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


