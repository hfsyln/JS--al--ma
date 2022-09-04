
//!***************************************************** */ ÖDEV1 -HESAP MAKİNASI(2 SAYI 1 İŞLEM İSTE)-

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

  //****************************************** */ ODEV6: String' deki kelimelerin sayisini donduren bir fonksiyon yaziniz.

/*  const string = "uzun ince bir yoldayim gidiyorum gündüz gece.";
const kelimeSayisi = function (string) {
  const uzunluk = string.split(" ");
  return uzunluk.length;
};
console.log(kelimeSayisi(string));


//***************************************  ÖDEV7 : Youtube adres kısaltma 

/*let yazi = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let kisaltma = function (yazi) {
  const bolme1 = yazi.slice("0", "8");
  let bolme2 = yazi.slice("8", "24");
  bolme2 = bolme2.replaceAll("www.youtube.com", "youtu.be");
  const bolme3 = yazi.slice("32", yazi.length);
  const kisaHali = bolme1 + bolme2 + bolme3;
  return kisaHali;
};
console.log(kisaltma(yazi)); */