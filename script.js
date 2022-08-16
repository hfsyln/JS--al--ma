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

let day = prompt (`bugün hangi gün lütfen giriniz`).toLowerCase();
switch (day) {
    case `pazartesi`:
        faaliyet =`Inclass`;
    break;
    case `salı`:
        faaliyet =`Inclass`;
    break;
    case `çarşamba`:
        faaliyet =`Inclass`;
    break;
    case `perşembe`:
        faaliyet =`Inclass`;
    break;
    case `cuma`:
        faaliyet=`Teamwork`;
    break;
    case `cumartesi`:
        faaliyet=`InClass + Workshop`;
    break;
    case `pazar`:
        faaliyet=`Self-Study`;
    break;
    default:
        faaliyet=`Yanlış bir şey girdiniz`;
}
console.log(`Bugün ki faaliyetiniz: ${faaliyet}`);