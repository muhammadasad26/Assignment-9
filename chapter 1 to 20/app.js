// ----- Chapter # 1 and Exercise # 1 -----
alert("Welcome to my website");

// ----- Chapter # 1 and Exercise # 2 -----
alert("Error! Please enter a valid password.");

// ----- Chapter # 1 and Exercise # 3 -----
alert("Welcome to JS land...\nHappy Coding!");

// ----- Chapter # 1 and Exercise # 4 -----
alert("Welcome to JS land...");

// ----- Chapter # 1 and Exercise # 5 -----
console.log(alert("Hello... I can run JS through my web browser's console"));


// ----- Chapter # 2 and Exercise # 1 -----
var username;

// ----- Chapter # 2 and Exercise # 2 -----
var myName = "Muhammad Asad";

// ----- Chapter # 2 and Exercise # 3 -----
var message;
message = "Hello World";
alert(message);

// ----- Chapter # 2 and Exercise # 4 -----
var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

// ----- Chapter # 2 and Exercise # 5 -----
var a = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(a);

// ----- Chapter # 2 and Exercise # 6 -----
var email = "xyz@gmail.com";
alert("My email address is " + email);

// ----- Chapter # 2 and Exercise # 7 -----
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// ----- Chapter # 2 and Exercise # 8 -----
document.write("Yah! I can writer HTML content through JavaScript");
document.write("<hr>");

// ----- Chapter # 2 and Exercise # 9 -----
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


// ----- Chapter # 3 and Exercise # 1 -----
var age = 15;
alert("I am " + age + " years old");

// ----- Chapter # 3 and Exercise # 2 -----
var n = 14;
alert("You have visited this site " + n + " times");

// ----- Chapter # 3 and Exercise # 3 -----
var birthYear = 1998;
document.write("<br>My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is " + typeof (birthYear));
document.write("<hr>");

// ----- Chapter # 3 and Exercise # 4 -----
var v_name = "Jhone Doe";
var p_title = "T-shirt";
var quantity = "5";
document.write("<br> " + v_name + " odered " + quantity + " " + p_title + "(s) on XYZ Clothing Store");
document.write("<hr>");


// ----- Chapter # 4 and Exercise # 1 -----
var a, b, c;

// ----- Chapter # 4 and Exercise # 2 -----

// Legal Variable
var address, user_name, _Student, name2, $password;

// Illegal Variable
// var 21name , @pasword , phone number , alert , city!;

// ----- Chapter # 4 and Exercise # 3 -----
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letter , numbers , $ and _. For example : $my_1stVariable");
document.write("<br>Variable must begin with a letter , $ or _. For example : $name , _name or name");
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable name should not be JS keywords");


