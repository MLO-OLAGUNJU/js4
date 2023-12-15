// Numbers

//An integar is a whole number.
const myNumber = 42;

// console.log(myNumber);

// A number with a decimal point is a float which
// refernces the "floating point"

const myFloat = 42.01;

const myString = "42";

// console.log(myFloat);
// console.log(myString);
// console.log(myNumber === myString);

// console.log(Number(myString) + 3);
// console.log(Number(myString) === myNumber);

// console.log(Number(true));

//Number Methods
//The Number.isIntegar() method
//determines whether the passed value is an integar.

// console.log(Number.isInteger(myNumber));

//The Number.parseFloat() method parses
// an argument and returns a floating point
//number. If a number cannot be parsed from
// the argument, it returns NaN.

// console.log(Number.parseFloat("23.388nfjfjjd"));

// The toFixed() method formats a
// number according to how many
//decimals points you provide as the parameter.
//toFixed() always return a string data type

// console.log(Number.parseFloat("42.123abc").toFixed(0));

// The Number.parseInt() mehtods
// parses a string argument and returns an integar
// console.log(Number.parseInt("42.123abc"));

//The toString() method returns
//a string represnting the number.
// console.log(myFloat.toString());

//to crosscheck

// console.log(typeof myFloat.toString());
// also
// console.log(typeof Number.parseFloat(myString));

// let's try to chain
//Chaining = Using several methods chained together

// console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//NaN is an acronym for "Not a Number"
//===========================================

// 1. The Number.isNaN() mtehtod determines whether
// the passed value is NaN
// and AND it's data type is Number

Number.isNaN();

console.log(Number.isNaN("Manny"));

// 2. Global isNaN() function determines whether
// a value is NaN or not.

console.log(isNaN("NAME"));
