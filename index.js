//JAVASCRIPT FUNCTION

function greet(name){
   // console.log("Good morning " + name)
}

//greet("Iyke")

//A function that calculates the area of a rectangle

function calculateArea (width, height){
    return width * height
}

// console.log(calculateArea(5, 10))

// function areaTriangle (base, height){
//     return 1/2 * base * height
// }

const areaTriangle = (base, height) => {
    
    return 1/2 * base * height
}

//  console.log(areaTriangle(3, 6))
//  console.log(areaTriangle(7, 10))
//  console.log(areaTriangle(4, 9))

//ARROW FUNCTIONS
const sum = (a, b) => {
    return a + b
}

//console.log(sum(56, 20))

//Function to calculate Simple Interest
const calcSimpleInterest = (principal, rate, time) => {
    return (principal * rate * time)/100
}

//console.log(calcSimpleInterest(1000, 10, 5))


const sumArray = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 10)
}

//console.log(sumArray(1,2,3,4,5))

//JAVASCRIPT VARIABLES

//Global, Local and Blocks

//Global: variables can be accessed throughouth the entire program
  
let age = 34
function declareAge(){
    //console.log(age)
}

declareAge()

function declareName(){
    let name = "Iyke"
    console.log(name)
}

//declareName()

//JAVASCRIPT CLOSURE
//It is a function that remembers its scope even after the outer function has been executed

function newAccess(){
    let sentence = "I am a variable of type string"

    const innerFunc = () => {
        console.log(sentence)
    }

    return innerFunc
}

const inner = newAccess()

//inner()
 
function counter (){
    let count = 0;
    return function increment(){
        count++
        return count
    }
}

const myCounter = counter()
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())

// for (let i = 0; i<=8 ; i++){
//     setTimeout(()=> console.log(i), i * 2000)
// }

//ARRAYS
//An array is a collection of data/items stored in memory locations

let ages = []

const fruits = ["orange", "banana", "cherry", "pineapple" ]

const myInfo = [21, "22,Qwl NY", "MALE", true]

//Every item in an array has a numeric index, and it always starts from zero

fruits[1]= "Berry"

const myName = "Iyke"
const fullStatement = `I am  ${myName}, a ${myInfo[0]} years old ${myInfo[2]}, living at ${myInfo[1]}, I love eating ${fruits[1]}`

fruits.push("Apple", "Mango")


//console.log(fruits.length)
//console.log(fullStatement)

fruits.pop()
fruits.shift()
// console.log(`We have ${fruits.length} numbers of fruits in an array`)
// console.log(fruits)


//OBJECT
//Object is a collection of key-value pairs

const person ={
    name: "Brian",
    age: 30,
    isEmployed: false
}


person.name = "Ada"
delete person.name
function determineStatus (value){
    if(value){
        return "Employed"
    }else{
        return "unemployed"
    }
}

console.log(`His name is ${person.name} and he is ${person.age} years old. Also he is ${determineStatus(person.isEmployed)}` )
