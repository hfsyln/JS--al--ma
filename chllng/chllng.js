//********************************Chllng SORU ÇÖZÜMLERİ -----29.08.2022------- */
//!ÖRNEK 1 */

//? Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year)

//? pseudocode:

//? (0-99) only divisible by 4 --> leap year
//? (100-400) divided by 4 and  if not divisible by 100 --> leap year
//? if divisible by 100 and divisible by 400 --> leap year


//************************* */ first way:
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

//********************************************** */ second way:
//function leapYear(year) {
    //return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//}
//:david-moses:
//11
///:eyvallah:
//7

//!ÖRNEK2 */

//? Write a JavaScript code to find the area of a triangle.

//? pseudocode:
//? a, b and c sides of a triangle
//? assume bottom = c
//? semiperimeter = s
//? s = (a + b + c) / 2
//? (s(s-a)(s-b)(s-c))**0.5

//const areaOfTriangle = (a, b, c) => {
 //   let s = (a + b + c) / 2;
  //  return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
//};

// console.log(areaOfTriangle(3, 4, 5));


//!ÖRNEK3 */

//? Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.

//? pseudode:
//? if given number is greater than 20 or not.
//? if false 20 - given number
//? if true abs((20 - given number) * 2) or multiply * (-1)

//const absoluteResult = (num) => {
  //  if (num < 20) {
    //    return 20 - num;
   // } else {
   //     return Math.abs((20-num) * 2);
    //}
//};

// console.log(absoluteResult(15));
// console.log(absoluteResult(35));


//!ÖRNEK4 */

//? Write a JavaScript program that takes two integers from a user and displays the larger.

//? pseudocode:
//? get two numbers
//? compare them with if first greater than second one 
//? compare them with else first equals or smaller than second one 

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

//!ÖRNEK5 */

//? Write a JavaScript program that takes 3 integers from a user and displays the largest.

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


//!ÖRNEK6 */

//? Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.
//? Example1: 
//? number1 = 5, number2 = -4, number3 = 2 ⇒ product is -40. Then the sign is "-"
//? Example2: 
//? number1 = -5, number2 = -4, number3 = 2 ⇒ product is 40. Then the sign is "+"

//? pseudocode:
//? if product is greater than zero sign is + else -

//const multiplyOfThreeNum = (numee1, numee2, numee3) => {
 //   let product = numee1 * numee2 * numee3;
  ///  return product > 0 ? "the sign is +" : "the sign is -";
//};

// console.log(multiplyOfThreeNum(1, -8, 75));



//!ÖRNEK7 */

//? Write a JavaScript program to check whether a given integer is in the range 50 to 100.

//? pseudocode:
//? if num is greater than 50 && is smaller than 100 => num is in the range 50 to 100;
//? else num is not in the range 50 to 100;

///const isInTheRange50To100 = (numberee) => {
   // if (numberee > 50 && numberee < 100) {
    //    return `${numberee} is in the range 50 to 100`;
    //} else {
    //    return `${numberee} is NOT in the range 50 to 100`;
    //}
//};

// console.log(isInTheRange50To100(51));
// console.log(isInTheRange50To100(49));


//!ÖRNEK8 */

//? Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

//? Example:
//? number1 = 5, number2 = 6, operand = * ⇒ result is 5 * 6 = 30
//? pseudocode:
//? parameters a, b, operand
//? switch case

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

//!ÖRNEK9 */

//? Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.
//? Example1:
//? input = Tuesday ⇒ output: Tuesday is a weekday
//? Example2:
//? input = Saturday⇒ output: Saturday is not a weekday

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

//!ÖRNEK10 */

//? Write a JavaScript program that tells the user provided number is odd or even.

//? pseudocode: 
//? num % 2

//onst oddOrEven = (x) => {
    // return x % 2 === 0 ? 'even' : 'odd';
  //  return x % 2 ? 'odd' : 'even';
//};

// console.log(oddOrEven(2));
// console.log(oddOrEven(3));
// console.log(oddOrEven(-1));

//!ÖRNEK11 */

//? Write a JavaScript program to find a value that is nearest to 100 from two different given integer values.

//? pseudocode:
//? smaller result difference from 100 is the nearest

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



/********************************************************* Chllng SORU ÇÖZÜMÜ 30.08.2022 ******************************/

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




//! Q-8
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.

// const currency = (amount, rate=1.5) => amount * rate
// console.log(currency(1000));

//! Q-9
//? Write a JavaScript function that accepts an argument and returns the type.