// ----- Chapter # 5 and Exercise # 1 -----
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 2 -----
c = a - b;
document.write("<br>Subtraction of " + a + " and " + b + " is " + c);
c = a * b;
document.write("<br>Multiplication of " + a + " and " + b + " is " + c);
c = a / b;
document.write("<br>Division of " + a + " and " + b + " is " + c);
c = a % b;
document.write("<br>Modulus of " + a + " and " + b + " is " + c);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 3 -----
var n;
document.write("<br>Value after declaration of variable is " + n);
n = 5;
document.write("<br>Initial value : " + n);
n++;
document.write("<br>Value after increment is : " + n);
n = n + 7;
document.write("<br>Value after addition is : " + n);
n--;
document.write("<br>Value after decrement is : " + n);
n = n % 3;
document.write("<br>The remainder is : " + n);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 4 -----
var ticketPrice = 600;
var tickets = 5;
var cost = ticketPrice * tickets;
document.write("<br>Total cost to buy " + tickets + " tickets to a movie is " + cost + " PKR");
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 5 -----
var tableno = 4;
document.write("<br>Table of " + tableno);
document.write("<br>" + tableno + " x 1 = " + tableno * 1);
document.write("<br>" + tableno + " x 2 = " + tableno * 2);
document.write("<br>" + tableno + " x 3 = " + tableno * 3);
document.write("<br>" + tableno + " x 4 = " + tableno * 4);
document.write("<br>" + tableno + " x 5 = " + tableno * 5);
document.write("<br>" + tableno + " x 6 = " + tableno * 6);
document.write("<br>" + tableno + " x 7 = " + tableno * 7);
document.write("<br>" + tableno + " x 8 = " + tableno * 8);
document.write("<br>" + tableno + " x 9 = " + tableno * 9);
document.write("<br>" + tableno + " x 10 = " + tableno * 10);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 6 -----
var C = 25;
var F = 70;
var celcius = (F - 32) * 5 / 9;
var fahrenheit = (C * 9 / 5) + 32;
document.write("<br>" + C + "<sup>o</sup>C is " + fahrenheit + "<sup>o</sup>F");
document.write("<br>" + F + "<sup>o</sup>F is " + celcius + "<sup>o</sup>C");
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 7 -----
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<h1>Shopping Cart</h1>")
document.write("Price of Item 1 is " + priceItem1);
document.write("<br>Quantity of Item 1 is " + quantityItem1);
document.write("<br>Price of Item 2 is " + priceItem2);
document.write("<br>Quantity of Item 2 is " + quantityItem2);
document.write("<br>Shipping Charges " + shippingCharges);
document.write("<br>Total cost of your order is " + total);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 8 -----
var obtainedMarks = 804;
var totalMarks = 980;
var percentage = obtainedMarks * 100 / totalMarks;
document.write("<h1>Marks Sheet</h1>")
document.write("Total Marks : " + totalMarks);
document.write("<br>Marks Obtained : " + obtainedMarks);
document.write("<br>Percentage : " + percentage + "%");
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 9 -----
var dollarinPKR = 104.80;
var riyalinPKR = 28;
var USdollar = 10;
var Saudiriyal = 25;
var currency = (USdollar * dollarinPKR) + (Saudiriyal * riyalinPKR);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR : " + currency);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 10 -----
var num = 10;
num = ((num + 5) * 10) / 2;
document.write("<br>Result is : " + num);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 11 -----
var currentYear = 2020;
var birthYear = 1998;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year : " + currentYear);
document.write("<br>Birth Year : " + birthYear);
document.write("<br>Your age is : " + age);
document.write("<hr>");

// ----- Chapter # 5 and Exercise # 12 -----
var snack = "Chocolate chip";
var currentAge = 15;
var estimatedMaxage = 65;
var snackPerday = 3;
var totalSnack = (snackPerday * 365) * (estimatedMaxage - currentAge);
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite snack : " + snack);
document.write("<br>Current age : " + currentAge);
document.write("<br>Estimated maximum age : " + estimatedMaxage);
document.write("<br>Amount of snack per day : " + snackPerday);
document.write("<br>You will need : " + totalSnack + " " + snack + " to last you until the ripe old age of " + estimatedMaxage);
document.write("<hr>");


// ----- Chapter # 6-9 and Exercise # 1 -----
var a = 10;
document.write("Result:");
document.write("<br>The value of a is : " + a);
document.write("<br>........................................");

document.write("<br><br>The value of ++a is : " + ++a);
document.write("<br>Now the value of a is : " + a);

document.write("<br><br>The value of a++ is : " + a++);
document.write("<br>Now the value of a is : " + a);

document.write("<br><br>The value of --a is : " + --a);
document.write("<br>Now the value of a is : " + a);

document.write("<br><br>The value of a-- is : " + a--);
document.write("<br>Now the value of a is : " + a);
document.write("<hr>");

// ----- Chapter # 6-9 and Exercise # 2 -----
var a = 2, b = 1;
document.write("<br>" + --a);
a = 2, b = 1;
document.write("<br>" + --a + " - " + --b);
a = 2, b = 1;
document.write("<br>" + --a + " - " + --b + " + " + ++b);
a = 2, b = 1;
document.write("<br>" + --a + " - " + --b + " + " + ++b + " + " + b--);
a = 2, b = 1;
result = --a - --b + ++b + b--;
document.write("<br><br> a is : " + a);
document.write("<br> b is : " + b);
document.write("<br> result is : " + result);
document.write("<hr>");

// ----- Chapter # 6-9 and Exercise # 3 -----
var username = prompt("Enter your name :");
alert("Welcome " + username + "!");

