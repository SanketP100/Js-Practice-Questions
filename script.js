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



// *   user se maango ek num and num 10 se jada ho to helo print karo nhito hye pint karo

// var num = Number(prompt("ek number de do :"))

// if (num > 10) {
//     console.log("mi 10 peksha motha ahe " + num);
// }
// else{
//     console.log("mi 10 peksha lhan ahe "  + num);
// }



// * Q user se number mango and usme 20 add karo and agr wo 20 add krne pr 30 se jada aye to uska answoe print kro nhito msg do

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



// * Q user se 2 passwords mango and agr match kar jaye to login karo nhito mat karo 

// var pass1 = prompt("password :")
// var pass2 = prompt("verify password :")

// if (pass1 === pass2) {
//         console.log("Login sucssefuly");
// }
// else{
//     console.error("incorect password ");
    
// }



// * Q4 तुमच्याकडे temperature नावाचा variable आहे. जर तापमान 30°C पेक्षा जास्त असेल तर "It's hot!", 15 ते 30°C दरम्यान असेल तर "It's warm!", आणि 15°C पेक्षा कमी असेल तर "It's cold!" हा मेसेज दाखवा.

// var temperature = 10

// if (temperature < 30) {
//     console.log("It's hot!");
// }else if(temperature >=15 && temperature <= 30) {
//     console.log("It's warm!");
// }else{
//     console.log("It's cold!");
    
// }



//* Q5 Ek number input ghe. To positive ahe ka negative te sanga.

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



 //* Q6 Dilela number even ahe ka odd te check kara.

// var num = Number(prompt("ek no dya :"))

// if (num % 2 === 0) {
//     console.log("im Even");
// }
// else{
//     console.log("im odd");
// }



 //* Q7 User chi age input gya. Age 18+ asel tar "Eligible for voting" sanga, nahi tar "Not eligible" sanga.

// var age = Number(prompt("pliz mention your age"))

// if (age >= 18) {
//     console.log("Your eligible for voting");
// }else{
//     console.log("Your Not eligible for voting"); 
// }



 //* Q8 Don numbers dile tar konta motha ahe te find kara.

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



 //* Q8 Ek year input ghe ani to leap year ahe ka nahi te check kara.

// var year = Number(prompt("ek year sang :"))

// if (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0))  {
//     console.log( year + " leap year ahe...🎊☺️");
// }else{
//     console.log( year + " leap year nhiyee...😓");
// }



 //* Q9 Marks input ghe ani he logic vapra: 90+ ➝ A, 75-89 ➝ B, 50-74 ➝ C, <50 ➝ Fail

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



 //* Q10 Ek number check kara ki to 5 ani 3 ne donhi divide hotoy ka.

// var num = Number(prompt("ek no de"))

// if (num % 5 === 0 && num % 3 === 0) {
//     console.log(num + " ha number 5 ani 3 ne divide hoto");
// }
// else{
//     console.log(num + " ha number 5 ani 3 ne divide hot nahi");
// }



 //* Q11 Teen numbers dile tar konta lahan ahe te find kara.

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



 //* Q12 Ek letter input ghe ani vowel (a, e, i, o, u) ahe ka consonant te sanga.

// var letter = prompt("ek latter dya :").toLowerCase()

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     console.log(letter + " ha Vowel letter ahe.");
// }
// else{
//     console.log(letter + " ha consonant letter ahe.");
// }



 //* Q13 Triangle che teen angles dile astil tar tyancha sum 180° ahe ka nahi te check kara. Sum 180° asel tar "Valid triangle" nahi tar "Invalid triangle" sanga.

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

 //* Q 1 👉Print numbers from 1 to 10.

// for (let num = 1; num <= 10; num++) {
//     console.log(num);    
// }



 //* Q 2 👉 Find the sum of numbers from 1 to 10.

// let sum = 0
// for (let num = 1; num <= 10; num++) {
//     sum += num ;      
// }
// console.log(sum);



 //* Q 3 👉 Print the square of numbers from 1 to 10.

