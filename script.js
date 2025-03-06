// *** variables & constants ***


// ** 1 ** 
// function abcd() {
//     for (var i = 1; i < 100 ;i++) {

//     }
//     console.log(i);
// }

// abcd()



// ** 2 ** 
// function abcd() {
//     for (let i = 1; i < 100 ;i++) {

//     }
//     console.log(i);
// }

// abcd()


// let a = 12


// window

// window is an Object jya madhe te sgle features ahet je directly js cha part nhiye pn aplyala browser kadun dile jatat to use for development and testing



// *** types in js ***

// 2 types in js = 1. primitives  2. reference

// primitives 
// var a = 12 // primitives madhe copy kel ki copy hot


// reference 
// var b = [1,2,3,4,5,6,7,8]
// var c = b   //copy honar nhi reference pass hoil , copy krnya sathi spread oprater [... ] cha use kraycha

// var c = [...b] // atta b he c madhe copy zal



// *** Conditionals - if , else , else-if ***

// if chya () madhe fakt doncha values yetat true & false

// if (12 > 4 ){ //true
// apn kahitri as lihaycha je convert hoil true kinva false madhe
// } 

// if (12 < 4 ){ //false
// conditiona false asel tr if madhe aslela code run nhi honar
// }
// else{

// } 

// falsy values - 0 , "", false, undefined, null, NaN, document.all


// else if 

// if (35 > 40) {
//     console.log("35");
// }
// else if(40 > 55) {
//     console.log("40");

// }
// else if(60 > 75){
//     console.log("60");

// }
// else if(0 > 5){
//     console.log("00");

// }
// else if(80 > 55){
//     console.log("80");

// }


// Ternary Operator















// *** 5 Questions of conditionals ***



// * Q 1. user se maango ek num and num 10 se jada ho to helo print karo nhito hye pint karo

// var num = Number(prompt("ek number de do :"))

// if (num > 10) {
//     console.log("mi 10 peksha motha ahe " + num);
// }
// else{
//     console.log("mi 10 peksha lhan ahe "  + num);
// }



// * Q 2. user se number mango and usme 20 add karo and agr wo 20 add krne pr 30 se jada aye to uska answoe print kro nhito msg do

// var number = Number(prompt("ek no de do : "))
// var number = number + 20

// if (number > 30) {
//     console.log("mi 30 peksha motha ahe " + number);
// }
// else if( number >= 30){
//     console.log("mi 30 ahe sry (" + number + ")");
// }
// else{
//     console.log("mi 30 peksha lhan ahe sry (" + number + ")");  
// }



// * Q 3. user se 2 passwords mango and agr match kar jaye to login karo nhito mat karo 

// var pass1 = prompt("password :")
// var pass2 = prompt("verify password :")

// if (pass1 === pass2) {
//         console.log("Login sucssefuly");
// }
// else{
//     console.error("incorect password ");

// }



// * Q 4. तुमच्याकडे temperature नावाचा variable आहे. जर तापमान 30°C पेक्षा जास्त असेल तर "It's hot!", 15 ते 30°C दरम्यान असेल तर "It's warm!", आणि 15°C पेक्षा कमी असेल तर "It's cold!" हा मेसेज दाखवा.

// var temperature = 10

// if (temperature < 30) {
//     console.log("It's hot!");
// }else if(temperature >=15 && temperature <= 30) {
//     console.log("It's warm!");
// }else{
//     console.log("It's cold!");

// }



// * Q 5. Ek number input ghe. To positive ahe ka negative te sanga.

// var num = Number(prompt("ek no dya :"))

// if (0 < num) {
//     console.log("mi positive no. ahe");
//  }
//  else if(0 > num){
//     console.log("mi negative no. ahe");
//  }
//  else{
//     console.log("mi 0 ahe mi neutral ahe"); 
//  }



// * Q 6. Dilela number even ahe ka odd te check kara.

// var num = Number(prompt("ek no dya :"))

// if (num % 2 === 0) {
//     console.log("im Even");
// }
// else{
//     console.log("im odd");
// }



// * Q 7. User chi age input gya. Age 18+ asel tar "Eligible for voting" sanga, nahi tar "Not eligible" sanga.

// var age = Number(prompt("pliz mention your age"))

// if (age >= 18) {
//     console.log("Your eligible for voting");
// }else{
//     console.log("Your Not eligible for voting"); 
// }



// * Q 8. Don numbers dile tar konta motha ahe te find kara.

// var num1 = Number(prompt("phila num dya :"))
// var num2 = Number(prompt("dusra num dya :"))

// if (num1 > num2) {
//     console.log("phila num motha ahe");
// }else if(num2 > num1) {
//     console.log("dusra num motha ahe"); 
// }
// else{
//     console.log("Amhi doge num ek sarkhecha ahot");
// }



// * Q 9. Ek year input ghe ani to leap year ahe ka nahi te check kara.

// var year = Number(prompt("ek year sang :"))

// if (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0))  {
//     console.log( year + " leap year ahe...🎊☺️");
// }else{
//     console.log( year + " leap year nhiyee...😓");
// }



// * Q 10. Marks input ghe ani he logic vapra: 90+ ➝ A, 75-89 ➝ B, 50-74 ➝ C, <50 ➝ Fail

// var sanketMarks = Number(prompt("Sanket che marks :")) 