// const type = (x) => {
//     return typeof x
// }

// console.log(type(true))

//! Q-10
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

//! Q-11
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


 
//********************chllng soru çözümü 02.09.2022***********/
//!soru1****/

//?if first dice is 1 and second dice is 6, output should be 'one - six'
//?For example :
//?call this function with dices(10) Yo should display all 10 result.
//?And display the result in the following format on the console: for Example:
//?1st dice: 2 2nd dice: 3 output => 'two' - 'three'
//?1st dice: 6 2nd dice: 4 output => 'four' - 'six' // Always dsiplay the low dice first.

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

//!soru2********************************* */
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



//!soru3 */

/*Write a function that takes email variable and return true or false and write console invalid or valid.
Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. :
Capital letters are allowed.
An email should not start with '@' symbol and should not contain more than one '@' sign.
There should be at least two characters after the '.' sign. (like .co or .com) There should be at least one '. after the '@' sign.
For examples:
name.last_Name@company.com -> 🆗 Valid name.143@company.co -> 🆗 Valid name.last-Name@company.com -> ❌ Dashes are not allowed name.last_Name@company.c -> ❌ There should be at least two characters after the '.' sign. name.last_Name@company -> ❌ There should be at least one '. after the '@' sign.*/


/*const emailValidator = (email) => {
  const regexPatern = /^[A-Za-z0-9\_]+\@[A-Za-z]+\.[A_Za-z]{2,3}$/;
    /*if (regexPatern.test(email)) {                                        //1. yol yazım  
      console.log(`your email is true`);
    } else {
      console.log(`Your email is false`);
    }
    regexPatern.test(email)                                                  //2. yol yazım
      ? console.log(`your email is true`)
      : console.log(`Your email is false`);
    regexPatern.test(email) && console.log(`your email is true`);             //3. yol yazım
    regexPatern.test(email) || console.log(`your email is false`);
};
emailValidator("osmanmerhaba@gmail.com"); */


//!soru4 

//?Purpose of the this coding challenge is to write a code that given TR Identity Number, returns valid or invalid.
//?	 	Valid TR Identity Number must follow these rules:
//? 1.	TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes.
//? 2.	The ID number cannot start with 0.
//? 3.	The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.
//? 4.	Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th //? digits.
//? 5.	The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
//? 6.	When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.


/*const kimlikNo = (num) => {

    if ( num[0]=== 0 && num.lenght != 11){
        return `yanlış giriş yaptınız`}
    let toplam1 = +num[1] + +num[3] + +num[5] + +num[7] + +num[9];
    let toplam2 = +num[2] + +num[4] + +num[6] + +num[8];
    let onuncu = (toplam1*7 - toplam2) % 10;
    let sonuncu = (toplam1 + toplam2 + onuncu) % 10;
    
    
    if (+num[10]!== onuncu && sonuncu !== +num[11]){
        return `yanlış giriş yaptınız`
    }else{

        return `doğru giriş`
    }
    
}; kimlikNo(123456758989) =>>> çalışmıyor //console.log(kimlikNo(123456758989)) */
    


  //*** alternatif çözüm-1 */
  /*let check = (tc) => {
    tc = "" + tc;
    let sumTek = 0;
    let sumCift = 0;
    let sum = 0;
    let flag = true;
    if (tc[0] == 0) {
      flag = "false1";
    } else {
      for (let i = 0; i < 9; i++) {
        if (i % 2 == 0) {
          sumTek += Number(tc[i]);
        } else {
          sumCift += Number(tc[i]);
        }
      }
      sumTek = (sumTek * 7 - sumCift) % 10;
      console.log(sumTek);
      if (sumTek == tc[9]) {
        for (let i = 0; i < 10; i++) {
          sum += Number(tc[i]);
        }
        console.log(sum);
        if (sum % 10 != tc[10]) {
          flag = "false2";
        }
      } else {
        flag = "false3";
      }
    }
    return flag;
  };
  ​
  console.log(check(11111111110));*/





//! soru5
 /*The purpose of this coding challenge is to create a function that will take text in kebab case format or with spaces and output it in camel case format.
 Expected Outcome
 For Example:
 Input : JavaScript coding ChAlLenge
 Output : javaScriptCodingChallenge

 Input : JavaScript-coding-challenge
 Output : JavaScriptCodingChallenge

 Input : javaScriptCodingChallenge
 Output : javaScriptCodingChallenge

let camelCase = (id) => {
  if (id.includes("-")) {
    id = id.split("-");
  } else {
    id = id.split(" ");
  }
  for (i in id) {
    id[i] = id[i][0].toUpperCase() + id[i].slice(1, id[i].length).toLowerCase();
  }
  return id.join("");
};

console.log(camelCase("Javascript-code-woRld-pyTHon"));*/