// ----- Chapter # 6-9 and Exercise # 4 -----
var num = prompt("Enter a number : ", 5);
document.write("<h2>Table of " + num + "</h2>")
document.write(num + " x 1 = " + num * 1);
document.write("<br>" + num + " x 2 = " + num * 2);
document.write("<br>" + num + " x 3 = " + num * 3);
document.write("<br>" + num + " x 4 = " + num * 4);
document.write("<br>" + num + " x 5 = " + num * 5);
document.write("<br>" + num + " x 6 = " + num * 6);
document.write("<br>" + num + " x 7 = " + num * 7);
document.write("<br>" + num + " x 8 = " + num * 8);
document.write("<br>" + num + " x 9 = " + num * 9);
document.write("<br>" + num + " x 10 = " + num * 10);
document.write("<hr>");

// ----- Chapter # 6-9 and Exercise # 5 -----
var subject1 = prompt("Enter first subject name : ");
var subject2 = prompt("Enter second subject name : ");
var subject3 = prompt("Enter third subject name : ");
var obtMark1 = prompt("Enter obtained marks of " + subject1);
var obtMark2 = prompt("Enter obtained marks of " + subject2);
var obtMark3 = prompt("Enter obtained marks of " + subject3);
var totalMark = 100;
var perSub1 = obtMark1 * 100 / totalMark;
var perSub2 = obtMark2 * 100 / totalMark;
var perSub3 = obtMark3 * 100 / totalMark;
var totalObtMark = parseInt(obtMark1) + parseInt(obtMark2) + parseInt(obtMark3);
var percentage = (totalObtMark * 100) / (totalMark * 3);
document.write("<table>");
document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalMark + "</td>");
document.write("<td>" + obtMark1 + "</td>");
document.write("<td>" + perSub1 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalMark + "</td>");
document.write("<td>" + obtMark2 + "</td>");
document.write("<td>" + perSub2 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalMark + "</td>");
document.write("<td>" + obtMark3 + "</td>");
document.write("<td>" + perSub3 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + totalMark * 3 + "</th>");
document.write("<th>" + totalObtMark + "</th>");
document.write("<th>" + percentage.toFixed(2) + "%" + "</th>");
document.write("</tr>");
document.write("</table>");
document.write("<hr>");


// ----- Chapter # 9-11 and Exercise # 1 -----
var city = prompt("Enter a city name :");
if (city === "karachi") {
        alert("Welcome to city of lights");
}

// ----- Chapter # 9-11 and Exercise # 2 -----
var gender = prompt("Enter your gender :");
if (gender === "male") {
        alert("Good Morning Sir.");
}
if (gender === "female") {
        alert("Good Morning Ma'am.");
}

// ----- Chapter # 9-11 and Exercise # 3 -----
var color = prompt("Enter a color of road traffic signal :");
if (color === "red") {
        alert("Must stop");
}
if (color === "yellow") {
        alert("Ready to move");
}
if (color === "green") {
        alert("Move now");
}

// ----- Chapter # 9-11 and Exercise # 4 -----
var fuel = prompt("Enter the remaining fuel in car(in litres) :");
fuel = parseInt(fuel);
if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
}

// ----- Chapter # 9-11 and Exercise # 5 -----
var a = 4;
if (++a === 5) {
        alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
        alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
        alert("condition 1 is true");
}
if (c === 13) {
        alert("condition 2 is true");
}
if (++c < 14) {
        alert("condition 3 is true");
}
if (c === 14) {
        alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
}
if (true) {
        alert("True");
}
if (false) {
        alert("False");
}
if ("car" < "cat") {
        alert("car is smaller than cat");
}
document.write("<br>given condition for variable a is true");
document.write("<br>condition 2 is true");
document.write("<br>condition 4 is true");
document.write("<br>The cost equals");
document.write("<br>True");
document.write("<br>car is smaller than cat");
document.write("<hr>");

// ----- Chapter # 9-11 and Exercise # 6 -----
var totalMarks = prompt("Enter the total marks of three subjects : ");
var obtainedMarks = prompt("Enter the obtained marks of three subjects : ");
totalMarks = parseInt(totalMarks);
obtainedMarks = parseInt(obtainedMarks);
var grade = "";
var remarks = "";
var percentage = obtainedMarks * 100 / totalMarks;
if (obtainedMarks <= totalMarks) {
        if (percentage >= 80) {
                grade = "A-one";
                remarks = "Excellent"
        }
        else if (percentage >= 70) {
                grade = "A";
                remarks = "Good"
        }
        else if (percentage >= 60) {
                grade = "B";
                remarks = "You need to improve"
        }
        if (percentage < 60) {
                grade = "Fail";
                remarks = "Sorry"
        }
        document.write("<h1>Marks Sheet</h1>");
        document.write("Total Marks : " + totalMarks);
        document.write("<br>Obtained Marks : " + obtainedMarks);
        document.write("<br>Percentage : " + percentage.toFixed(2) + "%");
        document.write("<br>Grade : " + grade);
        document.write("<br>Remarks : " + remarks);
        document.write("<hr>");
}