// if ( sanketMarks >= 90 && sanketMarks <= 100) {
//     console.log(" sanket la Grade A (90+) ");
// }
// else if(sanketMarks >= 75 && sanketMarks <= 89){
//     console.log(sanketMarks + " sanket la Grade B (75 to 89)");
// }
// else if(sanketMarks >= 50 && sanketMarks <=74){
//     console.log(sanketMarks + " sanket la Grade C (50 to 74)");
// }
// else{
//     console.log(sanketMarks + " sanket la Grade Fail (Below 50)");
// }



// * Q 11. Ek number check kara ki to 5 ani 3 ne donhi divide hotoy ka.

// var num = Number(prompt("ek no de"))

// if (num % 5 === 0 && num % 3 === 0) {
//     console.log(num + " ha number 5 ani 3 ne divide hoto");
// }
// else{
//     console.log(num + " ha number 5 ani 3 ne divide hot nahi");
// }



// * Q 12. Teen numbers dile tar konta lahan ahe te find kara.

// var num1 = Number(prompt("pahila no."))
// var num2 = Number(prompt("dusra no."))
// var num3 = Number(prompt("tisra no."))

// if (num1 > num2 && num1 > num3) {
//     console.log(num1 +" ha saglyat motha ahe.");
// }
// else if (num2 > num3 && num2 > num1 ) {
//     console.log(num2 +" ha saglyat motha ahe.");
// }
// else if (num3 > num1 && num3 > num2 ) {
//     console.log(num3 +" ha saglyat motha ahe.");
// }
// else{
//     console.log("he sagle number ek sarkhecha ahet");
// }



// * Q 13. Ek letter input ghe ani vowel (a, e, i, o, u) ahe ka consonant te sanga.

// var letter = prompt("ek latter dya :").toLowerCase()

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     console.log(letter + " ha Vowel letter ahe.");
// }
// else{
//     console.log(letter + " ha consonant letter ahe.");
// }



// * Q 14. Triangle che teen angles dile astil tar tyancha sum 180° ahe ka nahi te check kara. Sum 180° asel tar "Valid triangle" nahi tar "Invalid triangle" sanga.

// var angle1 = Number(prompt("phila angle"))
// var angle2 = Number(prompt("dusra angle"))
// var angle3 = Number(prompt("tisra angle"))

// if (angle1 <=0 || angle2 <=0 || angle3 <=0) {
//     console.log("angle 0 peksha motha asayla hava");  
// }
// else if (angle1 + angle2 + angle3 === 180 ) {
//     console.log("Valid triangle");  
// }
// else{
//     console.log("Invalid triangle");  
// }














// *** for loop ***

//* Q 1. 👉Print numbers from 1 to 10.

// for (let num = 1; num <= 10; num++) {
//     console.log(num);    
// }



//* Q 2. 👉 Find the sum of numbers from 1 to 10.

// let sum = 0
// for (let num = 1; num <= 10; num++) {
//     sum += num ;      
// }
// console.log(sum);



//* Q 3. 👉 Print the square of numbers from 1 to 10.

// for (let square = 1; square <= 10; square++) {
//         console.log(square * square);      
// }



//* Q 4. 👉 Print the multiplication table of a given number.

// var num = Number(prompt("ek num do:"))

// for (let i = 1; i <= 10; i++) {
//    console.log(`${num} * ${i} = ${num * i}`);
// }



//* Q 5. 👉 Print even and odd numbers separately from 1 to 10.

// console.log("Even num");
// for (let num = 1; num < 10; num++) {
//     if (num % 2 === 0) {
//         console.log(num);            
//     }        
// }

// console.log("odd num");
// for (let num = 1; num < 10; num++) {
//     if (num % 2 !== 0) {
//         console.log(num);            
//     }        
// }



//* Q 6. 👉 Reverse a given string and print it.

// let str = prompt("ek string dya:")
// var rstr = ""

// for (var i = str.length - 1; i >= 0; i--) {
//     rstr += str[i]    
// }

// console.log(rstr);



//* Q 7. 👉 Print a countdown from a given number to 1.

// for (let num = 10; num >= 1; num--) {
//     console.log(num);        
// }



//* Q. 8 👉 Print numbers divisible by 3 up to a given number.

// for (let num = 1; num <= 30; num++) {
//     if (num % 3 === 0) {
//         console.log(num);

//     }    
// }



//* Q. 9 👉 Print all elements of an array.

// var arr = [10,20,30,40,50,60,70,80,90]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }



//* Q. 10 👉 Print the first 10 numbers of the Fibonacci series.

// let a = 1, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 3; i <= 10; i++) {
//     let next = a + b;
//     a = b;
//     b  = next;
//     console.log(next);
// }












// *** forEach loop ***



//* Q 1. Print each element of the array [1, 2, 3, 4, 5] using forEach.

// var arr =  [1, 2, 3, 4, 5] 

// arr.forEach(function (a) {
//     console.log(a);

// })



//* Q 2. Convert each string in the array ["apple", "banana", "cherry"] to uppercase and print it.

// var arr =  ["apple", "banana", "cherry"]

// arr.forEach( frt => console.log(frt.toUpperCase()))



//* Q 3. Print the square of each number in the array [2, 4, 6, 8, 10].

// var arr = [2, 4, 6, 8, 10]

