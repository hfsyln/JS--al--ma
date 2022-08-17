
// ÖDEV1 -HESAP MAKİNASI(2 SAYI 1 İŞLEM İSTE)-

//let numb1= +prompt(`enter your first number`)
//console.log(numb1)
//let numb2 = +prompt (`enter your second number`)
//console.log(numb2)
//let oprt = prompt(`enter your operator`)
//console.log(oprt)
//let result = 0

    //if (oprt == `+`)
        //{result = (numb1 + numb2)}
    //else if (oprt == `-`)
       // {result = (numb1 - numb2)}
    //else if (oprt == `/`)
       // {result = (numb1 / numb2)}
    //else if (oprt == `*`)
        //{result = (numb1 * numb2)};
    //console.log(result)
    // else 
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

//ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve 
//bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların
 //ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.






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







