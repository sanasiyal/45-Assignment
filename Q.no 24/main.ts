// // // //Q.no 24.... More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// // // Tests for equality and inequality with strings

let string1: string = "hello";
let string2: string = "world";

console.log(string1 === string2);
console.log(string1 !== string2);

// // Tests using the lower case function

let uppercase:string = "HELLO";
let lowercase:string = "hello";

console.log(uppercase.toLocaleLowerCase() == lowercase );

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1 = 20;
let num2 = 40;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Tests using "and" and "or" operators

let x = 10;
let y = 20;
let z = 30;

console.log(x < y && y < z);
console.log(x > y || y > z);

// Test whether an item is in a array

let array = [1 , 2, 3 , 4 , 5 ,6]
let itemtofind = [4]
console.log(itemtofind);


// Test whether an item is not in a array

console.log(array.indexOf(10));





