// ----- Chapter # 38-42 and Exercise # 1 -----
function power(a, b) {
    var n = a ** b;
    return n;
}


// ----- Chapter # 38-42 and Exercise # 2 -----
function leapYear(year) {
    var n = year % 4;
    if (n == 0) {
        alert(year + " is leap year");
    }
    else {
        alert(year + " is not leap year");
    }
}
var val = prompt("Enter any year to determine whether the year is a leap year or not");
leapYear(val);


// ----- Chapter # 38-42 and Exercise # 3 -----
function S(a, b, c) {
    var ans = (a + b + c) / 2;
    return ans;
}
function areaOfTriangle(a, b, c) {
    var s = S(a, b, c);
    var area = s * (s - a) * (s - b) * (s - c);
    return area;
}
var a = +prompt("Enter the value of triangle side 'a' ");
var b = +prompt("Enter the value of triangle side 'b' ");
var c = +prompt("Enter the value of triangle side 'c' ");
var triangle = areaOfTriangle(a, b, c);
alert("Area of Triangle is " + triangle);


// ----- Chapter # 38-42 and Exercise # 4 -----
document.write("<h1>Chapter # 38-42 and Exercise # 4</h1>");

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    var obtMarks = m1 + m2 + m3;
    var per = obtMarks * 100 / 300;
    return per;
}

function mainFunction(m1, m2, m3) {
    var avg = average(m1, m2, m3);
    var percent = percentage(m1, m2, m3);
    document.write("Average of three subjects marks is " + avg.toFixed(2) + "<br>");
    document.write("Percentage of three subjects marks is " + percent.toFixed(2) + "%<br>");
}

var subject1 = +prompt("Enter the marks of first subject");
var subject2 = +prompt("Enter the marks of second subject");
var subject3 = +prompt("Enter the marks of third subject");
mainFunction(subject1, subject2, subject3);
document.write("<hr>");


// ----- Chapter # 38-42 and Exercise # 5 -----
document.write("<h1>Chapter # 38-42 and Exercise # 5</h1>");

function index(text, a, b = 0) {
    var position = -1;
    for (var i = b; i < text.length; i++) {
        if (text[i] == a) {
            position = i;
            break;
        }
    }
    return position;
}
var text = "Javascript";
var a = "v";
var position = index(text, a);
document.write(position + "<br>");
document.write("<hr>");


// ----- Chapter # 38-42 and Exercise # 6 -----
document.write("<h1>Chapter # 38-42 and Exercise # 6</h1>");

function deleteVowels(text) {
    var str = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] == 'a' || text[i] == 'A' || text[i] == 'e' || text[i] == 'E' || text[i] == 'i' || text[i] == 'I' || text[i] == 'o' || text[i] == 'O' || text[i] == 'u' || text[i] == 'U') {
            continue;
        }
        else {
            str = str + text[i];
        }
    }
    return str;
}

var text = "This Is A Javascript";
document.write(deleteVowels(text) + "<br>");
document.write("<hr>");


// ----- Chapter # 38-42 and Exercise # 7 -----
document.write("<h1>Chapter # 38-42 and Exercise # 7</h1>");

function vowelSuccession(text) {
    var arr = [];
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'a': case 'A': case 'e': case 'E': case 'i': case 'I': case 'o': case 'O': case 'u': case 'U':
                switch (text[i + 1]) {
                    case 'a': case 'A': case 'e': case 'E': case 'i': case 'I': case 'o': case 'O': case 'u': case 'U':
                        arr[count] = text[i] + text[i + 1];
                        count++;
                        break;
                }
                break;
        }
    }
    return arr = arr.join(" , ");
}

var text = "Pleases read this application and give me gratuity";
document.write(text + "<br>");
document.write("Such occurrence are: " + vowelSuccession(text) + "<br>");
document.write("<hr>");


// ----- Chapter # 38-42 and Exercise # 8 -----
document.write("<h1>Chapter # 38-42 and Exercise # 8</h1>");

function meters(d) {
    return d * 1000;
}
function feet(d) {
    return d * 3281;
}
function inches(d) {
    return d * 39370;
}
function centimeters(d) {
    return d * 100000;
}