//!soru6
/*// Purpose of the this coding challenge is to write a code that can generate random password for 10 characters
// as default and expected constraints below.

// Expected Outcome
// password length must be equal to 10
// there should be 3 numbers
// and there should 2 symbols from below:
//* !@#$%^&*()\_+~|}{[]:;?><,./-=
// there should be minimum 1 lower and 1 upper case letters,

//? valid samples:
// Aa123&!xyz
// Aa@/456stu
// 123aA(p?rs

//? invalid samples:
// AB123&!XYZ    no lower case letters
// ab123&!xyz    no upper case letters
// Aa@c456stu    only one symbol
// 12aA(p?rsz    only two numbers


const pasword = () => {
let password = [];
let specialCharacters = "!@#$%^&*(_+~|}{[]:;?><,./-=";
let letterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterLower ="abcdefghijklmnopqrstuvwxyz";
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

for(let i=0; i<3; i++){
    password.push(Math.floor(Math.random() * 10));
};
for(let i=0; i<2; i++){
    password.push(specialCharacters[Math.floor(Math.random() *27 )])
};
for(let i=0; i<3; i++){
    password.push(letters[Math.floor(Math.random() * 52)]);
};
password.push(letterUpper[Math.floor(Math.random() * 26)]);
password.push(letterLower[Math.floor(Math.random() * 26)]);

console.log(password)
return password
};  
console.log(pasword().join("")); */





//! soru7
// The purpose of this coding challenge is to create a function that will take two parameters. The first parameter
// should be an array and the second parameter should be a positive integer. The function will sort the array and
// return the smallest nth (n = second parameter) element. Return an error message if the second parameter is
// greater than the number of elements of the array.

// Expected Outcome
// For Example:
// Input : ([10,50,61,17,82,95,9,11,12,13],3)
// Output : 11 (3rd smallest element)

// Input : ([10,50],4)
// Output : Out of range









/*
const sortArr = function (arr, n) {
  if (n > arr.length || n <= 0) {
    return "Out of range";
  }
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  // array.sort() mutater func.
  return arr[n - 1];
};
​
const sample = [2, 35, 14, 3, 12, 15];
​
console.log(sortArr(sample, 2));*/



























//! soru 8  ????????????????????????????????????????????????????????????????
  //? JS-CC-028 : SSN (Social Security Number) Validator
//? The purpose of this coding challenge is to create a function that will check the given SSN (Social Security Number) is valid or not valid.
//? Problem Statement
//? Valid a SSN (Social Security Number);
//? should have 9 digits. 522-82-5151
//? should be divided into 3 parts by hyphen (-).
//? The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
//? The second part should have 2 digits and it should be from 01 to 99.
//? The third part should have 4 digits and it should be from 0001 to 9999.
//? Random Valid SSN numbers for check your code:
// 268-26-3556
// 237-86-7532
// 304-92-5339
// 510-72-0765
// 504-58-0987

/*const validator=(arr)=> {
  let newarray=arr.split("")
  let newarray2=arr.split("-")
  console.log(newarray)
  console.log(newarray2)

 
     if(isNaN( +newarray2[0]) || isNaN( +newarray2[1]) || isNaN(+newarray2[2])){
      console.log("this is invalid")
     }
  
      else if(newarray.length !=11){
          console.log("this enter is an  invalid")
      }
      else if (newarray[3]!=="-" && newarray[6]!=="-"){
          console.log("this enter is an  invalid")
      }
      
      else if (newarray2[0]==="000" || newarray2[0]==="666" || +newarray2[0]>900 ){
          console.log("this enter is an  invalid")
      }
      else {                                                                                                       console.log("your enter is valid, congrats")
      }  
}

let array="268-55-3466"
validator(array)  */



/*const ssnControl = (ssn) => {
    ssn = ssn.split("-");
    console.log(ssn)
    console.log(ssn[0])
    console.log(ssn[0].lenght)
  
const arr = ["1234", "2435", "yuyu"]
let a = arr.split("-")*/


//!05.09.2022//

//?soru1//  
//verilen sayının basamak değerlerini birbiri ile çarpacağız. kaç defada tek haneli basamağa ulaşıyor?
//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

