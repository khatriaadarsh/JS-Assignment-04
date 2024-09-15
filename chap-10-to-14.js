//  ------------------>Chapter 10 (if statements)
// 1. var city = "Karachi" if (city = "Karachi") { console.log("The City
//     OF Lights&quot") Correct the above statement:
//     Also try this statement by yourself

var city = prompt("Enter your city name: ");

if (city == "Karachi") {
    alert("Welcome to the City of Light!!")
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

var x = +prompt("Enter the value of x: "),
    y = +prompt("Enter the value of y: ");
if (x === y) {
    var z = prompt("Enter value of z:");
    alert(`You entered ${x} and ${y} values from ${ z }`);
}


// 3. Code an if statement that tests if ZipCode is 10010 so, Alert
// that "Karachi";. if not then alert ("Please write correct city");

var zipCode = prompt("Enter zip code");
if (zipCode == 10010) {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

var value = 1;
if (value == 1) {
    value = 5;
    alert("Numerical value: " + value);
}



// -------------------> Chapter 11 (Comparison Operators)


// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

var ageForNot = 14;
if (ageForNot !== 18) {
    alert("You are not eligible for CNIC");
}



// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

var ageForDriving = +prompt("Enter age for driving");

if (ageForDriving >= 18) {
    alert("You are elibible for driving");
} else {
    alert("You are not eligible for driving");
}

// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.

var numberForTest = 1;

if (numberForTest !== 1) {
    numberForTest = 5;
    alert("Number for test is not equal")
} else {
    alert("Number for test is equal");
}


// 4. Code an if statement that tests whether a number is unequal
// to a different number. If the condition is true (it will be),
// display a congratulations alert.

var numNotEqual = 5;
if (numNotEqual !== 7) {
    alert("Congratulations! Your number is not equal to 5.");
}


// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "match"

var firstName = prompt("Enter your firstName: ");
if (firstName !== "Kumar") {
    alert("Not Matched")
}


// -------> Chapter 12 (if else and else if statements)

// 1. Code an if statement that tests whether the value represented by a variable is greater 
// than or equal to the value represented by another variable.If so, display an alert. 
// If not, display a different alert.

var num1 = 20,
    num2 = 15;

if (num1 >= 15) {
    alert(`${num1} is greater than ${num2}`);
} else {
    alert(`${num1} is not greater than ${num2}`);
}



// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)



document.write(`<h1>Marks Sheet</h1>`);

var marks01 = +prompt("Enter Subject 01 Marks: ");
var marks02 = +prompt("Enter Subject 02 Marks: ");
var marks03 = +prompt("Enter Subject 03 Marks: ");

document.write(`Subject 01 Marks: ${marks01} <br>`);
document.write(`Subject 02 Marks: ${marks02} <br>`);
document.write(`Subject 03 Marks: ${marks03} <br>`);

var obtainMarks = marks01 + marks02 + marks03;

document.write(`Obtained Marks: ${obtainMarks} <br>`);

var totalMarks = 300;

document.write(`Total Marks: ${totalMarks} <br>`);

var perncetage = (obtainMarks / totalMarks) * 100;

document.write(`Percentage: ${perncetage.toFixed(2)}% <br>`);

if (perncetage >= 80) {
    document.write("A-One Grade <br> Excellent");
} else if (perncetage >= 70) {
    document.write("A Grade <br> Good");
} else if (perncetage >= 60) {
    document.write("Grade B <br> You Need to Improve");

} else if (perncetage >= 50) {
    document.write("Grade C <br> Your Poor performance");
} else if (perncetage < 50) {
    document.write("Fail <br> Sorry Need to improve this course");
}


// 3. This is the if statement that begins the code.

var number = 10;
if (number === 10) {
    alert(`Number ${number}`);
}

// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var cityForWelome = prompt("Enter a City: ");

if (cityForWelome == "Karachi") {
    alert("Acknowledging it's Karachi");
} else if (cityForWelome == "Lahore") {
    alert("Acknowledging It's Lahore")
} else {
    alert("This city is not recognized");
}



// ---------------->  Chapter 13 (Testing sets of conditions)

// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.

var a = 10,
    b = 10,
    c = 10,
    d = 10;

if (a == b && c == d) {
    alert("All values are equal");
}


// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn&#39;t have the
// same value as d.

var val1 = 10,
    val2 = 10,
    val3 = 20,
    val4 = 30;

if (val1 == val2 && val3 == val4) {
    alert("All values are equal");
} else {
    alert("All values are not equal");
}


// 3. Code the first line of an if statement that tests whether I.
// name is either Hamza or Arsalan. II. age is Less than 60.

var name = prompt("Are you Hamza or Arsalan?");

var age = +prompt("Enter age: ");

if (name === "Hamza" || name === "Arsalan" && age < 60) {
    alert("Welcome to our website!");
} else {
    alert("Sorry, you are not allowed to visit our website.");
}

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.

var num1 = 40;
var num2 = 30;
if (num1 < num2 || num1 > num2) {
    alert("Condition is true");
} else {
    alert("Condition is False");
}


// Chapter 14 (If statements nested)

var firstName = "Aadarsh",
    lastName = "Kumar";

var userFirstName = prompt("Enter your first name: ");
var userLastName = prompt("Enter Your last name: ");

if (userFirstName === firstName && userLastName === lastName) {
    alert(`Welcome ${firstName} ${lastName}`);
} else {
    alert("Invalid username");
}




//  -----------> Chapter 14 (If statements nested) 

// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5, then display
// an alert that says & Password must be greater than 5; if greater
// than 5 then Alert OK.

var password = prompt("Enter Password: ");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK!")
    }
}

//      2. Try this statement by yourself if (a === 1) { if (c === Max) {
//       alert(OK);
//       }
//     }

var a = +prompt("Enter a number: "),
    c = +prompt("Enter max number: ");

if (a === 1) {
    if (c >= a) {
        alert("OK!");
    }
} else {
    alert("Please enter 1");
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) { if (c
// === &quot;Max&quot;) {
// alert(&quot;OK&quot;);
// }
// }

var a = 1;
var c = "Max";
if (a === 1 && c === "Max") {
    alert("OK!");
}


// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.


var number01 = prompt("Enter number 01: ");
var number02 = prompt("Enter number 02: ");

if (number01 === number02) {
    if (number01 <= number02) {
        alert("Finally entered");
    }
}