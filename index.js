// a variable is a container of only storing data
// a variable behaves as if it was the value that it contains

//two steps:
// 1. declaration of variabl(var, let, const)
// 2. assignment ( = asignment value)

// var firstName = "seth"; // string variable
// console.log(firstName);

// var num1 = 6    //number data type
// var num2 = 2    //number data type
// console.log(num1 - num2); //number data type


// var todayIsMonday = true; // boolean
// console.log(todayIsMonday)


// var isHere = null; //Null datatype
// console.log(isHere);

// var notHere       //undefined
// console.log(notHere)


//alert ("welcome user" 
// var VisitorName = prompt ("what is your name?")

//var Favoritecolor = prompt ("what is your favorite color?")

//document.write("hello  + " " + VisitorName + " " + "Your favorite color?" + " " + Favoritecolor)

//console.log("program  s complete")





// let num = prompt('Enter a number?');{

// if ('num1') {alert('Happy People');}
// }

// variable mutation and type coercion example
// type coercion example

//Js automatically converts the number and all of the line into code\

// var firstName = "Seth" // string
// var age = "19" // number

// console.log(firstName+" "+ age);

// var job, isMarried

// job = "intern"; // string
// isMarried= false; // boolean

// console.log(firstName + " " + "is " + age + " " + "is also an " + job + " and he is not " + isMarried);

// age = "twenty five"
// job = "driver"

// console.log(firstName + " " + "is " + age + " " + "is also an " + job + " and he is not " + isMarried);

// var myRollnumber = 10; // number data type

// myRollnumber = "false" //changing a variable type to a string

// console.log(myRollnumber)

// var first, second, third, forth; //declaring our variable still has no value

// first = "seth"

// second = "test"

// third = "lets"

// fourth = "best"


// console.log(first + "," + second)

// // changing variable to "mutate/change" the value

// second = "pest"

// console.log(first + "," + second)

// third = "must"

// second = "bust"

// console.log(third + "," + second)

//------------------------------------------------------------------

// // back tics
// var fName = `seth`
// var lName = `the best`
// var age = `19`

// console.log(`${fName} ${lName} is ${age} years old.`);

// //immunibility
// const bDay =  'April 7';
//  console.log(bDay);

//------------------------------------------------------------------

// simple number type var
//  z = x+y
// // using typeof typeof 
// typeof "mark";
// // addition operator
//  x+=y
// // subtraction operator
//  x-=y
// // multiplication operator 
// x*=y
// // division operator
//  x/=y

// modulus  operator import/ export. 

// import {name, age} from ""
// let text = "My name is " + name + ", I am " + age + ".";
// document.getElementById("demo").innerHTML = text

// using shortcuts in operator
// using multiple variables
// negative number

//------------------------------------------------------------------

// var mM = 78
// var mH = 1.69

// z = mM / (mH*mH)
// console.log(z)

// var jM = 92
// var jH = 1.95

// x= jM / (jH*jH)
// console.log(x)

// if (z>x){
//     console.log(true)
// }

//------------------------------------------------------------------

// let num = prompt("Enter a number?"); 
// switch (num) {
//       case '0':
// 	alert( 'Happy People' );
//     break;
//       case '1': 
// 	alert( 'NOPE' ); 
// 	break; 
//      case '2': 
//           alert( 'Two' ); 
//           break; 
//      case '3': 
// 	alert( 'hmmmmmm' );
// 	break; 
//      default: 
//           alert( 'read directions' );
//  }

//------------------------------------------------------------------
// var num1 = 0
// var num2 = 1 
// var num3 = 2
// var num4 = 3


// var num1 = 'HI'
// var num2 = 'Hi'
// var num3 = 'hi'


// alert ('welcome!')
// let num = prompt("respond with (hi or HI or Hi)")
// switch  (num1){ case 'HI':
// alert('speak up!!!!');
// }


//------------------------------------------------------------------

// // set a and b into variables

// var a = 25
// var b = 19

// //create a function, which would be multiply in this case

// //divide to reverse multiply????

// function multiply(a,b){
//     return a/(1 / b);
// }
// console.log(a/(1/b));



// // (i) serves as function to count
// function multiply(a, b){
//     return ("i").repeat(a).repeat(b).length    
// }
// // so (i) repeated by how many times (a) is and then (a) is then repeated  how many (b) is  

// console.log(("i").repeat(a).repeat(b).length);

// // and length counts how many times (i) is displayed

//------------------------------------------------------------------

// let fName = "justin is amazing"
// // let num = fName.length;
// let times = 25;
// // console.log(num);