/*
const tekhane = (sayı) => {
  let çarpım = 1;
  sayı = "" + sayı;
  sayı = sayı.split ("");
  //console.log(sayı)
  counter = 1
  
  while(sayı.length > 1){
    for ( let a of sayı ) {
        çarpım = çarpım * +a
        //console.log(çarpım)
    }
    sayı =("" + çarpım).split("")
    console.log(sayı)
    if(sayı.length > 1){
      çarpım = 1
      counter +=1
      //console.log(counter)
    }
  }return counter
    
}; console.log(tekhane(999));*/

//!ikinci yol
/*let tekhane = (sayi) => {
  sayi = "" + sayi;
  sayi = sayi.split("");
  let çarpım = 1;
  let counter = 0;
  while (sayi.length > 1) {
    for (let i = 0; i < sayi.length; i++) {
      çarpım *= sayi[i];
    }
    sayi = ("" + çarpım).split("");
    çarpım = 1;
    counter++;
  }
  return counter;
};
console.log(tekhane(999));*/




//?soru2//
//verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.
//input                   output
//15     =>   (1111)  =>    4 
//14     =>   (1110)  =>    3



/*const binary = (sayı)=> {
  counter = 0;
  sayı = sayı.toString(2);
  console.log(sayı);
  sayı = sayı.split("");
  console.log(sayı);
  for (let a of sayı){
    if (a == 1){
      counter += 1
    }
  }return counter
   
  
}; console.log(binary(14))*/

//! yöntem 2
//countBits = (n) => n.toString(2).split("0").join("").length;


//?soru3//
//fonsiyona iki adet parametre gelecek. ikinci parametre ilk gelen parametrinin rakamlarının üstü olacak ve her rakamda artacak.
//bu rakamların toplamı ilk gelen sayının tam katı olursa kat sayısını tam katı olmazsa -1 i return edecek.


//digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1  => return 1
//digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2  => return 2
//digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 => return 51

/*
const digPow = (sayı, üs)=>{
  üs = "" + üs
  //console.log(üs)
  sayı = "" + sayı
  //console.log(sayı)
  sayı = sayı.split("");
  //console.log(sayı)
  let toplam = 0
  
  for(let x of sayı){
    
    toplam += x**üs
    //console.log(toplam)
    üs = +üs + 1
  }
   sayı = sayı.join("")
   //console.log(sayı)

  if(toplam % sayı == 0){
    console.log(toplam/sayı);
  } else{
    console.log(-1)
  }
    //return toplam 
}; digPow(695, 2) */



//?soru4
//verilen dizide hangi elemanın kaç defa geçtiğini çıktı veren fonksiyon?











/*
F3673-Cooper
:house_with_garden:  1 day ago
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
Persistent Bugger.--> soru adı
CodewarsCodewars
Training on Persistent Bugger. | Codewars
Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential.






F3673-Cooper
:house_with_garden:  1 day ago
soru -1 map ile çözümü,

function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
:+1::+1::skin-tone-2:
7



3631 İhsan
  1 day ago
// yöntem 3
// let bul2 = (array) => {
//   array = array.sort((a, b) => a - b);
//   console.log(array);
//   if (array[0] != 1) {
//     return 1;
//   } else {
//     for (let i in array) {
//       if (array[Number(i) + 1] - array[Number(i)] != 1) {
//         return Number(array[i] + 1);
//       }
//     }
//   }
// };
// console.log(bul2([10, 2, 3, 5, 6, 8, 7, 9, 4]));






05.09.2022



3631 İhsan
  1 day ago
soru 4
let count = (dizi) => {
  let ilk = [];
  let son = [];
  dizi.forEach((element) => {
    let count = 0;
    let eleman = "";
    for (let item of dizi) {
      if (element === item) {
        count++;
        eleman = item;
      }
    }
    ilk = [eleman, count];
    if (!son.length) {
      son = son.concat(ilk);
    } else {
      let counter = 0;
      for (let i = 0; i < son.length; i += 2) {
        if (son[i] !== eleman) {
          counter++;
        }
      }
      if (counter * 2 == son.length) {
        son = son.concat(ilk);
      }
    }
  });
  return son;
};
let dizi1 = ["ali", "veli", "ali", "veli", "veli", "2", 2, 2, 2];
console.log(count(dizi1));




07.09.2022

//! Q-1
/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

//! Q-2
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

//! Q-3
/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/

//! Q-4
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3,3])       == [1,2,3]
*/

//! Q-5
/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/