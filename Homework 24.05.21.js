//Declaring some variables
let numbers = [23, 2, 1, 19, 3, 24, 17];
let countries = ["Greece", "Moldova", "Belgium", "Germany", "France", "Italy"];
let countries1 = ["Greece", "Moldova", "Belgium", "Germany", "France", "Italy"];
let prlanguages = "Java JavaScript Python C++ Go";
let txt = "";

//Declaring 3 arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];


//pop() + shift() methods
let pop = countries.pop();
document.getElementById("pop").innerHTML = pop;

let shift = countries.shift();
document.getElementById("shift").innerHTML = shift;

//push() + unshift() methods
let push = countries1.push("Spain");
document.getElementById("push").innerHTML = "The array's length is " + push + "<br>" + countries1;

let unshift = countries1.unshift("Denmark");
document.getElementById("unshift").innerHTML = "The array's length is " + unshift + "<br>" + countries1;

//split() method
let split = prlanguages.split(" ");
document.getElementById("split").innerHTML = "Here are some programming languages: " + "<br>" +  split;

//splice() + slice() methods
let splice = countries1.splice(1, 2, "Finland", "Albania");
document.getElementById("splice").innerHTML ="<b>Sort alphabeticaly</b><br>" +  countries1;

let slice = countries1.slice(2,5);
document.getElementById("slice").innerHTML = "<b>Sort numericaly</b><br>" + slice;

//sort() method
let sort1 = numbers.sort();
document.getElementById("sort1").innerHTML ="<b>Sort alphabeticaly</b><br>" + sort1;

let sort2 = numbers.sort(function(a, b){return a- b});
document.getElementById("sort2").innerHTML = "<b>Sort numericaly</b><br>" + sort2;

let sort3 = countries.sort();
document.getElementById("sort3").innerHTML = "<b>Sort a string array alphabeticaly + join() method</b><br>" + sort3.join(" & ");


//concat() method (combining 3 arrays)
let arr4 = arr1.concat(arr2);
let arr5 = arr4.concat(arr3);
document.getElementById("array").innerHTML = "The final array is: " + arr5;


//forEach() + filter() methods
numbers.forEach(myforEach);
function myforEach(item){
    txt += item + ",";
}
document.getElementById("forEach").innerHTML ="<b>ForEach method<b><br>" + txt;

function checknumber(numb){
    return numb > 3;
}
document.getElementById("filter").innerHTML ="<b>Filter method<b><br>" +  numbers.filter(checknumber);

//map() method
let txt1 = numbers.map(myMap);
function myMap(item){
    return Math.pow(item,2);
}
document.getElementById("map").innerHTML = txt1;


//reduce() + every()
let sum = numbers.reduce(myReduce);
function myReduce(total, item){
    return total + item;
}
document.getElementById("reduce").innerHTML = "<b>reduce() method<b><br>" + sum;

let numev = numbers.every(myEvery);
function myEvery(item){
    return item > 20;
}
document.getElementById("every").innerHTML ="<b>every() method<b><br>" + "It is " + numev + " that all the numbers are greater than 20";

let numsome = numbers.some(mySome);
function mySome(item){
    return item == 24;
}
document.getElementById("some").innerHTML ="<b>some() method<b><br>" + "It is " + numsome + " that at least one number is equal to 24";

