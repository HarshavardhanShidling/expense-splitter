function calculateSplit(){

let bill = Number(document.getElementById("billAmount").value);
let people = Number(document.getElementById("people").value);
let tip = Number(document.getElementById("tip").value);
let namesInput = document.getElementById("names").value;

if(bill <= 0){
alert("Bill must be greater than 0");
return;
}

if(people <= 0){
alert("Number of friends must be greater than 0");
return;
}

let names = namesInput.split(",");

let tipAmount = (bill * tip) / 100;
let total = bill + tipAmount;

let perPerson = total / people;

document.getElementById("result").innerText = "₹" + perPerson.toFixed(2);

/* Show friend split */

let list = document.getElementById("friendsList");
list.innerHTML = "";

let splitData = [];

names.forEach(name => {

let cleanName = name.trim();

if(cleanName !== ""){

let li = document.createElement("li");
li.innerText = cleanName + " pays ₹" + perPerson.toFixed(2);
list.appendChild(li);

splitData.push({
name: cleanName,
amount: perPerson.toFixed(2)
});

}

});

/* Save to localStorage */

let history = JSON.parse(localStorage.getItem("expenseHistory")) || [];

history.push({
bill: bill,
people: people,
friends: splitData
});

localStorage.setItem("expenseHistory", JSON.stringify(history));

displayHistory();

}


/* Display history */

function displayHistory(){

let historyData = JSON.parse(localStorage.getItem("expenseHistory")) || [];

let historyList = document.getElementById("history");

historyList.innerHTML = "";

historyData.forEach(entry => {

let li = document.createElement("li");

let text = "Bill ₹" + entry.bill + " | ";

entry.friends.forEach(friend => {
text += friend.name + ": ₹" + friend.amount + " ";
});

li.innerText = text;

historyList.appendChild(li);

});

}


/* Reset inputs */

function reset(){

document.getElementById("billAmount").value="";
document.getElementById("people").value="";
document.getElementById("tip").value="";
document.getElementById("names").value="";
document.getElementById("result").innerText="₹0";
document.getElementById("friendsList").innerHTML="";
}


/* Dark / Light Mode */

function toggleTheme(){

document.body.classList.toggle("dark");

let mode = document.body.classList.contains("dark") ? "dark" : "light";

localStorage.setItem("theme", mode);

}


/* Load saved theme */

window.onload = function(){

displayHistory();

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
}

}