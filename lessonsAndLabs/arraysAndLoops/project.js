// var a = [1,2,3,5,8,13,21];


// Array.prototype.last = function() {
//     return this[this.length-1];
// };

// // var b = [4,5,7,8,12,34];
// /**
// * Arrays
// * Most of your answers should be stored in variables called q1, q2 etc..
// * and the variables printed to the console.
// *
// * For example:
// * var q0 = "abc"
// * console.log("Question 0" + q0)
// */

// /** Question 1
// * Create an array of image source filenames.
// * Use "image1.png", "image2.png", and "image3.png" as the array values.
// */

// q1 = ["image1.png", "image2.png", "image3.png"];
// console.log("Question 1 " + q1);

// /** Question 2
// * Using the array from Question 1, store the first element of the array
// * in variable q2.
// */

// q2 = q1[0];
// console.log("Question 2 " + q2);

// /** Question 3
// * Get the length of the first array (number of elements in the array)
// * and store it in variable q3
// */
// q3 = q1.length;
// console.log("Question 3 " + q3);

// /** Question 4
// * Using the array from Question 1, store the last element of the array
// * in variable q4. Hint: How can we get the number of elements in the array?
// */
// q4 = q1.last();
// console.log("Question 4 " + q4);


// 1) Loops Technique #1
// var a = [1,2,3,4,6,7,8,9,12,21];
// var total = 0;

// a.forEach(add);

// // 3) "Function"

// function add(number, index) {
//   total += number;
//   console.log(index, number);
// };

// console.log(total);

// // 2) Loops Technique #2
// var days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
// days.forEach(function(item) {
//   console.log(item);
// });

// //3 Loops Technique #3
// var colors = ["red", "orange", "yellow", "blue"];

// for (i = 0; i < colors.length; i++) {
//   console.log(i, colors[i], colors[i]);
//   colors[i];
// };

/**
* Arrays + Iteration
*/

/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/
var numbers = [1,2,3,4];
// var new_array = [];

// for (i=0; i < numbers.length; i++) {
//   new_array.push(numbers[i] + 1)
// }
// console.log(new_array);
/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/

var total = 0;
var q6 = 0;
numbers.forEach(function(number) {
  total += number;
  q6 = total / numbers.length;
});

console.log(q6);