var distance = +prompt("Enter the distance between two cities (in km.)");
document.write(distance + " km = " + meters(distance) + " meter<br>");
document.write(distance + " km = " + feet(distance) + " foot<br>");
document.write(distance + " km = " + inches(distance) + " inch<br>");
document.write(distance + " km = " + centimeters(distance) + " cm<br>");
document.write("<hr>");


// ----- Chapter # 38-42 and Exercise # 9 -----
function overtimePay(hour) {
    if (hour > 40) {
        var overtimeHour = hour - 40;
        var pay = overtimeHour * 12;
        alert("Your " + overtimeHour + " hour overtime pay is: " + pay + " Rs.");
    }
    else {
        alert("You have not worked overtime");
    }
}
var workHour = +prompt("Enter your work hours");
overtimePay(workHour);

// ----- Chapter # 38-42 and Exercise # 10 -----
document.write("<h1>Chapter # 38-42 and Exercise # 10</h1>");

function currency(cash) {
    var rupees = cash;
    var hundred = 0;
    var fifty = 0;
    if (rupees >= 100) {
        rupees = rupees % 100;
        hundred = cash / 100;
        hundred = Math.floor(hundred);
    }
    if (rupees >= 50) {
        rupees = rupees - 50;
        fifty = 1;
    }
    if (rupees < 50) {
        rupees = rupees / 10;
        rupees = Math.floor(rupees);
    }
    document.write("You will have <b>" + hundred + "</b> hundred notes <b>" + fifty + "</b> fifty note <b>" + rupees + "</b> ten notes. <br>");
}

var input = +prompt("Enter amount of withdraw!!");
document.write("Amount = <b>" + input + " Rs.</b><br>");
currency(input);
document.write("<hr>");



// ----- Chapter # 43-48 and Exercise # 2 -----
function showMessage() {
    alert("Thanks for purchasing a phone from us");
}


// ----- Chapter # 43-48 and Exercise # 3 -----
function deleteRow(id) {
    var row = document.getElementById(id);
    row.remove();
    var student_table = document.getElementById("student-table");
    var rows = student_table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        var td = rows[i].getElementsByTagName("td")[0];
        td.innerHTML = i - 1;
    }
}


// ----- Chapter # 43-48 and Exercise # 5 -----
function incBtn() {
    var inc = document.getElementById("counter");
    var n = parseInt(inc.innerHTML);
    inc.innerHTML = n + 1;
}
function decBtn() {
    var dec = document.getElementById("counter");
    var n = parseInt(dec.innerHTML);
    dec.innerHTML = n - 1;
}



// ----- Chapter # 49-52 and Exercise # 1 -----
function showForm() {
    var displayForm = document.getElementById("displayForm");
    displayForm.style.display = "inline-block";

    var firstName = document.getElementById("first-Name");
    var lastName = document.getElementById("last-Name");
    var gender = document.getElementsByName('gender');
    var gender_value;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender_value = gender[i].value;
        }
    }
    var dob = document.getElementById("dob");
    var d = dob.value.split("-");
    var a = [];
    for (var i = d.length - 1; i >= 0; i--) {
        a.push(d[i]);
    }
    a = a.join("-");
    var mail = document.getElementById("mail");

    var fNameValue = document.getElementById("fNameValue");
    var genderValue = document.getElementById("genderValue");
    var dobValue = document.getElementById("dobValue");
    var emailValue = document.getElementById("emailValue");

    fNameValue.innerHTML = firstName.value + " " + lastName.value;
    genderValue.innerHTML = gender_value;
    dobValue.innerHTML = a;
    emailValue.innerHTML = mail.value;

    firstName.value = "";
    lastName.value = "";
    mail.value = "";
    dob.value = "";
}


// ----- Chapter # 49-52 and Exercise # 2 -----
function showMore() {
    var see = document.getElementById("itemDetail");
    see.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ut, quasi laborum ex sunt est in provident atque corporis, animi debitis dicta. Quae perferendis delectus eveniet aspernatur pariatur adipisci. <a href='JavaScript:void(0)' id='showless'onclick='showLess()'>show less</a>"
}
function showLess() {
    var less = document.getElementById("itemDetail");
    less.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href='JavaScript:void(0)' id='showmore' onclick='showMore()'>show more </a>"
}


// ----- Chapter # 49-52 and Exercise # 3 -----