// function multiply(hello1, hello2 = 20){
//     let nSelf = hello1;
//     for(let i = 1; i<hello2; i++)
//     hello1 += nSelf;
//     return hello1;
// }
// console.log(multiply(fName.length));

//------------------------------------------------------------------


// var greeting = "hello"

// if (greeting === "hello"){
//     console.log(greeting + " world");
// }

//------------------------------------------------------------------

// var num1 = 10

// if (num1 === 20){
//     console.log("even")
// }

//------------------------------------------------------------------


// var score = 50;
// var grade = null;

// if (score >= 60){
//     console.log("passing");
// } else { console.log("failing");

// }

//------------------------------------------------------------------

// var x = 10;

// if (x % 2 == 0){
//     console.log("this number is even")
// } else{
//     console.log("this number is odd")
// }

//------------------------------------------------------------------

// var score = 69
// var grade = null

// if (score >= 90){
//     console.log("A")
// }else if (score >= 80){
//     console.log("B")
// }else if (score >= 70){
//     console.log("C")
// }else if (score >= 60){
//     console.log("D")
// }else if (score <= 50){
//     console.log("F")
// }

//------------------------------------------------------------------

// var x = 6
// var y = 12

// if (x > y){
//     console.log("good morning world ");
//     } 
// else if (x < y){console.log("good night world");
//     }
// else {
//     console.log("what time is it?");
//     }

//------------------------------------------------------------------

// var x = 6;
// var y = 12;
// if (x > y) {
//   console.log("goodmorning World");
// } else if (x < y) {
//   console.log("Good Night World ");
// } else {
//   console.log("What time is it?");
// }

//------------------------------------------------------------------

// //we created our return statement 

// function nameoffunction(name1,last2){
//     console.log(name1+last2);
// }
// nameoffunction("seth ","the best")
// nameoffunction("still ", "the best")

//------------------------------------------------------------------

// // here we will create our return statement

// function giveNumber(){
//     return 34
// }

// // we will call our return statement by declaring a variable with a value

// console.log(giveNumber()+ 17)
// console.log(giveNumber()+ 1)

//------------------------------------------------------------------

// function greeting(name){
//     alert("Hello " + name) 
// }

// function proccessUserInput(callback){
//     var name = prompt("Please enter your name");
//     callback(name);
// }

// proccessUserInput(greeting);

//------------------------------------------------------------------

//functions with math
//here we will create a function called "adder" that takes these 3 parameters (x,y,z)

// function adder (x,y,z){
//     console.log(x + y + z)
// }
//  // here is where we will execute our code by calling it adder function

// adder (1,4,1)
// adder (15,16,18)

// // we can also create an adder function with a return statement 

// function adderReturn(x,y,z){
//     return x + y + z;
// }
//  var result = adderReturn(46,48,63);
// console.log(result)

//------------------------------------------------------------------

// function multiplier (x,y,z){
//     console.log(x*y*z)
// }

// multiplier (2,3,4)

//------------------------------------------------------------------

/// in class coding Challenge
// Creates a Function called "vowelChecker" that takes in a single argument (x).
// vowelChecker will grab the first letter (character)...
// Then check if that first letter is a vowel.

// function vowelChecker(str){
//         let counter = 0;

//         // array of vowels that'll be checked
//         const checker = ["a","e","i","o","u"];

//         // create a loop
//         // forces the letters to be lowercase to be able to count
//         for (let char of str.toLowerCase()){

//             // checks if char is a vowel
//             // if statement is true then adds point to counter as long as the vowels are being used
//             if (checker.includes(char)){
                

//                 //if char is a vowel it will update the counter
//                 counter++;
//         }
//     }
//         return counter
//     }

// console.log(vowelChecker("hello"));

//------------------------------------------------------------------

// this the method that was being used above
// function vowels(str) {
//     let counter = 0;
//     const checker = ["a", "e", "i", "o", "u"];
//     for(let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(vowels("hello"));

//------------------------------------------------------------------

// function vowelChecker(x) {
//   // vowelChecker will grab the first letter (character)...
//   var firstChar = x.toLowerCase().charAt(0);
//   // Then check if that first letter is a vowel.
//   if (
//     firstChar === “a” ||
//     firstChar === “e” ||
//     firstChar === “i” ||
//     firstChar === “o” ||
//     firstChar === “u”
//   ) {
//     // If so... it will log that.
//     console.log(“OMG. The first letter is a vowel!“);
//   } else {
//     // If not... it will log that.
//     console.log(“First letter is NOT a vowel. *sadface*“);
//   }
// }
// // Here we will execute our function by Calling our vowelChecker function.
// vowelChecker(“Aek”);
// vowelChecker(“Nah”);