// ----- Chapter # 9-11 and Exercise # 7 -----
var secretNum = 4;
var userNum = prompt("Guess the secret number (range from 1 to 10)")
userNum = parseInt(userNum);
if (userNum == secretNum) {
        alert("Bingo! Correct answer");
}
if (userNum == secretNum + 1) {
        alert("Close enough to the correct answer");
}
// ----- Chapter # 9-11 and Exercise # 8 -----
var n = prompt("Enter a number : ");
n = parseInt(n);
var test = n % 3;
if (test == 0) {
        alert(n + " is divisible by 3");
}

// ----- Chapter # 9-11 and Exercise # 9 -----
var num = prompt("Enter a number : ");
num = parseInt(num);
var k = num % 2;
if (k == 0) {
        alert(num + " is even number");
}
if (k == 1) {
        alert(num + " is odd number");
}

// ----- Chapter # 9-11 and Exercise # 10 -----
var T = prompt("Enter the temperature :");
T = parseInt(T);
if (T >= 40) {
        alert("It is too hot outside.");
}
else if (T >= 30) {
        alert("The Weather today is Normal.");
}
else if (T >= 20) {
        alert("Today’s Weather is cool.");
}
else if (T >= 10) {
        alert("“OMG! Today’s weather is so Cool.");
}

// ----- Chapter # 9-11 and Exercise # 11 -----
var FirstNumber = prompt("Enter First Number :");
var SecondNumber = prompt("Enter Second Number :");
var Result = 0;
var Operation = prompt("Enter Operation (+ , - , * , / , %) :");
FirstNumber = parseInt(FirstNumber);
SecondNumber = parseInt(SecondNumber);
if (Operation == "+") {
        Result = FirstNumber + SecondNumber;
        alert(FirstNumber + " + " + SecondNumber + " = " + Result);
}
if (Operation == "-") {
        Result = FirstNumber - SecondNumber;
        alert(FirstNumber + " - " + SecondNumber + " = " + Result);
}
if (Operation == "*") {
        Result = FirstNumber * SecondNumber;
        alert(FirstNumber + " * " + SecondNumber + " = " + Result);
}
if (Operation == "/") {
        Result = FirstNumber / SecondNumber;
        alert(FirstNumber + " / " + SecondNumber + " = " + Result);
}
if (Operation == "%") {
        Result = FirstNumber % SecondNumber;
        alert(FirstNumber + " % " + SecondNumber + " = " + Result);
}


// ----- Chapter # 12-13 and Exercise # 1 -----
var ch = prompt("Enter a number or character");
var n = ch.charCodeAt(0);
if (n >= 48 && n <= 57) {
        alert(ch + " is number");
}
else if (n >= 65 && n <= 90) {
        alert(ch + " is Uppercase");
}
else if (n >= 97 && n <= 122) {
        alert(ch + " is Lowercase");
}

// ----- Chapter # 12-13 and Exercise # 2 -----
var num1 = prompt("Enter the first integer :");
var num2 = prompt("Enter the second integer :");
num1 = parseInt(num1);
num2 = parseInt(num2);
if (num1 > num2) {
        alert(num1 + " is larger than " + num2);
}
else if (num2 > num1) {
        alert(num2 + " is larger than " + num1);
}
else if (num1 == num2) {
        alert(num1 + " and " + num2 + " are equal.");
}

// ----- Chapter # 12-13 and Exercise # 3 -----
var a = prompt("Enter a number :");
a = parseInt(a);
if (a > 0) {
        alert(a + " is positive.");
}
else if (a < 0) {
        alert(a + " is negative.");
}
else if (a == 0) {
        alert(a + " is zero.");
}