function addStudentData() {
    var student_name = document.getElementById("student-name");
    var student_class = document.getElementById("student-class");
    var stdDataTable = document.getElementById("student-data-table");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    var stdDT_len = stdDataTable.childNodes.length - 1;
    var td1TextNode = document.createTextNode(stdDT_len);
    var td2TextNode = document.createTextNode(student_name.value);
    var td3TextNode = document.createTextNode(student_class.value);

    var editButton = document.createElement("button");
    var eBtnTextNode = document.createTextNode("Edit");
    editButton.appendChild(eBtnTextNode);
    editButton.className = "btnEditDelete";
    editButton.setAttribute("onclick", "btnEdit(this)");

    var saveButton = document.createElement("button");
    var sBtnTextNode = document.createTextNode("Save");
    saveButton.appendChild(sBtnTextNode);
    saveButton.className = "btnEditDelete btnHidden";
    saveButton.setAttribute("onclick", "btnSave(this)");

    var deleteButton = document.createElement("button");
    var dBtnTextNode = document.createTextNode("Delete");
    deleteButton.appendChild(dBtnTextNode);
    deleteButton.className = "btnEditDelete";
    deleteButton.setAttribute("onclick", "btnDelete(this)");

    var cancelButton = document.createElement("button");
    var cBtnTextNode = document.createTextNode("Cancel");
    cancelButton.appendChild(cBtnTextNode);
    cancelButton.className = "btnEditDelete btnHidden";
    cancelButton.setAttribute("onclick", "btnCancel(this)");

    td1.appendChild(td1TextNode);
    td2.appendChild(td2TextNode);
    td3.appendChild(td3TextNode);
    td4.appendChild(editButton);
    td4.appendChild(saveButton);
    td5.appendChild(deleteButton);
    td5.appendChild(cancelButton);

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    stdDataTable.appendChild(tr);

    student_name.value = "";
    student_class.value = "";
}

function btnDelete(drow) {
    var dr = drow.parentNode.parentNode;
    dr.remove();

    var stdDataTable = document.getElementById("student-data-table");
    var stdDTCV = stdDataTable.getElementsByTagName("tr");
    for (var i = 1; i < stdDTCV.length; i++) {
        stdDTCV[i].firstChild.innerHTML = i;
    }
}

var editNameValue = "";
var editClassValue = "";

function btnEdit(erow) {
    var erNameValue = erow.parentNode.previousSibling.previousSibling;
    var erClassValue = erow.parentNode.previousSibling;
    editNameValue = erNameValue.innerHTML;
    editClassValue = erClassValue.innerHTML;
    var nameValue = erNameValue.innerHTML;
    var classValue = erClassValue.innerHTML;
    var eNameInput = "<input type=text class=editNameInput>";
    var eClassInput = "<input type=text class=editClassInput>";
    erNameValue.innerHTML = eNameInput;
    erClassValue.innerHTML = eClassInput;
    erNameValue.firstChild.value = nameValue;
    erClassValue.firstChild.value = classValue;

    var btnListES = erow.parentNode.childNodes;
    for (var i = 0; i < btnListES.length; i++) {
        if (btnListES[i].innerHTML == "Edit") {
            btnListES[i].classList.add("btnHidden");
        }
        else if (btnListES[i].innerHTML == "Save") {
            btnListES[i].classList.remove("btnHidden");
        }
    }

    var btnListDC = erow.parentNode.nextSibling.childNodes;
    for (var i = 0; i < btnListDC.length; i++) {
        if (btnListDC[i].innerHTML == "Delete") {
            btnListDC[i].classList.add("btnHidden");
        }
        else if (btnListDC[i].innerHTML == "Cancel") {
            btnListDC[i].classList.remove("btnHidden");
        }
    }
}

function btnSave(srow) {
    var srNameValue = srow.parentNode.previousSibling.previousSibling;
    var srClassValue = srow.parentNode.previousSibling;
    var nameValue = srNameValue.firstChild.value;
    var classValue = srClassValue.firstChild.value;
    srNameValue.innerHTML = nameValue;
    srClassValue.innerHTML = classValue;

    var btnListES = srow.parentNode.childNodes;
    for (var i = 0; i < btnListES.length; i++) {
        if (btnListES[i].innerHTML == "Save") {
            btnListES[i].classList.add("btnHidden");
        }
        else if (btnListES[i].innerHTML == "Edit") {
            btnListES[i].classList.remove("btnHidden");
        }
    }
    var btnListDC = srow.parentNode.nextSibling.childNodes;
    for (var i = 0; i < btnListDC.length; i++) {
        if (btnListDC[i].innerHTML == "Cancel") {
            btnListDC[i].classList.add("btnHidden");
        }
        else if (btnListDC[i].innerHTML == "Delete") {
            btnListDC[i].classList.remove("btnHidden");
        }
    }
}