// arr.forEach( num => console.log(num * num))



//* Q 4. Append "is learning JavaScript" to each name in the array ["Sanket", "Raj", "Pooja", "Amit"] and print it.

// var names =  ["Sanket", "Raj", "Pooja", "Amit"]

// names.forEach( name => console.log(name + " is learning JavaScript"))



//* Q 5. Find the sum of all numbers in an array using forEach.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0
// numbers.forEach( num => console.log("Total sum : " , sum += num))



//* Q 6. Add "is available" to each product in the array ["Laptop", "Mouse", "Keyboard"] and print it.

// var products = ["Laptop", "Mouse", "Keyboard"] 

// products.forEach( avlblPdct => console.log( `${avlblPdct} + is available `))



//* Q 7. Multiply each number in [10, 20, 30, 40, 50] by 5 and print it.

// var DilelaNum = Number(prompt("ek number dya : "))
// var arr =  [10, 20, 30, 40, 50] 
// arr.forEach( num => console.log( num * DilelaNum))



//* Q 8. Print the length of each word in the array ["cat", "dog", "elephant"].

// var anmls = ["cat", "dog", "elephant"]

// anmls.forEach(anml => console.log(`${anml} = ${anml.length} is Word Langth`))



//* Q 9. Print each element with its index and first letter from an array.

// let names = ["Sanket","Divya", "Amit", "Pooja", "Rahul", "Sneha", "Om", "Vishal"];

// names.forEach((name, index) => console.log(`index ${index}: ${name.charAt(0)}`))












// *** for-in  ***


// Ex. object :

// const person = {
//     name: "Sanket",
//     age: 25,
//     city: "Pune",
//     isMarried: true,
//     profession: "Frontend Developer",
//     skills: ["HTML", "CSS", "JavaScript"],
//     experience: 2,
// };


// **✅ for-in loop चे सिंटॅक्स: **

// const object = { key1: "value1", key2: "value2" };
// for (let key in object) {
//     console.log(key, object[key]);
// }


// * Q1️⃣. एका ऑब्जेक्ट मधील सर्व key आणि value प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print all keys and values of an object.

// for (let key in person) {
//    console.log(`${key} : ${person[key]}`);
// }



// * Q2️⃣. एका ऑब्जेक्ट मधील फक्त key प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print only the keys of an object.

// for (let key in person) {
//     console.log(key);
//  }



// * Q3️⃣. एका ऑब्जेक्ट मधील फक्त value प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print only the values of an object.

// for(let key in person) {
//     console.log(person[key]);
// }



// * Q4️⃣. एका ऑब्जेक्ट मधील string-type value फक्त प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print only the string values of an object.

// for(let key in person){
//     if (typeof person[key] === "string") {
//         console.log(person[key]); 
//     } 
// }



// * Q5️⃣. एका ऑब्जेक्ट मधील सर्व value uppercase मध्ये convert करणारा for-in लूप लिहा.
//        Write a for-in loop to convert all values of an object to uppercase.

// for(let key in person){
//     if (typeof person[key] === "string") {
//         person[key] = person[key].toUpperCase()
//     }
// }
// console.log(person);


// * Q6️⃣. एका ऑब्जेक्ट मधील सर्व numeric values ची बेरीज करणारा for-in लूप लिहा.
//        Write a for-in loop to sum all numeric values in an object.

// let sum = 0
// for(let key in person){
//     if (typeof person[key] === "number") {
//         sum += person[key]
//     }
// }
// console.log(`total sum : ${sum}`);


// * Q7️⃣. एका ऑब्जेक्ट मधील key नाव 5 पेक्षा मोठे असतील तर तेच प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print keys only if they are longer than 5 characters.

// for(let key in person){
//     if (key.length > 5) {
//         console.log(key);
//     }
// }


// * Q8️⃣. एका ऑब्जेक्ट मधील फक्त true असलेल्या key-value pairs प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print only key-value pairs where the value is true.

// for(let key in person){
//     if (person[key] === true) {
//         console.log(`${key} : ${person[key]}`); 
//     }
// }

// * Q9️⃣. एका ऑब्जेक्ट मधील value null किंवा undefined असतील तर त्यांना वगळून बाकी प्रिंट करणारा for-in लूप लिहा.
//        Write a for-in loop to print all key-value pairs except those with null or undefined values.

// for(let key in person){
//     if (person[key] !== null && person[key] !== undefined) {
//         console.log(`${key} : ${person[key]}`);
        
//     }
// }


// * Q🔟. एका ऑब्जेक्ट मधील key आणि value उलट करून नवीन ऑब्जेक्ट बनवा (for-in वापरून).
//       Write a for-in loop to create a new object with keys and values swapped.

// let swappedObj = {}

// for(let key in person){
//     swappedObj[person[key]] = key
// }

// console.log(swappedObj);












// *** While loop ***


// start
// while (end) {
//     chenge
// }


//* Q 1 Print numbers from 10 to 1 in reverse order.

// var num = 1
// while (num<=10) {
//     console.log( num++ );
// }



//* Q 2 Print numbers from 10 to 1 in reverse order.  

// var num = 10
// while (num >= 1) {
//     console.log( num-- );
// }



//* Q 3 Take a number as input and print its multiplication table. 

// var num = Number(prompt("table no dya"))
// var T = 1