// ----- Chapter # 12-13 and Exercise # 4 -----
var ch = prompt("Enter a character :");
if (ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U') {
        alert("True! '" + ch + "' is vowel.");
}
else {
        alert("False! '" + ch + "' is not vowel.");
}

// ----- Chapter # 12-13 and Exercise # 5 -----
var p = "admin";
var password = prompt("Enter your password");
if (password == "") {
        alert("Please enter your password");
        password = prompt("Enter your password");
}
if (password === p) {
        alert("Correct! The password you entered matches the original password");
}
else {
        alert("Incorrect password");
}

// ----- Chapter # 12-13 and Exercise # 6 -----
var greeting = "";
var hour = 13;
if (hour < 18) {
        greeting = "Good day";
}
else {
        greeting = "Good evening";
}

// ----- Chapter # 12-13 and Exercise # 7 -----
var time = prompt("Enter the time in 24 hours clock format like: 1900 =7pm");
if (time >= 0000 && time < 1200) {
        alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
        alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
        alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
        alert("Good Night");
}


// ----- Chapter # 14-16 and Exercise # 1 -----
var arr1 = [];

// ----- Chapter # 14-16 and Exercise # 2 -----
var arr2 = {};

// ----- Chapter # 14-16 and Exercise # 3 -----
var arrString = ["Asad", "Ali", "Ahmed", "Hassan"];

// ----- Chapter # 14-16 and Exercise # 4 -----
var arrNumber = [23, 34, 45, 56, 67];

// ----- Chapter # 14-16 and Exercise # 5 -----
var arrBoolean = [true, false, false, true];

// ----- Chapter # 14-16 and Exercise # 6 -----
var arrMixed = [23, "Hassan", "Ali", true, 90];

// ----- Chapter # 14-16 and Exercise # 7 -----
var arrQ = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications:</h2>");
document.write("1) " + arrQ[0]);
document.write("<br>2) " + arrQ[1]);
document.write("<br>3) " + arrQ[2]);
document.write("<br>4) " + arrQ[3]);
document.write("<br>5) " + arrQ[4]);
document.write("<br>6) " + arrQ[5]);
document.write("<br>7) " + arrQ[6]);
document.write("<br>8) " + arrQ[7]);
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 8 -----
var students = ["Michael", "John", "Tony"];
var score = [320, 230, 480];
var totalMarks = 500;
var perS1 = score[0] * 100 / totalMarks;
var perS2 = score[1] * 100 / totalMarks;
var perS3 = score[2] * 100 / totalMarks;
document.write("Score of " + students[0] + " is " + score[0] + ". Percentage: " + perS1 + "%");
document.write("<br>Score of " + students[1] + " is " + score[1] + ". Percentage: " + perS2 + "%");
document.write("<br>Score of " + students[2] + " is " + score[2] + ". Percentage: " + perS3 + "%");
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 9 -----
var arrColors = ["red", "green", "blue", "yellow", "black"];
document.write("<br>" + arrColors);
var color1 = prompt("Which color do you want to add to the beginning of the array");
arrColors.unshift(color1);
document.write("<br>" + arrColors);
var color2 = prompt("Which color do you want to add to the end of the array");
arrColors.push(color2);
document.write("<br>" + arrColors);
arrColors.unshift("white", "orange");
document.write("<br>" + arrColors);
arrColors.shift();
document.write("<br>" + arrColors);
arrColors.pop();
document.write("<br>" + arrColors);
var color3Index = prompt("On which position do you want to add a color");
var color3Name = prompt("Enter the color name ");
arrColors.splice(color3Index, 0, color3Name);
document.write("<br>" + arrColors);
var color4Index = prompt("On which position do you want to delete color(s)");
var color4Length = prompt("How many colors do you want to delete");
arrColors.splice(color4Index, color4Length);
document.write("<br>" + arrColors);
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 10 -----
var stdScore = [320, 230, 480, 120];
document.write("Scores of Students : " + stdScore);
document.write("<br>Ordered Scores of Students : " + stdScore.sort());
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 11 -----
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 5);
document.write("Cities list:");
document.write("<br>" + cities);
document.write("<br><br>Selected cities list:");
document.write("<br>" + selectedCities);
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 12 -----
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
document.write("Array:");
document.write("<br>" + arr);
document.write("<br><br>String:");
document.write("<br>" + str);
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 13 -----
var arr3 = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:");
document.write("<br>" + arr3);
document.write("<br><br>out:");
document.write("<br>" + arr3.shift());
document.write("<br>out:");
document.write("<br>" + arr3.shift());
document.write("<br>out:");
document.write("<br>" + arr3.shift());
document.write("<br>out:");
document.write("<br>" + arr3.shift());
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 14 -----
var arr3 = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:");
document.write("<br>" + arr3);
document.write("<br><br>out:");
document.write("<br>" + arr3.pop());
document.write("<br>out:");
document.write("<br>" + arr3.pop());
document.write("<br>out:");
document.write("<br>" + arr3.pop());
document.write("<br>out:");
document.write("<br>" + arr3.pop());
document.write("<hr>");

