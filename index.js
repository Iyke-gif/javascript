//Javascript Variables and Data type

//There are three ways to declare variables: var, let, const

//Data Types

//String: text data, words or sentences
//Number
//Boolean (true or false)
//Null: abscence of any value
//Undefined: a variable without any value
//Symbol: unique identifier
//Json: javascript object notation
//Object:
//Array


let name = "John Doe"
//console.log(typeof name)

let age = 20

// console.log(typeof age)
// console.log(age)

let anotherAge = "20"

// console.log(anotherAge)
// console.log(typeof anotherAge)

//Boolean
let isAvailable = true

let isEaten = false

//console.log(typeof isAvailable)

let car = null

//console.log(typeof car)

//Javascript Operators

// var a = 6;
// var b = 4;
//You can only perform arithemrtic operations on data type which are numbers
// console.log(a + b) //Addition
// console.log(a - b) //Subtraction
// console.log(a * b) //Multiplication
// console.log(a / b) //Division
// console.log(a % b) //Modulus

let ageIyke = 25
let houseNo = "56"

let combine = ageIyke * houseNo

//console.log(typeof combine) //concantenation

let x = 6

x -=5

//console.log(x)

//Comparison Operator always return or output either true or false

let a = 7
let b = 3
let c = "7"
let d = 3

// console.log(a > b)
// console.log(a < b)
// console.log(a == b)
// console.log(a == c) //double equal operators check for only data value
// console.log(a === c) //triple equal operators check for both data value and data type
// console.log(b===d)
// console.log(b !=d) //not equal operator

//LOGICAL OPERATORS

//AND, OR, NOT

let p = true
let q = false
let r = false
let s = true
let t = false

//when using AND operators all conditions must be true to return true
// When using OR operators, only one condition must be true to return true

// console.log(p && q) //false
// console.log(p || q) // true

// console.log(p && q && r && s) //false
// console.log(p || r || t) //true

// console.log(!p) //false is p not true, no (false) because p is true

// console.log(!r) //true is r not true, yes(true) because r is false


//CONDITIONAL STATEMENTS

//IF, ELSE IF, SWITCH

let agex = 12

if(agex > 18) {
//     console.log("You are an adult")
// }else if(agex < 18 && agex >= 13) {
//     console.log("You are a teenager")
// }else{
//     console.log("You are a child")
 }

//SWITCH

let day = 9
let dayname

switch(day){
    case 1:
        dayname = "Monday";
        break;
        case 2:
            dayname = "Tuesday";
            break;
            case 3:
                dayname = "Wednesday";
                break;
            case 4:
                dayname = "Thursday";
                break;
            case 5:
                dayname = "Friday";
                break;
            case 6:
                dayname = "Saturday";
                break;
            case 7:
                dayname = "Sunday";
                break;
                default:
                    dayname = "Invalid day"
}


//console.log(dayname)

//LOOPS
//For Loop
//While Loop
//Do..while Loop


//For Loop has three parts: Initiation, condition, increment/decrement

for(let i =0; i < 2; i++){
    console.log(i)
}

let i = 0
while(i < 2){
    console.log(i)
    i++
}