// while (T <= 10) {
//     console.log(`${num} * ${T} = ${num * T}`);
//     T++
// }



//* Q 4 Find the sum of numbers from 1 to a given number 
// var num = 1
// var sum = 0

// while (num <= 100) {
// console.log(sum += num);

// }











// *** function ***

// ** function Statement

// function sanket() {

// }


// ** function expression

// var a = function() {

// }


// ** Anonymous Function
// function(){

// }



// ** fat arrow function 

// ()=>{

// }

// var b = ()=>{

// }


// ** fat arrow with one param 

// var S = (D)=>{
//    console.log(D);

// }
// S(100)


// ** fat arrow with Implicit Return 

// let arr = () => direct Return kru shakto js ki ( Number, String, Array, Object, function(){}, ex.... )







// *** 📌 1️⃣ Function Statement (Declaration) वर 10 प्रश्न ***


// * 1️⃣. एक फंक्शन तयार करा जे दोन संख्यांची बेरीज करेल.
//       Create a function that adds two numbers.

// function add(a, b) {
//     return a + b;
// }


// * 2️⃣. एक फंक्शन तयार करा जे दिलेल्या संख्येचा घन (cube) काढेल.
//       Create a function that returns the cube of a number.

// function cube(num) {
//     return num * num * num
// }

// var num = Number(prompt("num do :"))
// console.log("cube :", cube(num));


// * 3️⃣. नाव घेतल्यास "Hello" सोबत प्रिंट करणारे फंक्शन तयार करा.
//       Create a function that prints "Hello" followed by a name.
// function hloBolo(name) {
//     return "Hello " + name
// }
// let Nname = prompt("name sanga :")
// console.log(hloBolo(Nname));


// * 4️⃣. संख्या सम (even) आहे की नाही हे तपासणारे फंक्शन तयार करा.
//       Create a function that checks if a number is even.

// function chakeEven(val) {
//   return val % 2 === 0 ? `${val}  " ha num Even ahe" : ${val} " ha num Odd ahe"`
// }

// let number = Number(prompt("ek num do")) 
// console.log(num(number));


// * 5️⃣. दोन संख्या दिल्यास मोठी संख्या परत करणारे फंक्शन तयार करा.
//       Create a function that returns the larger of two numbers.

// function largernum(num1 , num2) {

// if (num1 > num2) {
//     return num1 + " larger Number"
// }
// else if(num2 > num1){
//     return num2 + " larger Number"
// }
// else{
//     return "same Number"
// }

// }

// let num1 = Number(prompt("ek no dya"))
// let num2 = Number(prompt("Ajun ek no dya"))

// console.log(largernum(num1 , num2));


// * 6️⃣. एक फंक्शन तयार करा जे दिलेल्या संख्येचे सर्व गुणक (factors) प्रिंट करेल.
//       Create a function that prints all factors of a given number.

// function printFactorys(num) {
//     for (let f = 1; f <= num ; f++) {
//        if (num % f === 0) {
//             console.log(f); 
//        }
        
//     }
// }

// let eknum = Number(prompt("ek no do :"))
// printFactorys(eknum);


// * 7️⃣. एका स्ट्रिंगला उलट करून परत करणारे फंक्शन तयार करा.
//       Create a function that returns the reversed string.

// function ultaString(str) {
//     return str.split('').reverse().join('')
// }

// let ekStr = prompt('ek string do :')
// console.log(ultaString(ekStr));


// * 8️⃣. दिलेल्या स्ट्रिंगमधील स्वर (vowels) मोजणारे फंक्शन तयार करा.
//       Create a function that counts the vowels in a string.

// function countsVowels(str) {
//     let matchs = str.match(/[aeiouAEIOU]/g);
//     return matchs ? matchs.length : 0 ;
// }
// let ekStr = prompt('ek string do :')
// console.log(countsVowels(ekStr));


// * 9️⃣. संख्येचा घटक 3 आणि 5 ने भाग जातो का हे तपासणारे फंक्शन तयार करा.
//       Create a function that checks if a number is divisible by both 3 and 5.

// function isDivisibleBy3And5(num) {
//     return (num % 3 === 0 && num % 5 === 0) ? `${num} is divisible by 3 and 5` : `${num} is Not divisible by 3 and 5`
// }
// let eknum = Number(prompt("ek no de do :"))
// console.log(isDivisibleBy3And5(eknum));


// * 🔟. दिलेल्या array मधून सर्व positive numbers परत करणारे फंक्शन तयार करा.
//      Create a function that returns only positive numbers from an array.

// function printPositiveNumbers(arr) {
//     return arr.filter(num => num > 0)
// }
// // let eknum = Number(prompt("ek no de do :"))
// console.log(printPositiveNumbers([1,2,-3,4,5,-6,-7,8,-9,10]));




// *** 📌 2️⃣ Function Expression वर 10 प्रश्न ***

// * Q1️⃣. संख्येचा वर्ग (square) परत करणारे function expression तयार करा.
//        Create a function expression that returns the square of a number.

// let square = function(num) {
//     return num * num
// }
// let eknum = Number(prompt('ek no de do :'))
// console.log(square(eknum));


// * Q2️⃣. संख्येचे तिप्पट करणारे function expression तयार करा.
//        Create a function expression that triples a number.

// let triplesNum = function (num) {
//     return num * 3
// }
// let eknum = Number(prompt('ek no de do :'))
// console.log(triplesNum(eknum));


