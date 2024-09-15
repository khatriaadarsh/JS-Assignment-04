//   --------> Chapter 12 and 13 <---------------

// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a character to Uppercase or lowercase");

if (char >= "A" && char <= "Z") {
    alert(`${char} is Uppercase letter.`);
} else if (char >= "a" && char <= "z") {
    alert(`${char} is lowercase letter.`);
} else {
    alert(`${char} is not a valid character.`);
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter number one: "),
    num2 = +prompt("Enter number two: ");

if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`);
} else if (num2 > num1) {
    alert(`${num2} is greater than ${num1}`);
} else {
    alert(`${num1} is Equal to ${num2}`);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num = +prompt("Enter a number to positive or negative");

if (num >= 0) {
    alert(`${num} is positive`);
} else if (num < 0) {
    alert(`${num} is negative`);
} else {
    alert(`${num} is integer`);
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt("Enter character to check vowel or not: ");

if (vowel == 'a' || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    alert(`You entered a vowel: ${vowel}`);
} else {
    alert(`You entered not a vowel: ${vowel}`);
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctPassword = "password123";
var userPassword = prompt("Enter your password");

if (userPassword == "") {
    alert("Please enter a valid password");
} else if (correctPassword == userPassword) {
    alert("Your password is correct");
} else {
    alert("Password not match please enter correct password");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Enter time in seconds like 1900: ");

if (time >= "0000" && time <= 1200) {
    alert("Good Morning!")
} else if (time >= 1200 && time <= 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time <= 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Please enter seccond less than 2400");
}