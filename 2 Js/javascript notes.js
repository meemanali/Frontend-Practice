<script type="text/javascript">
    // document.write("First js code in html file." , "<br>"); // used to print text on web page. br add moves code after this to new line

    // document.getElementById('ptag').innerHTML = "this is p tag."; // it was not working ie giving error in browser console bec we've declared this before declaration of p tag in body thus we now write this script tag after body tag.
// we cana also use: document.getElementsByName // here we r elements not element

    // var a = 23;
    // var b = "this is b var. ";

    // document.write(" " + a + b);
    // console.log("it prints only in console thus only developers can see it");

    // prompt('get out from my web'); // gives promt to user

    // var answer = prompt('wanna go for dinner with me?'); // stores result from user to a var. always returns string
    // document.write("reply from jan e man = "+ answer);

    // alert("your last warning , get out"); // similar to alert dialouge in android / windows form

    // var a = 2.27934;
    // var b = wwg; // it will not prints and also code after it even code after it, is accurates

    // document.write(a.toFixed(2)); // prints 2.28 . tofixed rounds off this num and prints only 2 num after decimal point
    // document.write(b);


//-----

    // var totalamount = prompt("Enter total amount for after party");
    // var totalpeople = prompt("Enter num of peoplre for after party");

    // document.write("Amount per head = ", totalamount/totalpeople , "<br>"); // print NaN (not a num. when v r doing math problems nd v get a invalid result then we get this) if we not write anything in promt textbox

// math funcs:

    // document.write("2 ^ 3 = ", Math.pow(2,3), "<br>");
    // document.write("math.abs(-3) = ", Math.abs(-3) , "<br>"); // abs is absolute thus change -ve num to +ve

    // document.write(Math.random().toFixed(5)); // returns a decimal number bw 0 and 1

// string funcs:

    // var a = "CodeWithSirYahya";
    // document.write(a.length, "<br>");
    // document.write(a.charAt(4) , "<br>");
    // document.write(a.indexOf('i') , "<br>"); // prints index of first i occured in this string. it takes string value if we give int value then it prints -1. for string wc use "" or '' both
    // document.write(a.slice(2,5)); // prints from 2 index ie from d to 4th index ie to W thus prints deW. if we give only one value , it starts from that index to last
    // a.replace


//-----

    // var a = ["Sadiq", "Danish", "eeman"];
    // var b = [1,2,3];
    // var c = ["eeman", 'a', 3]; // we can also give diff types of data types inside it

    // document.write(a[0], "<br>");
    // document.write(a); // prints whole array inlcuding , bw them

    // document.getElementById('ptag').innerText = "this is p tag"


//-----

// functions

// function func(){
//     alert('u clicked on p tag');
// }

// function func(name, lastname){ // parameter. this name is accessible only in this function. if we not pass 
//     document.write('Your name is = ', name, lastname) // if we not pass value for this second parameter then its value is undefined. but method still be called and these lines of code will execute
// }

// func('Eeman', "Danish"); // argument is actual value we pass to func
// func("Mani");
// func();

// // to get a value returned by a fun

// function func(first, second){
//     return first * second;
// }

//  // now everytime after this method we call func method this method is called instead of above
// document.write(func(5,5)); // document.write() is also a function call. inside this func call v r again calling a func



//-----

// arrays

/* 
array is a DS which v used to represent list of items. as js is dynamically typed thus data type, legnth and values of array r also dynamic. eg wc expand array size , insert different types of values in a array
[] called arra literals
datatype of an array in js is also object
*/

// let array = ['eeman', 21];
// document.write(array, "<br>");
// array[2] = 'Danish';
// document.write(array, "<br>");

// // arrays has many properties wc access with '.' . an array automatically get these properites whenever we decalre it
// document.write(array.length);


//-----

// arith op:        +,-,/,*,** called expoenetiation, increment and decrement ops (both prefix and postfix)
// relation op:     => , != , <
// equality op:     == lose equality op (only value), === strict equality op (value + datatype), !== not equal to
// logical op:      &&, ||, !
// assignment op:   =, -=, +=, *=
// ternary op:      

// document.write(2*4 , '<br>'); 
// document.write(2**4); // 2 power 4 ie 2^4