// * Q3️⃣. नाव आणि वय घेतल्यास "नाव, वय वर्षे" असे प्रिंट करणारे function expression तयार करा.
//        Create a function expression that prints "Name, Age years".

// let printsNameAge = function (name , age) {
//     return `${name}, ${age} years`
// }
// let ekname = prompt("Your Name :")
// let ekage = Number(prompt('Your Age :'))
// console.log(printsNameAge(ekname , ekage));


// * Q4️⃣. संख्या सम (even) आहे का ते return करणारे function expression तयार करा.
//        Create a function expression that returns true if a number is even.

// let CheckNumberIsEven = function (num) {
//     return (num % 2 === 0)
//     // return (num % 2 === 0) ? `${num} ha number Even ahe` : `${num} ha number Odd ahe`   
// }
// let eknum = Number(prompt('ek number de do : '))
// console.log(CheckNumberIsEven(eknum));


// * Q5️⃣. एक array मधील प्रत्येक संख्येचा वर्ग काढून नवीन array तयार करणारे function expression तयार करा.
//        Create a function expression that squares each number in an array.

// let printSquare = function (arr) {
//     return arr.map(num => num * num)
// }
// console.log(printSquare([1,3,5,7,9,2,4,6,8,10]));


// * Q6️⃣. संख्येची शेवटची अंक परत करणारे function expression तयार करा.
//        Create a function expression that returns the last digit of a number.

// let lastDigit = function (num) {
//     return Math.abs(num) % 10
// }
// let eknum = Number(prompt('ek num de do :'))
// console.log(lastDigit(eknum));


// * Q7️⃣. संख्येच्या पहिल्या अंकावरून सम किंवा विषम आहे का ते ठरवणारे function expression तयार करा.
//        Create a function expression that checks if the first digit of a number is even or odd.

// let firstDigitEvenOrOdd = function (num) {
//     let firstNum = Number(String(num)[0])
//     return firstNum % 2 === 0 ? 'Even' : 'Odd'
// }

// let eknum = Number(prompt('ek num de do bhai :'))
// console.log(firstDigitEvenOrOdd(eknum));



// * Q8️⃣. संख्या negative आहे का हे तपासणारे function expression तयार करा.
//        Create a function expression that checks if a number is negative.

// let checkNegativeNumber = function (num) {
//     return num < 0 ? "Negative" : "Not Negative"
// }
// let eknum = Number(prompt('ek num de do bhai :'))
// console.log(checkNegativeNumber(eknum));




// * Q9️⃣. दोन संख्यांची सरासरी (average) काढणारे function expression तयार करा.
//        Create a function expression that finds the average of two numbers.

// let averageTwoNumbers = function (num1 , num2) {
//     return (num1 + num2) / 2
// }
// let num1 = Number(prompt('ek num de do bhai :'))
// let num2 = Number(prompt('or ek num de do bhai :'))

// console.log(averageTwoNumbers(num1 , num2));


// *** तू तीन किंवा जास्त संख्यांची सरासरी काढणारा function पण करू शकतोस:

// let averagemultipleNumbers = function (...Mnum) {
//     let sumNum = Mnum.reduce((acc , num)=> acc + num , 0)
//     return sumNum / Mnum.length

// }

// console.log(averagemultipleNumbers(10,20,30,40));



// * Q🔟. संख्येच्या पहिल्या आणि शेवटच्या अंकांची बेरीज करणारे function expression तयार करा.
//        Create a function expression that adds the first and last digit of a number.

// let addsFirstLastDigit = function (num) {
//     num = Math.abs(num)
//     let lastDigit = num % 10    

//     while (num >= 10) {
//         num = Math.floor(num / 10)
//     }
//     let fristDigit = num

//     return fristDigit + lastDigit
// }

// let eknum = Number(prompt('ek num de do : '))
// console.log(addsFirstLastDigit(eknum));




// *** 📌 3️⃣ Anonymous Function वर 10 प्रश्न ***

// * Q1️⃣. संख्येच्या वर्गमूळ (square root) परत करणारे anonymous function तयार करा.
//        Create an anonymous function that returns the square root of a number.
// console.log(function(){
//     let num = 20
//     num *= num
// }());



// * Q2️⃣. संख्या सम (even) आहे का ते तपासणारे anonymous function तयार करा.
//        Create an anonymous function that checks if a number is even.

// console.log((function () {
//     let num = Number(prompt("number do : "))
//     if (num % 2 === 0) {
//         return num + " ha num Even ahe"
//     }else{
//         return num +" ha num odd ahe"
//     }
// })());




// * Q3️⃣. संख्येच्या पहिल्या आणि शेवटच्या अंकांची बेरीज करणारे anonymous function तयार करा.
//        Create an anonymous function that adds the first and last digit of a number.

// console.log((function (num) {
//     num = Math.abs(num)
//     let lastDigit = num % 10 

//     while (num >= 10){
//         num = Math.floor(num / 10)  
//     } 
//     let fristDigit = num

//     return fristDigit + lastDigit 
// })(1219));




// *** 📌 4️⃣ Basic Fat Arrow Function वर 10 प्रश्न ***

// * Q1️⃣. संख्येचा वर्ग (square) परत करणारे fat arrow function तयार करा.
//        Create a fat arrow function that returns the square of a number.

