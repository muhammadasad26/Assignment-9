// ----- Chapter # 21-25 and Exercise # 1 -----
var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");
var fullName = firstName + " " + lastName;
alert("Welcome " + fullName + "!");

// ----- Chapter # 21-25 and Exercise # 2 -----
var phone = prompt("Enter your favorite mobile phone model");
var phoneLength = phone.length;
document.write("My favorite phone is: " + phone + "<br>");
document.write("Length of string: " + phoneLength + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 3 -----
var text1 = "Pakistani";
var indexofN = text1.indexOf("n");
document.write("String: " + text1 + "<br>");
document.write("Index of 'n': " + indexofN + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 4 -----
var text2 = "Hello World";
var indexofL = text2.lastIndexOf("l");
document.write("String: " + text2 + "<br>");
document.write("Last index of 'l': " + indexofL + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 5 -----
var text1 = "Pakistani";
var indexof3 = text1.charAt(3);
document.write("String: " + text1 + "<br>");
document.write("Character at index 3: " + indexof3 + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 6 -----
var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");
var fullName = firstName.concat(" ", lastName);
alert("Welcome " + fullName + "!");

// ----- Chapter # 21-25 and Exercise # 7 -----
var city = "Hyderabad";
var newCity = city.replace("Hyder","Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 8 -----
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message = message.replace(/and/g , "&");
document.write(message + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 9 -----
var valueString = "472";
var valueNumber = Number(valueString);
document.write("Value: " + valueString + "<br>");
document.write("Type: " + typeof(valueString) + "<br>");
document.write("Value: " + valueNumber + "<br>");
document.write("Type: " + typeof(valueNumber) + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 10 -----
var input2 = prompt("Enter a word");
var input2UC = input2.toUpperCase();
document.write("User input: " + input2 + "<br>");
document.write("Upper case: " + input2UC + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 11 -----
var input3 = prompt("Enter a word");
var firstChar = input3.slice(0 , 1);
firstChar = firstChar.toUpperCase();
var otherChar = input3.slice(1);
otherChar = otherChar.toLowerCase();
var titleWord = firstChar + otherChar;
document.write("User input: " + input3 + "<br>");
document.write("Title case: " + titleWord + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 12 -----
var num = 35.36;
var str = num.toString();
str = str.replace(".","");
document.write("Number: " + num + "<br>");
document.write("Result: " + str + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 13 -----
var username = prompt("Enter a username:");
for(var i = 0; i < username.length; i++){
    var charCode = username.charCodeAt(i);
    if(charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64){
        username = prompt("Please enter a valid username");
    }
}

// ----- Chapter # 21-25 and Exercise # 14 -----
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var inputItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
inputItem = inputItem.toLowerCase();
var match = 0;
for (var i = 0; i < A.length; i++){
    if (A[i] == inputItem){
        document.write(inputItem + " is available at index " + i + " in our bakery <br>");
        document.write("<hr>");
        match = 1;
        break;
    }
}
if (match == 0){
    document.write("We are sorry. " + inputItem + " is not available in our bakery <br>");
    document.write("<hr>");
}

// ----- Chapter # 21-25 and Exercise # 15 -----
var password = prompt("Enter your password");
var match1 = 0;
var match2 = 0;
var match3 = 0;
for (var i = 0; i < password.length; i++){
    var check = password.charCodeAt(i);
    if ((check >= 65 && check <= 90) || (check >= 97 && check <= 122) || (check >= 48 && check <= 57)){
        match1 = 0;
    }
    else{
        match1 = 1;
        break;
    }
}
document.write("Entered password: " + password + "<br>");

if (match1 == 1){
    document.write("Password should contain alphabets and numbers<br>");
}

if (password[0] >= 0 && password[0] <= 9){
    match2 = 1;
    document.write("Password can not begin with a number <br>");
}

if (password.length < 6){
    match3 = 1;
    document.write("Password must be at least 6 characters long <br>");
}

if (match1 == 0 && match2 == 0 && match3 == 0){
    document.write("Your password has been saved. <br>");
}
else{
    document.write("Please enter a valid password <br>");
}
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 16 -----
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++){
    document.write(arr[i] + "<br>");
}
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 17 -----
var userInput = prompt("Enter a word or character");
document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + userInput[userInput.length -1] + "<br>");
document.write("<hr>");

// ----- Chapter # 21-25 and Exercise # 18 -----
var text3 = "The quick brown fox jumps over the lazy dog";
var text3LC = text3.toLowerCase();
var b = text3LC.match(/the/g);
document.write("Text: " + text3 + "<br>");
document.write("There are " + b.length + " occurrence(s) of word 'the'<br>");
document.write("<hr>");


// ----- Chapter # 26-30 and Exercise # 1 -----
var num = prompt("Enter a positive floating number");
var numRound = Math.round(num);
var numFloor = Math.floor(num);
var numCeil = Math.ceil(num);
document.write("Number: " + num + "<br>");
document.write("Round off value: " + numRound + "<br>");
document.write("Floor value: " + numFloor + "<br>");
document.write("Ceil value: " + numCeil + "<br>");
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 2 -----
var num = prompt("Enter a negative floating number");
var numRound = Math.round(num);
var numFloor = Math.floor(num);
var numCeil = Math.ceil(num);
document.write("Number: " + num + "<br>");
document.write("Round off value: " + numRound + "<br>");
document.write("Floor value: " + numFloor + "<br>");
document.write("Ceil value: " + numCeil + "<br>");
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 3 -----
var num = -4;
var numAbsolute = Math.abs(num);
document.write("The absolute value of " + num + " is " + numAbsolute + "<br>");
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 4 -----
var num = ((Math.random() * 6) + 1);
 var numFloor = Math.floor(num);
document.write("Random dice value: " + numFloor + "<br>");
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 5 -----
var num = ((Math.random() * 2) + 1);
var numFloor = Math.floor(num);
if(numFloor == 1){
    document.write(numFloor + "<br>");
    document.write("Random coin value: Tails <br>");
}
if(numFloor == 2){
    document.write(numFloor + "<br>");
    document.write("Random coin value: Heads <br>");
}
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 6 -----
var num = ((Math.random() * 100) + 1);
var numFloor = Math.floor(num);
document.write("Random number between 1 to 100: " + numFloor + "<br>");
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 7 -----
var weight = prompt("Enter your weight in kilograms");
weight = parseFloat(weight);
document.write("The weight of user is " + weight + " kilograms<br>");
document.write("<hr>");

// ----- Chapter # 26-30 and Exercise # 8 -----
var secretNum = prompt("Enter the secret number between (1 to 10)");
var num = ((Math.random() * 10) + 1);
var numFloor = Math.floor(num);
if (secretNum == numFloor){
    alert("Congratulation! Correct Answer");
}
else{
    alert("Try Again!");
}


// ----- Chapter # 31-34 and Exercise # 1 -----
var currentDate = new Date();
document.write(currentDate + "<br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 2 -----
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
alert("Current month: " + monthNames[currentMonth]);

// ----- Chapter # 31-34 and Exercise # 3 -----
var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentDate = new Date();
var currentDay = currentDate.getDay();
alert("Today is " + dayNames[currentDay]);

// ----- Chapter # 31-34 and Exercise # 4 -----
var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay == 0 || currentDay == 6){
    alert("It's Fun day");
}

// ----- Chapter # 31-34 and Exercise # 5 -----
var currentDate = new Date();
var date = currentDate.getDate();
if (date < 16){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}

// ----- Chapter # 31-34 and Exercise # 6 -----
var currentDate = new Date();
var mili = currentDate.getTime();
var minutes = mili / (1000 * 60);
document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed miliseconds since January 1, 1970: " + mili + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 7 -----
var currentDate = new Date();
var hour = currentDate.getHours();
if (hour >=0 && hour < 12){
    alert("It's AM")
}
else{
    alert("It's PM")
}

// ----- Chapter # 31-34 and Exercise # 8 -----
var currentDate = new Date("Dec 31, 2020");
document.write("Later Date: " + currentDate + "<br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 9 -----
var r1stDate = new Date("Apr 25, 2020");
var cDate = new Date();
var cMili = cDate.getTime();
var rMili = r1stDate.getTime();
var cDay = cMili / (1000 * 60 * 60 * 24);
var rDay = rMili / (1000 * 60 * 60 * 24);
var diff = cDay - rDay;
var accurate = Math.floor(diff);
alert(accurate + " days have passed since 1st Ramadan, 2020");

// ----- Chapter # 31-34 and Exercise # 10 -----
var startDate = new Date("Jan 1, 2020");
var currentDate = new Date();
var startMili = startDate.getTime();
var currentMili = currentDate.getTime();
var startSeconds = startMili / 1000;
var currentSeconds = currentMili / 1000;
var diff = currentSeconds - startSeconds;
var accurate = Math.floor(diff);
document.write("On reference date: " + currentDate + ",<br>");
document.write(accurate + " seconds had passed since beginning of 2020 <br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 11 -----
var cDate = new Date();
var preHour = new Date();
preHour.setHours(cDate.getHours() - 1);
document.write("Current Date: " + cDate + "<br>");
document.write("1 hour ago, it was: " + preHour + "<br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 12 -----
var cDate = new Date();
var yearBack = new Date();
yearBack.setFullYear(cDate.getFullYear() -100);
document.write("Current Date: " + cDate + "<br>");
document.write("100 years back, it was: " + yearBack + "<br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 13 -----
var age = prompt("Enter your age");
var currentDate = new Date();
var year = currentDate.getFullYear();
var birthYear = year - age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear + "<br>");
document.write("<hr>");

// ----- Chapter # 31-34 and Exercise # 14 -----
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var customerName = "ABC Customer";
var currentDate = new Date();
var month = currentDate.getMonth();
var numOfUnits = 410; 
var chargePerUnit = 16;
var netAmount = (numOfUnits * chargePerUnit);
var lateCharges = 350;
var grossAmount = (netAmount + lateCharges);

document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <b>" + customerName +  "</b><br>");
document.write("Month: <b>" + monthNames[month] + "</b><br>");
document.write("Number of units: <b>" + numOfUnits + "</b><br>");
document.write("Charges per unit: <b>" + chargePerUnit + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
document.write("Late payment surcharge: <b>" + lateCharges + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");
document.write("<hr>");


// ----- Chapter # 35-38 and Exercise # 1 -----
function today(){
    var now = new Date();
    document.write(now + "<br>");
}
today();
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 2 -----
function greeting(firstName , lastName){
    alert("Welcome " + firstName + " " + lastName + "!");
}
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
greeting(fname,lname);

// ----- Chapter # 35-38 and Exercise # 3 -----
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
num1 = Number(num1);
num2 = Number(num2);
function add(n1, n2){
    var result = n1 + n2;
    return result; 
}
var answer = add(num1 ,num2);
alert(num1 + " + " + num2 + " = " + answer);

// ----- Chapter # 35-38 and Exercise # 4 -----
function calculator(n1, n2 , opr){
    var result;
    if (opr == "+"){
        result = n1 + n2;
        return result;
    }
    else if (opr == "-"){
        result = n1 - n2;
        return result;
    }
    else if (opr == "*"){
        result = n1 * n2;
        return result;
    }
    else if (opr == "/"){
        result = n1 / n2;
        return result;
    }
    else if (opr == "%"){
        result = n1 % n2;
        return result;
    }
}
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var operator = prompt("Enter operator");
num1 = Number(num1);
num2 = Number(num2);
var answer = calculator(num1 , num2 , operator);
document.write(num1 + " " + operator + " " + num2 + " = " + answer + "<br>");
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 5 -----
function square(n){
    var k = n * n;
   return k;
}

// ----- Chapter # 35-38 and Exercise # 6 -----
function factorial(n){
    var fact = 1;
    for(var i = n; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}

// ----- Chapter # 35-38 and Exercise # 7 -----
function counting(start,end){
    for(var i = start; i <= end; i++){
        document.write(i + "<br>");
    }
}
var startNum = prompt("Enter a number for start counting");
var endNum = prompt("Enter a number for end counting");
startNum = Number(startNum);
endNum = Number(endNum);
counting(startNum,endNum);
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 8 -----
function calcHypotenuse(base,perp){
    function calcSquare(n){
        var result = n * n;
        return result;
    }
    var hypo = calcSquare(base) + calcSquare(perp);
    var sqrtHypo = Math.sqrt(hypo);
    return sqrtHypo;
}
var baseNum = prompt("Enter the value of base");
var perpNum = prompt("Enter the value of perpendicular");
baseNum = Number(baseNum);
perpNum = Number(perpNum);
var hypoNum = calcHypotenuse(baseNum,perpNum);
document.write("Base = " + baseNum + "<br>");
document.write("Perpendicular = " + perpNum + "<br>");
document.write("Hypotenuse = " + hypoNum + "<br>");
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 9 -----
function areaOfRectangle(w,h){
    var a = w * h;
    return a;
}
var width = 30;
var height = 60;
var area = areaOfRectangle(30,60);
var A = areaOfRectangle(width,height);

// ----- Chapter # 35-38 and Exercise # 10 -----
function palindrome(str){
    var check = "";
    for(var i = str.length-1 ; i >= 0; i--){
            check = check + str[i];
    }
    if (check == str){
        alert(str + " is a palindrome word");
    }
    else{
        alert(str + " is not a palindrome word");
    }
}
var inputStr = prompt("Enter a word");
palindrome(inputStr);

// ----- Chapter # 35-38 and Exercise # 11 -----
function capitalized(str){
    var b = str.split(" ");
    var firstChar = "";
    var otherChar = "";
    for(var i = 0; i < b.length; i++){
        firstChar = b[i].slice(0 ,1);
        firstChar = firstChar.toUpperCase();
        otherChar = b[i].slice(1);
        otherChar = otherChar.toLowerCase();
        b[i] = firstChar + otherChar;
    }
    b = b.join(" ");
    return b;
}
var str1 = "the quick brown fox";
var c = capitalized(str1);
document.write("String Example: '" + str1 + "'<br>");
document.write("Expected Output: '" + c + "'<br>");
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 12 -----
function longestWord(str){
    var wordArray = str.split(" ");
    var longest = wordArray[0].length;
    var word = "";
    for(var i = 0; i < wordArray.length; i++){
        if(wordArray[i].length >= longest){
            longest = wordArray[i].length;
            word = wordArray[i];
        }
    }
    return word;
}
var str = "Web Development Tutorial";
var longWord = longestWord(str);
document.write("String Example: '" + str + "'<br>");
document.write("Expected Output: '" + longWord + "'<br>");
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 13 -----
function countLetter(str,letter){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] == letter){
            count++;
        }
    }
    return count;
}
var a = "JSResourceS.com";
var b = "o";
var c = countLetter(a,b);
document.write("String: " + a + "<br>");
document.write("The number of occurrences of '" + b + "' is: " + c + "<br>");
document.write("<hr>");

// ----- Chapter # 35-38 and Exercise # 14 -----
function calcCircumference(r){
    var pi = 3.142;
    var circum = 2 * pi * r;
    document.write("The circumference is " + circum + "<br>");
}
function calcArea(r){
    var pi = 3.142;
    var area = pi * r * r;
    document.write("The circumference is " + area + "<br>");
}
calcCircumference(3);
calcArea(3);
document.write("<hr>");