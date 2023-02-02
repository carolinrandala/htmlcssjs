/*alert("Hello, SDA!");*/

console.log("I may be a Front-end developer");

var fullName = "Carolin Randala";

console.log(fullName.length);

let locationCity = "Tallinn";

const ZIPCODE = 72837;

let isActive = true;
let age = 34;
let salary = 4500.90;

//Comparison
let a ='5';
let b = 5;

if (a != b) {
        console.log("A is same value as B") // value comparison
} else if (a !== b){
    console.log("A is same value and type as B") // value and type comparison
}

let arrayFruit = ["Apple", "Orange", "Mango", 3]; //can put different types to array
console.log(arrayFruit);
arrayFruit.pop(); // removes last value in array
console.log(arrayFruit);

//add new element to array
arrayFruit.push("Banana");
console.log(arrayFruit);

//JSON - JavaScript Object Notation
let student = {
    "name":"Carolin Randala",
    "age": 20,
    "address": {
        "street": "Ülemiste",
        "city": "Tallinn",
        "Zipcode":"12611"
    },
    "joinDate":"2022-12-8",
    "active": true,
    "grade":4.5
}
console.log(student);
console.log(student.name);
console.log(student.address.city)
console.log(Object.keys(student)); //all the keys of the student

//Array of JSON
let students = [
    {
        "name":"Carolin Randala",
        "age": 20,
        "address": {
            "street": "Ülemiste",
            "city": "Tallinn",
            "Zipcode":"12611"
        },
        "joinDate":"2022-12-8",
        "active": true,
        "grade":4.5
    },
    {
        "name":"Mona Liza",
        "age": 32,
        "address": {
            "street": "Ülemiste",
            "city": "Tallinn",
            "Zipcode":"12611"
        },
        "joinDate":"2022-12-8",
        "active": true,
        "grade":4.5
    }
];
console.log(students);
console.log(students[1]) //  to get second student from array
students.forEach(s => console.log(s.name)); //to find students by name

//Functions
function isStudentPassed (student) {
    return student.grade > 3.5;
}
let studentPassResult = isStudentPassed(student);
console.log(student.name + "'s result " + studentPassResult);

// Accessing HTMLs
let image = document.getElementById("image-block"); //to get one thing
image.innerHTML = "<h2>Hello!</h2>";
console.log(image);
//.getElementByName - you get array (getElementByClassname)

let liTags = document.getElementsByTagName("li");
console.log(liTags);

function showMeAlert() {
    alert("Contact me for emergency!");
}
function showAlert() {
    alert("This is mandatory to be filled");
}

//Arrow functions
const isStudentPassed2 = (student) => {
    return student.grade > 3.5;
};
isStudentPassed2(student);