// let a = ()=>{
//     let square = Number(prompt("ek no do"))
//     console.log(square * square);
// }
// a()


// * Q2️⃣. संख्येचे दुप्पट करणारे fat arrow function तयार करा.
//        Create a fat arrow function that doubles a number.

// let doublesNumber = num => num * 2 
// let eknum = Number(prompt('ek number de do :')) 
// console.log(doublesNumber(eknum));


// * Q3️⃣. संख्येची शेवटची अंक परत करणारे fat arrow function तयार करा.
//        Create a fat arrow function that returns the last digit of a number.

// let printLastDigit = (val) => Math.abs(val) % 10

// let eknum = Number(prompt('ek number de do :')) 
// console.log(printLastDigit(eknum));









// *** 📌 5️⃣ Fat Arrow Function with One Parameter वर 10 प्रश्न ***

// * Q1️⃣. संख्येचा cube (घन) परत करणारे fat arrow function तयार करा.
//        Create a fat arrow function that returns the cube of a number.

// let returnsCube = (num) => {
//     return num ** num
// }



// * Q2️⃣. संख्या सम (even) आहे का ते तपासणारे fat arrow function तयार करा.
//        Create a fat arrow function that checks if a number is even.

// let checkEvenNum = num => num % 2 === 0
// let eknum = Number(prompt('ek number de do:'))
// console.log(checkEvenNum(eknum));



// * Q3️⃣. संख्येच्या पहिल्या आणि शेवटच्या अंकांची बेरीज करणारे fat arrow function तयार करा.
//        Create a fat arrow function that adds the first and last digit of a number.


// let printLastDigit = val => {

//    val =  Math.abs(val)
//     let lastD = val % 10

//     while (val >= 10) val = Math.floor(val / 10)

//         return val + lastD
// } 

// let eknum = Number(prompt('ek number de do :')) 
// console.log(printLastDigit(eknum));





// *** 📌 6️⃣ Fat Arrow Function with Implicit Return वर 10 प्रश्न ***

// * Q1️⃣. संख्येचा वर्ग (square) परत करणारे fat arrow function तयार करा.
//        Create a fat arrow function that returns the square of a number.

// let squareOfNumber = num => num * num
// let eknum = Number(prompt('ek no de do :'))
// console.log(squareOfNumber(eknum));



// * Q2️⃣. संख्येचे तिप्पट करणारे fat arrow function तयार करा.
//        Create a fat arrow function that triples a number.

// let triplesNumber = num => num * 3
// let eknum = Number(prompt('ek no de do :'))
// console.log(triplesNumber(eknum));

// * Q3️⃣. संख्या सम (even) आहे का ते तपासणारे fat arrow function तयार करा.
//        Create a fat arrow function that checks if a number is even.

// let evenNum = num => num % 2 === 0
// let eknum = Number(prompt('ek no de do :'))
// console.log(evenNum(eknum));












// *** Array ***

//* Q 1 👉 Create an empty array, use push to add 3 elements, and then use pop to remove the last element.

// var arr = [1, 2, 3]

// arr.push(4, 5, 6, 7)
// var newArr = arr.pop()
// console.log(arr);



//* Q 2 👉 Add an element at the beginning of an array using unshift, then remove the first element using shift.

// var names = ["Sanket", "divya", "Priya", "Rahul", "Sneha"];

// names.unshift("Amit")
// console.log(names);

// names.shift()
// console.log(names);



//* Q 3 👉 Create an array and find its length.

// var names = ["Sanket", "divya", "Priya", "Rahul", "Sneha"];

// var nameLnt = names.length
// console.log(`Names Array Length : ${nameLnt}`);



//* Q 4 👉 Use a for loop to print each element of an array.

// var names = ["Sanket", "divya", "Priya", "Rahul", "Sneha"];

// for (var nam = 0; nam <= names.length; nam++) {
//     console.log(names[nam]);
    
// }



//* Q 5 👉 Use forEach to double each element of an array and print it.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.forEach((de)=> {
//     console.log(de * 2);
// })



//* Q 6 👉 Use map to square each element (x²) in an array and create a new array.
// var numbers = [2, 3, 4, 5, 6];

// var filterEvenNum = numbers.map( num => num ** 2)

// console.log(filterEvenNum);



//* Q 7 👉 Use filter to extract all even numbers from an array into a new array.

// var numbers = [10, 15, 22, 33, 40, 55, 60, 75, 80];

// var filterEvenNum = numbers.filter( num => num % 2 === 0)

// console.log(filterEvenNum);



//* Q 8 👉 Use find to get the first number greater than 50 from an array.

// var numbers = [10, 25, 48, 55, 60, 75, 80];

// var gtr50 = numbers.find(num => num > 50)
// console.log(gtr50);



//* Q 9 👉 Use includes to check if a specific element exists in an array.

// var names = ["Sanket", "divya", "Priya", "Rahul", "Sneha"];

// console.log(names.includes("Sanket"));



//* Q 10 👉 Use join to combine array elements into a single string.

// var names = ["Sanket", "divya", "Priya", "Rahul", "Sneha"];

// console.log(names.join(" "));
















// *** Object ***

// 1️⃣ एका विद्यार्थ्याची माहिती (name, age, grade) असलेला ऑब्जेक्ट तयार करा आणि तो कन्सोलवर प्रिंट करा.
// Create an object containing a student's details (name, age, grade) and print it to the console.