function btnCancel(crow) {
    var crNameValue = crow.parentNode.previousSibling.previousSibling.previousSibling;
    var crClassValue = crow.parentNode.previousSibling.previousSibling;
    crNameValue.innerHTML = editNameValue;
    crClassValue.innerHTML = editClassValue;

    var btnListDC = crow.parentNode.childNodes;
    for (var i = 0; i < btnListDC.length; i++) {
        if (btnListDC[i].innerHTML == "Cancel") {
            btnListDC[i].classList.add("btnHidden");
        }
        else if (btnListDC[i].innerHTML == "Delete") {
            btnListDC[i].classList.remove("btnHidden");
        }
    }
    var btnListES = crow.parentNode.previousSibling.childNodes;
    for (var i = 0; i < btnListES.length; i++) {
        if (btnListES[i].innerHTML == "Save") {
            btnListES[i].classList.add("btnHidden");
        }
        else if (btnListES[i].innerHTML == "Edit") {
            btnListES[i].classList.remove("btnHidden");
        }
    }
}


// ----- Chapter # 53-57 and Exercise # 2, 3, 4, 5, 6 -----
var pics = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.png", "images/5.jpg"];

var pictures = document.getElementById("pictures");

for (var i = 0; i < pics.length; i++) {
    var picPath = "getImage('" + pics[i] + "')";
    pictures.innerHTML += "<img src=" + pics[i] + ">";
    var b = pictures.getElementsByTagName("img");
    b[i].setAttribute("onclick", picPath);
}

function getImage(p) {
    var modal = document.getElementById("modal");
    modal.classList.add("modal-open");
    modal.classList.remove("modal-close");
    var t = document.getElementById("modal-pic");
    t.src = p;
}

function onClosedImagModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal-close");
    modal.classList.remove("modal-open");
    setTimeout(function () { modal.style.display = "none"; }, 550)
}



// ----- Chapter # 58-67 and Exercise # 1 -----
document.write("<h1>Chapter # 58-67 and Exercise # 1</h1>");

var mc = document.getElementById("main-content");
var mcElement = mc.childNodes;

for (var i = 0; i < mcElement.length; i++) {
    var ele = mcElement[i];
    document.write(ele + "<br>");
}

var mcClass = mc.getElementsByClassName("render");
for (var i = 0; i < mcClass.length; i++) {
    var eleValue = mcClass[i].innerHTML;
    document.write(eleValue + "<br>");
}

var fn = document.getElementById("first-name");
fn.value = "Muhammad";
var ln = document.getElementById("last-name");
ln.value = "Asad";
var email = document.getElementById("email");
email.value = "abc@example.com";


// ----- Chapter # 58-67 and Exercise # 2 -----
document.write("<h1>Chapter # 58-67 and Exercise # 2</h1>");

var fn = document.getElementById("form-content");
var fnType = fn.nodeType;
document.write(fnType + "<br>");

var lastName = document.getElementById("lastName");
var lastNameType = lastName.nodeType;
document.write(lastNameType + "<br>");
var cnValue = lastName.childNodes;
document.write(cnValue[0].nodeValue + "<br>");

cnValue[0].nodeValue = "Last Name: John";

var mcFirst = mc.firstChild;
document.write(mcFirst.innerHTML + "<br>");
var mcLast = mc.lastChild;
document.write(mcLast.innerHTML + "<br>");

var nslastName = lastName.nextSibling;
document.write(nslastName.innerHTML + "<br>");
var pslastName = lastName.previousSibling;
document.write(pslastName.innerHTML + "<br>");

var emailPN = email.parentNode;
document.write(emailPN + "<br>");
var emailNT = email.nodeType;
document.write(emailNT + "<br>");
document.write("<hr>");