//------------------------------------------------------------------

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. 
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
// They will not contain numerals.

// function feast(beast,dish){
// return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
// }




// feast("brown bear", "bear claw");
// feast("chickadee", "chocolate cake");


//------------------------------------------------------------------

// function animalDish(name, dish) {
//     function firstChar(string) {
//       return string.toLowerCase().split(" ").join("").substring(0, 1);
//     }
  
//     function lastChar(string) {
//       return string.toLowerCase().split(" ").join("").substring(0, -1);
//     }
  
//     if (
//       firstChar(name) === firstChar(dish) &&
//       lastChar(name) === lastChar(dish)
//     ) {
//       console.log("THEY ARE ALLOWED!");
//     } else {
//       console.log("THEY ARE NOT ALLOWED");
//     }
//   }
  
//   animalDish("great blue heron", "garlic naan");
  
  
//------------------------------------------------------------------

// for loop
//example of a for loop
//here we will start by creating a const variable

// const n = 3; // variable that = 5

// //for loop use, to create values that accept 1-5
// for (let i = 1; i <= n; i++ ){ // created a condition to go through 1-5
//     for (let i = 1; i <= n; i++ ){ // created a condition to go through 1-5
//     console.log(i);
// }
// }

//------------------------------------------------------------------

// while loops

// let i = 0;
// while(i<11){
//     //we set a condition to only accept numbers less than 10
//     console.log(i);
//     i++ //we set a number to go up with positive i++
// }

//------------------------------------------------------------------

//do while

// let i = 5
// do{
//     console.log(i)
//     i--
// }while (i<10 && i>0);




// let i = 5 
// do{
//     console.log(i)
// }while (i<10);

//------------------------------------------------------------------

//for loop 

// const person = {
//     name:"Seth",
//     age: "19",
//     occupation:"kingpin"
// };

// for (const prop in person){
//     console.log(person[prop])
// }

//------------------------------------------------------------------

// for / of loop 

// const numbers = [5,9,13];

// for(const n of numbers){
    // console.log(n);
// }

//------------------------------------------------------------------

// Example:

    // counts by 2

// let n1 = 22;

// for (let i = 2; i <= n1; i++ ){
//         for (let i = 2; i <= n1; i++, i++){ 
//         console.log(i);
//         }
//     }

//------------------------------------------------------------------

// this is how you create an object 

// var person = { //  we created a variable with the value of a person
//     fName:"seth",
//     lName:"the best",
//     age:"19",
//     eyeColor:"hazel"
// };

// console.log(person); // console log our person var that holds our values


// var person2 = new Object();

// person2.fName = "seth";
// person2.birthyear="2003";
// person2["hobby"] = "editing";
// person2["lName"] = "the best";

// console.log(person2)

//------------------------------------------------------------------

// var classroom = {
//     educator: ["latoral"],
//     students: ["zack,zeke,xavier,zekiel"],
//     location: ["charlotte"],
//     numstudents: "21",
// }
// console.log(classroom);


// var gdsGrad = {
//     name: "seth the best",
//     school: "CCHS",
//     skills:["english", "math", "biology", "social studies","history", "chemistry", "physics"]
// }
// console.log(gdsGrad);

// console.log(gdsGrad.name);
// console.log(gdsGrad.skills[3]);
// console.log(gdsGrad.school)

//------------------------------------------------------------------

//objects with functions

// var student = {
//         name:"seth",
//         birthyear:"2003",
//         calcAge:function(){
//             return 2022 - this.birthyear;
//         },
        
// };

// console.log(student.name + " is " + student.calcAge() + " Years old");


//------------------------------------------------------------------

//arrays demo

//creating array

// let arr1 = ["Frosted flakes", "Cheerios", "fruit loops", "cinnamon toast crunch", "captain crunch"];

// //reference Cheerios
// console.log(arr1[1]);
// //using a push
// //will comback undefined
// console.log(arr1[5]);

// arr1.push("reeses puffs")
// console.log(arr1[5]);

// let emptyarr=[];
// console.log(emptyarr);

// emptyarr.push("jets");
// console.log(emptyarr);

// emptyarr.push[0] = "The panthers";
// console.log(emptyarr[0]);

// //length of an array
// console.log(arr1.length)

//------------------------------------------------------------------

// let myGroup = ["Seth", "Sheldon", "Nazir", "Aida" , "Y-Jacob"]
// console.log(myGroup)
// console.log(myGroup[0]+ " has " + myGroup.length + " people in their group including himself.")

//------------------------------------------------------------------