// 2️⃣ एका car ऑब्जेक्ट मध्ये brand, model, year आणि color अशी माहिती ठेवा आणि त्या ऑब्जेक्टमधून model आणि year प्रिंट करा.
// Create a car object with properties like brand, model, year, and color, then print the model and year.


// 3️⃣ person नावाचा ऑब्जेक्ट तयार करा ज्यामध्ये name, age, आणि city असतील. त्यानंतर, त्या व्यक्तीच्या city ला नवीन शहराने अपडेट करा.
// Create an object person with name, age, and city. Then, update the city property to a new value.


// 4️⃣ एका book ऑब्जेक्टमध्ये title, author, आणि price असतील. जर price ₹500 पेक्षा जास्त असेल तर "Expensive" प्रिंट करा, नाहीतर "Affordable" प्रिंट करा.
// Create a book object with title, author, and price. If the price is greater than ₹500, print "Expensive", otherwise print "Affordable".


// 5️⃣ employee नावाचा ऑब्जेक्ट तयार करा ज्यामध्ये name, position, आणि salary असतील. जर salary ₹30,000 पेक्षा जास्त असेल तर त्या एम्प्लॉयीचा position "Senior" म्हणून अपडेट करा.
// Create an employee object with name, position, and salary. If the salary is more than ₹30,000, update the position to "Senior".


// 6️⃣ एका mobile ऑब्जेक्टमध्ये brand, model, आणि features (array स्वरूपात) ठेवा. त्या features लिस्टमध्ये "5G" आहे का ते तपासा आणि result प्रिंट करा.
// Create a mobile object with brand, model, and features (as an array). Check if "5G" is present in the features list and print the result.


// 7️⃣ एका laptop ऑब्जेक्टमध्ये brand, processor, RAM, आणि price असतील. जर RAM 16GB असेल तर "High Performance Laptop" प्रिंट करा, नाहीतर "Basic Laptop" प्रिंट करा.
// Create a laptop object with brand, processor, RAM, and price. If RAM is 16GB, print "High Performance Laptop", otherwise print "Basic Laptop".


// 8️⃣ company नावाचा एक ऑब्जेक्ट तयार करा ज्यामध्ये name, location, आणि employees (संख्या) असतील. जर employees 1000 पेक्षा जास्त असतील तर "Large Scale Company" प्रिंट करा.
// Create an object company with name, location, and employees (count). If employees are more than 1000, print "Large Scale Company".


// 9️⃣ एका movie ऑब्जेक्टमध्ये title, director, releaseYear, आणि rating असतील. जर rating 4.5 पेक्षा जास्त असेल तर "Blockbuster" प्रिंट करा, नाहीतर "Average Movie" प्रिंट करा.
// Create a movie object with title, director, releaseYear, and rating. If the rating is above 4.5, print "Blockbuster", otherwise print "Average Movie".


// 🔟 एका game ऑब्जेक्टमध्ये name, genre, आणि platforms (array स्वरूपात) असतील. त्या platforms मध्ये "PC" आहे का ते तपासा आणि result प्रिंट करा.
// Create a game object with name, genre, and platforms (as an array). Check if "PC" is present in the platforms list and print the result.










// *** 📌 map() वर 10 प्रश्न: ***

// * Q1️⃣. संख्यांच्या array मधील प्रत्येक संख्येला 2 ने गुणून नवीन array तयार करा.
//        Multiply each number in the array by 2 and create a new array.

// let numbers = [1, 2, 3, 4, 5];
// let NewNumbers = numbers.map(function (val) {
//     return val * 2
// })
// console.log(NewNumbers);



// * Q2️⃣. नावांच्या array मधील प्रत्येक नाव UPPERCASE मध्ये बदलून नवीन array तयार करा.
//        Convert each name in the array to UPPERCASE and create a new array.

// let names = ["sanket", "rahul", "priya", "tanmay"];
// let NewNames = names.map( val => val.toUpperCase())
// console.log(NewNames);



// * Q3️⃣. संख्यांच्या array मधील प्रत्येक element चा cube (घन) काढा.
//        Find the cube of each number in the array.
 
// let numbers = [2, 3, 4, 5];
// let cubeNumber = numbers.map(val => val ** 3)
// console.log(cubeNumber);




// * Q4️⃣. वयाच्या (age) array मधून प्रत्येक व्यक्तीचे वय 5 वर्षांनी वाढवून नवीन array तयार करा.
//        Increase each person's age by 5 in the array and create a new array.

// let ages = [15, 20, 25, 30]; 
// let IncreaseAge = ages.map( val => val + 5 )
// console.log(IncreaseAge);



// * Q5️⃣. डिग्री सेल्सिअसला फॅरनहाइटमध्ये बदलणारा map() वापरा.
//        Use map() to convert Celsius to Fahrenheit.

// let celsius = [0, 10, 20, 30];
// फॉर्म्युला: F = (C × 9/5) + 32

// let  Fahrenheit = celsius.map((val)=>{
//         return ( val * 9/5 ) + 32
// }) 
// console.log(Fahrenheit);



// * Q6️⃣. संख्यांच्या array मधील प्रत्येक संख्येच्या पुढे "₹" लावून नवीन array तयार करा.
//        Add "₹" before each number in the array and create a new array.