// document.write(1 === 1); // checks value and datatype. true
// document.write('1' === 1); // false
// document.write('1' == 1); // only checks value. true
// document.write(true === 1); // false
// document.write(true == 1); // true

// // ternary
// let points = 110;
// let type = points > 100 ? 'Excellent' : 'Better'
// document.write(type);


//-----



//-----

// // instead od declaring multiple vars for a same thing wc create a object datatype in which we give values in key pair. it makes code cleaner. (mani it's similar to json)
// var person = {
//     name: "Eeman",
//     age: 21
// };

// document.write(person);
// console.log(person);

// //  to read/write object this we have 2 ways:

// // dot notation:
// document.write(person.name);
// person.age = 'eeman';
// document.write(person.age);

// // bracket notation:
// person['name'] = 'kuta';

// // first way is short, we can use that . but second ismroe useful in some situations eg if we dont know key of object thus we
// let property = 'name';
// person[property] = "Mani";

//-----


// control flow:    

    // if(10 > 11)
    //     document.write('10 is greater than 1'); // if w not give {} after conditiom thus it will take only 1 line , after it, in if block
    //     // document.write('inside if block or not'); // this line is not included in if block
    // else{

    // }

// switch statement is same as in c#

// for, while, do while (at least runs once even if consition is false) also same
// we have foreach, forin, forof extra loops in js



// let object = {
//     name: 'Eeman',
//     age: 21,
//     Hieght: "5'7"
// }


// document.write(object['name'] , "<br>"); // prints Eeman
// document.write(object , "<br>"); // prints [object object]
// console.log(object); // it prints whole object but in console

// document.write();

// document.write("<br>");

// for (let key in object) {
//     document.write(object[key] , "<br>"); // prints values hold by keys
// }

// for (let key in object) {
//     document.write(key , "<br>"); // prints names of keys
// }

// for (let key in object) {
//     document.write(key, ": " ,object[key] , "<br>"); // 
// }

// let colors = ['red', 'green', 'blue'];
// for (let key in colors) {
//     document.write(key, " "); // prints index 0 1 2
// }
// for (let key in colors) {
//     document.write(colors[key], " "); // prints red green blue
// }

// // for of starts from es6 or ecma 6. we noramly use forof for arrays and forin for getting object
// for (const iterator of colors) {
//     document.write(iterator, " "); // red green blue. instead of holding index in each iteration it holds values in array
// }

// // giving error in console (js errors r shown in console). may be we cant use forof for object
// for (let iterator1 of object) {
//     document.write(object); // 
// }


// -----

// // break terminates the loop
// for (let index = 0; index < 10; index++) {    
//     if(index === 5) break;
//     document.write(index , "<br>");    
// }
// // when browser/compiler sees continue word it moves back to start of loop ie terminates that iteration
// for (let index = 0; index < 10; index++) {    
//     if(index === 9) continue;
//     document.write(index , "<br>");    
// }


// -----

// function isLandscape(Width, Hieght){
//     // if(Width > Hieght)
//     //     document.write("it is in Landscap mode", "<br>");
//     // else
//     //     document.write("it is in Portrait mode", "<br>");

//     // // or
//     return Width > Hieght ? document.write('Landscape', "<br>") : document.write('Portrait')
//     //or
//     // return (Width>Hieght);
// }

// // isLandscape(10,2);
// document.write(isLandscape(300, 2000)); // Portraitundefind

// //  to represent a var as not a number we use NaN. when we check its value with typeof func it gives "number". thus its type is number 


// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 0) 
//         document.write(i, "Even", "<br>");
//     else
//     document.write(i, "Odd", "<br>");

//     //or

//     const msg = (i % 2 === 0) ? 'Even' : 'Odd';
//     document.write(i, msg, "<br>")
// }

// ----

// if v use var keyword then we can use diff variable with same name (ie we override previous values of variable when we reuse/reassign a var with a value) but if v use let keyword for variables then we cant. it gives us compile time error
// in js v have something called truthy and falsy which r not true or false but similar to that
// var name = "Eeman"; // truthy
// var name = ''; // falsey

// if(name) document.write("Truthy");
// else document.write('falsey')