// // Our array of zoo animals.

// var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// //push adds an element to end of array

// zooAnimals.push("otter")
// console.log(zooAnimals);

// //unshift adds an element to the beggining of the array

// zooAnimals.unshift("polar bears");
// console.log(zooAnimals);

// //pop removes an element from the end of an array

// zooAnimals.pop();
// console.log(zooAnimals);

// //lets see what we removed
// console.log(zooAnimals)

// //splice can madd things in unspecified location

// zooAnimals.splice(2,0, "llama","elephant")
// console.log(zooAnimals)


// //indexOf shows where a specific is located

// console.log(zooAnimals.indexOf("llama"))


// // array the locoation is linked to a number
// // Object the location is linked to a key

// user= {
//     firstName:"seth",
//     SS: 85641853,
//     faveFood: "chicken"
// }

// console.log(user);

//------------------------------------------------------------------

// Create a conditional statement that checks if the name ‘Lucy’ is present in the pods array.  
// If she is present console.log ==> ‘Lucy is my pod leader’ 
// If not, console.log ‘Lucy is not my POD leader’

// var myPod = ["Lucy"];
// if {}




//------------------------------------------------------------------


// Add ‘Tori’ to the end of your myPod array
// Create a conditional statement that checks if ‘Tori’ is present
// If she is present use a method to remove her from the array
// If she is not present console.log ‘R2H Pods Rock!’



// let myGroup = ["Seth", "Sheldon", "Nazir", "Aida" , "Y-Jacob","Tori"]
// console.log(myGroup)
// console.log(myGroup[0]+ " has " + myGroup.length + " people in their group including himself.")


//------------------------------------------------------------------

// Create a function that will return a Boolean specifying if a number is prime?

// function isPrime(n)
// { // n being the number
//     if (n < 2) //any number(n) less than 2 will remain false
//             return false;

//     if (n == 2) // and if it's equal to 2 then it's true/ it's mostly setting a limit
//         return true;

//     var maxDiv = Math.sqrt(n);  // sqrt = square root

//     for(var i = 2; i <= maxDiv; i++) // (<=) is an arrow function, (i = 2) means that our index starts at 2 and will accept numbers greater than or equal to 
//     { // for will create a loop
//         if (n % i == 0)   //  the remainder the number(n) by the increment if it equals 0 then it is a prime number and it is false
//         {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(2, " is prime? ", isPrime(2));
// console.log(3, " is prime? ", isPrime(3));
// console.log(4, " is prime? ", isPrime(4));
// console.log(5, " is prime? ", isPrime(5));
// console.log(9, " is prime? ", isPrime(9));

// var x = 11
// var y = 2
//  console.log(x % y )

//------------------------------------------------------------------

// this statement

// var john ={
//     name:'john',
//     yearofbirth: 1990,
//     calculateAge: function(){
//         console.log(this);
//         console.log(2016-this.yearofbirth);
//     }
// };



// john.calculateAge()

//------------------------------------------------------------------

// Create a new object called person. 
// Include the following key-value pairs: 
// firstName
// lastName
// fullName      Set this to a function expression 
// Inside the function (method), generate the fullName of the person (firstName + lastName)     use the this keyword! 
// Call the function and print the value of fullName to the console


// var person={
//     firstName: 'Seth ',
//     lastName: 'The Greatest',
//     fullName:function(){
//         console.log(this);
//         console.log(this.firstName + this.lastName);
//     }
// };

// person.fullName()

//------------------------------------------------------------------

// global scope vs local scope

// Global scope example

// If we difine it outside the function it should be a global scope


// this area is out Global scope
// let fName = "seth"
// //this area is out Global scope
// function sayHi(greeting){
//     return greeting + fName + "!";
// }

// console.log(sayHi("Good Morning"))


//local scope example

// function sayHi(greeting){
// let fName = " Seth"; //local scope/ can't access name outside the scope
// return greeting + fName + "!";
// }

// console.log(sayHi("Good Morning"))


// // Example of our original scope and inside a different function

// var fName = " seth"; // Global scope

// function anotherFunction(){
// let fName = "seth";   // local scope in another function
// }

// function sayHi(greeting){
// //local scope is everything inside our function//
// return greeting + fName + "!";
// }

// console.log(sayHi("Good Morning"));

//------------------------------------------------------------------


//this keyword

// var seth = {
//     name:"Seth",
//     yearofbirth:2003,
//     calculateAge:function(){
//         console.log(this);
//         console.log(2022-this.yearofbirth);
//     },
// };

// seth.calculateAge()

//------------------------------------------------------------------