// ----- Chapter # 14-16 and Exercise # 15 -----
var arrPhone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Dropdown</h2>");
document.write("<select>");
document.write("<option>" + arrPhone[0] + "</option>");
document.write("<option>" + arrPhone[1] + "</option>");
document.write("<option>" + arrPhone[2] + "</option>");
document.write("<option>" + arrPhone[3] + "</option>");
document.write("<option>" + arrPhone[4] + "</option>");
document.write("<option>" + arrPhone[5] + "</option>");
document.write("</select>");
document.write("<hr>");


// ----- Chapter # 17-20 and Exercise # 1 -----
var arr = [[], [], []];

// ----- Chapter # 17-20 and Exercise # 2 -----
var aar = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
document.write("<br>" + aar[0][0] + " ");
document.write(aar[0][1] + " ");
document.write(aar[0][2] + " ");
document.write(aar[0][3] + "<br>");
document.write(aar[1][0] + " ");
document.write(aar[1][1] + " ");
document.write(aar[1][2] + " ");
document.write(aar[1][3] + "<br>");
document.write(aar[2][0] + " ");
document.write(aar[2][1] + " ");
document.write(aar[2][2] + " ");
document.write(aar[2][3] + "<br>");
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 3 -----
for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>");
}
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 4 -----
var tNo = prompt("Enter a number to show its multiplication table");
var tLength = prompt("Enter length of multiplication table");
document.write("Multiplication table of " + tNo + "<br>");
document.write("Length : " + tLength + "<br><br>");
for (var i = 1; i <= tLength; i++) {
        document.write(tNo + " x " + i + " = " + tNo * i + "<br>");
}
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 5 -----
var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (var i = 0; i < fruits.length; i++) {
        document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (var i = 0; i < fruits.length; i++) {
        document.write("Elements at index " + i + " is " + fruits[i] + "<br>");
}
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 6 -----
document.write("<h3>Counting:</h3>")
for (var i = 1; i <= 15; i++) {
        document.write(i + ", ");
}

document.write("<h3>Reverse Counting:</h3>")
for (var i = 10; i >= 1; i--) {
        document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i = i + 2) {
        document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (var i = 1; i < 20; i = i + 2) {
        document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i = i + 2) {
        document.write(i + "k, ");
}
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 7 -----
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to our ABC Bakery. What do you want to order sir/ma'am?");
var flag = 0;
for (var i = 0; i < A.length; i++) {
        if (search == A[i]) {
                flag = 1;
                break;
        }
}
if (flag == 1) {
        alert(search + " is available at index " + i + " in our bakery");
}
else {
        alert("We are sorry. " + search + " is not available in our bakery");
}

// ----- Chapter # 17-20 and Exercise # 8 -----
var A = [24, 53, 78, 91, 12];
var max = A[0];
for (var i = 0; i < A.length; i++) {
        if (A[i] >= max) {
                max = A[i];
        }
}
document.write("Array items: " + A + "<br>");
document.write("The largest number is: " + max + "<br>");
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 9 -----
var A = [24, 53, 78, 91, 12];
var min = A[0];
for (var i = 0; i < A.length; i++) {
        if (A[i] <= min) {
                min = A[i];
        }
}
document.write("Array items: " + A + "<br>");
document.write("The smallest number is: " + min + "<br>");
document.write("<hr>");

// ----- Chapter # 17-20 and Exercise # 10 -----
document.write("<h3>Multiplies of 5 ranging (5 to 100):</h3>");
for (var i = 1; i <= 20; i++) {
        document.write((i * 5) + ", ");
}
document.write("<hr>");