// falsey values: undefined, null, 0, '', NaN etc
// truthy: 


// ----

// let data = ['eeman', '', 0, 5];
// countTruthy(data);

// function countTruthy(array){
//     let count = 0;
//     // we cant use forin , instead v use forof fot this
//     // for (const key in array) {
//     //     if (key) { // 
//     //         count++;
//     //     }
//     // }
//     for (const iterator of array) {
//         if (iterator) { 
//             count++;
//         }
//     }
//     document.write(count);
// }


// ----

// let object = {
//     name: 'Eeman',
//     age: 5,
//     surname: 'Danish',
//     Height: 6
// }

// // below function will count string type properties in above object
// let count = 0;
// for (const key in object) {   
//     // document.write(typeof(key)); // stringstringstringstring
//     // document.write(object[key]); // Eeman5Danish6
//     if (typeof(object[key]) == "string") {
//         document.write(object[key], "<br>");
//         count++;
//     }
// }
// document.write(count);
// // document.write(typeof(count));


// ----

// showstars(5);

// function showstars(rows){
//     for (let i = 1; i <= rows; i++) {
//         for(let j = 0; j < i; j++){
//             document.write("*")
//         }
//         document.write("<br>")
//     }
// }


// ----

// objects:

// let circle = {
//     isfill: true,
//     radius: 5.5,
//     location: {
//         x: 10,
//         y: 4
//     },
//     draw: function() { // an object holds values in key value pair. it value can be anything eg boolean, number, function or another object etc. function inside object is called method
//         document.write('A function inside object')
//     }
// }

// circle.draw();


// let ob = {
//     'my key': "value", // we can also create keys with space but use qoutes for this. and we cant access this via dot notation, we use bracket notation for this
//     key: 6
// }

// console.log(ob);

// // document.write(ob.'my key');
// document.write(ob['my key']);

// for accessing elements inside onject
// let mobject = {
//     name: "Eeman",
//     arr: [ // it is an array inside object
//         "eyes",
//         1,
//         true
//     ],
//     mobject2: {
//         surname: 'Danish'
//     }

// }
// document.write(mobject.arr[0]); // eyes
// document.write(mobject.mobject2.surname); // Danish

// // document.write(mobject.mobject2[0]); // undefined
// // document.write(mobject.mobject2[0].surname); // giving error. if error is above, above lines then above lines will not execute/work

// console.log(mobject);
// delete mobject['arr']; // it deletes arr key from mobject.
// // document.write(mobject.arr[0]); // gives error
// console.log(mobject);


// --


// var mobject2 = {
//     name: "Eeman",
//     age: 21
// }
// document.write(mobject2)
// console.log(mobject2);

// var mobject3 = function() { // we can write only one line inside it
//     name: "Eeman"
// }
// // or
// var mobject3 = new function1(); // called anonymouse func bec it has no name. we can also pass arguments
// var mobject4 = new function2()


// document.write(mobject3)
// console.log(mobject3);

// --




// check below
// JSON.stringify()

// --

// if we've same funcs in diff objects thus for saving lines of code we use factory functions:

// function createCircle(radius) {
//     return { // instead of creating an object and returning it on end of function we return object directly 
//         // radius: radius,
//         radius, // in modern js if our key and value is same then we can write this. it is smae as radius: radius. for avoiding hard coded values, we use arguments

//         // draw: function() { 
//         //     document.write('drawing circle');
//         // }
//         draw(){ // we can shorten functions in object by not using function keyword
//             document.write('drawing circle');
//         }
//     }
// }

// // now we can pass this func to an object
// // beauty of this factory func is that we can reuse code for object and create other objects too
// let mobject = createCircle(4);
// console.log(mobject);

// mobject.draw(); // we can call methods inside object

// let mobject2 = createCircle(5);
// console.log(mobject2);


// factory fucntion is not only way to create objects we can also use constructor funcs:


// -----

// Queue

// var a = [10,12,14];
// document.write(a);
// let number = a.push();
// document.write(number);
// document.write(a);
// a.pop();
// document.write(a);

// a.shift();


// -----
// function load_method(){
//     document.write("on load is called");   
// }

function hover(){
    h1.value = "hover";
    document.write('Mouse is on h1');
}

</script>