// var exposed = "The string is visible everywhere!"

// function firstFunction(message){
//     // Inside of firstFunction, i can see both exposed and message
//     console.log(message + exposed)
// }

// firstFunction("oh My! ")

// // //------------------------------------------------------------------

// function secondFunction(exposed){
//     //secondFunction should be able to see exposed 
//     // variable we declare above, but we "shadowed" it
//     console.log(exposed)
// }

// secondFunction("This isn't what i thought i wrote....")



// function thirdFunction(message){
//     return message + exposed;
// }

// var message = thirdFunction("oh My! ")
// console.log(message)


// CHALLENGE: Write a function that takes a string argument, and prints:
// name + " likes " + str + "."

//--------------------------------------------------------------------------------------

// function exercise(out){
//     return function(){
//         return "Today's Activity: " + out;
//     }
// }

// console.log(run());


// ppi = () => {
//     const personInformation = {
//       name: "something",
//       ssn: 1234567890,
//     };
//     return (() => personInformation.name)();
//   };
  
//   getName = (x) => `This order is being delivered to ${x}`;
  
//   console.log(getName(ppi()));


// var x = [2, 4, 7, 11, 15, 16]

// if (x % 2 ==0){
//     console.log()
// } else{
//     console.log()
// }








// let arr = [2, 4, 7, 11, 15, 16]

// let odds = arr.filter(n => n % 2 == 1)

// console.log(odds)


// let x = [2, 4, 7, 11, 15, 16]

// let even = x.filter(n => n % 2 == 0)



// console.log( 2 % 2)



// const arr = [1,2,3,4,5,6,7,8,9,10]

// function z(num){
//     for (let i = 2; num >i; i++){
//         if(num % i === 0){
//             return false
//         }

//     }
//    return num > 1;
    
// }


// console.log(arr.filter(z));




// this the method that was being used above
// function vowels(str) {
//     let counter = 0;
//     const checker = ["a", "e", "i", "o", "u"];
//     for(let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             counter++;
//         }
//     }
//     return ("this is a vowel");
// }

// console.log(vowels("b"));

// var x = 336

// var y = 360






// function gcd(a,b){
//     var arr1 = [];
//     var arr2 = [];
//     for (var i=1; i<= a; i++){
//     if (a%i == 0){
//     arr1.push(i);
//     }
//     }
//     for (var j=1; j<= b; j++){
//     if (b%j == 0){
//     arr2.push(j);
//     }
//     }
//     var num = [];
//     for(var m=0; m< arr1.length; m++){
//     for(var n=0; n< arr2.length; n++){
//     if (arr1[m] == arr2[n]){
//     num.push(arr1[m]);
//     }
//     }
//     }
//     num.sort(function(c,d){
//     return c-d;
//     });
//     return num[num.length-1];
    
//     }
//     // console.log(gcd(12, 13));
//     console.log(gcd(9, 3));





// function gcd(x, y){
//     if(!y) return y === 0 ? x : NaN;
//     return gcd(y, x % y);
//     }
//     console.log(gcd(12, 8));
//     console.log(gcd(15, 5));
//     console.log(gcd(12, 13));


    // function gcd_two_numbers(x, y) {
    //     if ((typeof x !== 'number') || (typeof y !== 'number')) 
    //       return false;
    //     x = Math.abs(x);
    //     y = Math.abs(y);
    //     while(y) {
    //       var t = y;
    //       y = x % y;
    //       x = t;
    //     }
    //     return x;
    //   }
      
    //   console.log(gcd_two_numbers(12, 13));
    //   console.log(gcd_two_numbers(9, 3));




        // WORKS //
var grades = [[90,70,90],[90,70,80],[75,85,90]]
var grade1 = [80,60,95]
var grade2 = [90,70,80]
var grade3 = [75,85,90]


var total = 0;
for(var i = 0; i < grade1.length; i++) {
    total += grade1[i];
} var avg1 = total / grade1.length;

var total = 0;
for(var i = 0; i < grade2.length; i++) {
    total += grade2[i];
}var avg2 = total / grade2.length;

var total = 0;
for(var i = 0; i < grade3.length; i++) {
    total += grade3[i];
}var avg3 = total / grade3.length;

console.log(avg1)
console.log(avg2)
console.log(avg3)





var grades = [[90,70,90],[90,70,80],[75,85,90]]


var arr  = grades.splice(0,1)
console.log(arr)

var total = 0;
for (var i = 0; i < arr.length; i++){
    total += arr[i];
} var avg = total / arr.length;

console.log(avg)


var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var b = a.splice(0,10);
console.log(b)
console.log(a)




