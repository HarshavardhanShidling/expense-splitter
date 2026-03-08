function calculateSplit(){

let bill = document.getElementById("billAmount").value;
let people = document.getElementById("people").value;
let tip = document.getElementById("tip").value;

/* Convert to numbers */
bill = Number(bill);
people = Number(people);
tip = Number(tip);

/* Validation */

if(bill <= 0){
alert("Bill amount must be greater than 0");
return;
}

if(people <= 0){
alert("Number of friends must be greater than 0");
return;
}

if(tip < 0){
alert("Tip cannot be negative");
return;
}

/* Calculation */

let tipAmount = (bill * tip) / 100;

let total = bill + tipAmount;

let perPerson = total / people;

document.getElementById("result").innerText = "₹" + perPerson.toFixed(2);

}

/* Reset button */

function reset(){
document.getElementById("billAmount").value = "";
document.getElementById("people").value = "";
document.getElementById("tip").value = "";
document.getElementById("result").innerText = "₹0";
}