// for (let square = 1; square <= 10; square++) {
//         console.log(square * square);      
// }



 //* Q 4 👉 Print the multiplication table of a given number.

// var num = Number(prompt("ek num do:"))

// for (let i = 1; i <= 10; i++) {
//    console.log(`${num} * ${i} = ${num * i}`);
// }



 //* Q 5 👉 Print even and odd numbers separately from 1 to 10.

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

    

 //* Q 6 👉 Reverse a given string and print it.

// let str = prompt("ek string dya:")
// var rstr = ""

// for (var i = str.length - 1; i >= 0; i--) {
//     rstr += str[i]    
// }

// console.log(rstr);



 //* Q 7 👉 Print a countdown from a given number to 1.

// for (let num = 10; num >= 1; num--) {
//     console.log(num);        
// }



//* Q 8 👉 Print numbers divisible by 3 up to a given number.

// for (let num = 1; num <= 30; num++) {
//     if (num % 3 === 0) {
//         console.log(num);
        
//     }    
// }



 //* Q 9 👉 Print all elements of an array.

// var arr = [10,20,30,40,50,60,70,80,90]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
        
// }



//* Q 10 👉 Print the first 10 numbers of the Fibonacci series.

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



//* Q 1 Print each element of the array [1, 2, 3, 4, 5] using forEach.

// var arr =  [1, 2, 3, 4, 5] 

// arr.forEach(function (a) {
//     console.log(a);
        
// })



//* Q 2 Convert each string in the array ["apple", "banana", "cherry"] to uppercase and print it.

// var arr =  ["apple", "banana", "cherry"]

// arr.forEach( frt => console.log(frt.toUpperCase()))



//* Q 3 Print the square of each number in the array [2, 4, 6, 8, 10].

// var arr = [2, 4, 6, 8, 10]

// arr.forEach( num => console.log(num * num))



//* Q 4 Append "is learning JavaScript" to each name in the array ["Sanket", "Raj", "Pooja", "Amit"] and print it.

// var names =  ["Sanket", "Raj", "Pooja", "Amit"]

// names.forEach( name => console.log(name + " is learning JavaScript"))



//* Q 5 Find the sum of all numbers in an array using forEach.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0
// numbers.forEach( num => console.log("Total sum : " , sum += num))



//* Q 6 Add "is available" to each product in the array ["Laptop", "Mouse", "Keyboard"] and print it.

// var products = ["Laptop", "Mouse", "Keyboard"] 

// products.forEach( avlblPdct => console.log( `${avlblPdct} + is available `))



//* Q 7 Multiply each number in [10, 20, 30, 40, 50] by 5 and print it.

// var DilelaNum = Number(prompt("ek number dya : "))
// var arr =  [10, 20, 30, 40, 50] 
// arr.forEach( num => console.log( num * DilelaNum))



//* Q 8 Print the length of each word in the array ["cat", "dog", "elephant"].

// var anmls = ["cat", "dog", "elephant"]

// anmls.forEach(anml => console.log(`${anml} = ${anml.length} is Word Langth`))



//* Q 9 Print each element with its index and first letter from an array.

// let names = ["Sanket","Divya", "Amit", "Pooja", "Rahul", "Sneha", "Om", "Vishal"];

// names.forEach((name, index) => console.log(`index ${index}: ${name.charAt(0)}`))














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

//* Q 5  Reverse a given number 
//* Q 6 Check if a number is Palindrome (उदा. 121 → Palindrome, 123 → Not Palindrome).
//* Q 7 Check if a number is an Armstrong Number (उदा. 153 → Armstrong, 123 → Not Armstrong).
//* Q 8 Find the factorial of a given number 
//* Q 9 Print only even numbers from 1 to 50.
//* Q 10 Print only odd numbers from 1 to 50.















// *** function ***


// function sanket() {
    
// }

// var a = function() {
    
// }

// function(){

// }

// fat arrow function 

// ()=>{

// }

// var b = ()=>{

// }

// fat arrow with one param 

// var S = (D)=>{
//    console.log(D);
   
// }
// S(100)