// let prices = [100, 200, 300];

// let Nprice = prices.map( val => val + " ₹")
// console.log(Nprice);


// * Q7️⃣. प्रत्येक नावाच्या सुरुवातीला "Mr./Ms." लावून नवीन array तयार करा.
//        Add "Mr./Ms." before each name in the array and create a new array.
// 
// let names = ["Sanket", "Priya", "Tanmay"];



// * Q8️⃣. एक array आहे ज्यात objects आहेत. प्रत्येक व्यक्तीचे फक्त नाव काढून नवीन array तयार करा.
//        Extract only names from an array of objects and create a new array.

// let users = [ { name: "Sanket", age: 25 }, { name: "Priya", age: 30 }, { name: "Tanmay", age: 22 } ];

// let onlyNames = users.map(val => val.name)
// console.log(onlyNames);


// * Q9️⃣. संख्यांच्या array मधील प्रत्येक संख्येच्या पुढे "even" किंवा "odd" जोडा.
//        Append "even" or "odd" to each number in the array.

// let numbers = [1, 2, 3, 4, 5, 8, 43, 55];

// let Append = numbers.map(val => val % 2 === 0 ? val + " is even number" : val + " is odd number" )

// console.log(Append);





// * Q🔟. एक object array दिला आहे, त्यातील प्रत्येक व्यक्तीला "Hello" म्हणत नवीन array तयार करा.
//        Create a new array where each person in the object array gets a "Hello" message.

// let people = [{ name: "Sanket" }, { name: "Rahul" }];

// let hloMsg = people.map(val => "Hello " + val.name)
// console.log(hloMsg);




// *** 📌 filter() वर 10 प्रश्न: ***


// * Q1️⃣. फक्त सम (even) संख्या ठेवून नवीन array तयार करा.
//        Filter only even numbers and create a new array.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNum = numbers.filter( val => val % 2 === 0)
// console.log(evenNum);



// * Q2️⃣. फक्त 18 वर्षांपेक्षा जास्त वय असलेल्या लोकांचे array तयार करा.
//        Filter out only those who are older than 18 years.
// 
// let ages = [12, 18, 22, 25, 16, 30];

// let yearsOf18 = ages.filter(val => val > 18)
// console.log(yearsOf18);



// * Q3️⃣. 0 पेक्षा मोठ्या संख्यांचा नवीन array तयार करा.
//        Filter out numbers greater than 0 and create a new array.

// let numbers = [-5, 0, 10, -2, 8, 15];
// let newNum = numbers.filter( val => val > 0 )
// console.log(newNum);



// * Q4️⃣. फक्त 5 पेक्षा लांब असलेली नावं असलेला नवीन array तयार करा.
//        Filter names with more than 5 characters and create a new array.

// let names = ["Sanket", "Raj", "Tanmay", "Meera"];

// let nameLnt = names.filter( val => val.length > 5)
// console.log(nameLnt);


// * Q5️⃣. केवळ ज्या संख्यांना 3 ने भाग जाता येतो त्या ठेवून नवीन array तयार करा.
//        Filter numbers that are divisible by 3 and create a new array.
// 
// let numbers = [10, 15, 20, 30, 45, 50];

// let numOfDivisibleBy3 = numbers.filter( val => val % 3 === 0 )
// console.log(numOfDivisibleBy3);



// * Q6️⃣. फक्त "a" ने सुरू होणारी नावं असलेला नवीन array तयार करा.
//        Filter names that start with "a" and create a new array.

// let names = ["amit", "Sanket", "Ankita", "Rahul", "akanksh"];
// let StartOfAName = names.filter(val => val.startsWith("a"))
// console.log(StartOfAName);



// * Q7️⃣. एका object array मधून फक्त 25 वर्षांपेक्षा जास्त वय असलेल्या व्यक्ती काढा.
//        Filter people older than 25 from an object array.
// 
// let people = [
//     { name: "Sanket", age: 24 },
//     { name: "Priya", age: 28 },
//     { name: "Tanmay", age: 30 }
// ];

// let ageOf25 = people.filter( val => val.age > 25 )
// console.log(ageOf25);


// * Q8️⃣. 0 ने सुरू होणारे फोन नंबर फक्त ठेवा.
//        Filter phone numbers that start with "0".

// let phoneNumbers = ["0987654321", "1234567890", "0777888999"];
// let phoneNumbersStart0 = phoneNumbers.filter(val => val.startsWith(0))
// console.log(phoneNumbersStart0);


// * Q9️⃣. एक object array आहे, फक्त "active" असलेल्या users काढा.
//        Filter only "active" users from an object array.

// let users = [
//     { name: "Sanket", active: true },
//     { name: "Priya", active: false },
//     { name: "Tanmay", active: true }
// ];

// let activeUsers = users.filter(val => val.active === true )
// console.log(activeUsers);



// * Q🔟. फक्त ₹500 पेक्षा जास्त किंमतीच्या वस्तूंची यादी तयार करा.
//        Filter products that cost more than ₹500.

// let products = [
//     { name: "Bag", price: 400 },
//     { name: "Shoes", price: 800 },
//     { name: "Watch", price: 1000 }
// ];

// let productsCost500 = products.filter( val => val.price > 500)
// console.log(productsCost500);





