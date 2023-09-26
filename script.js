let months = [
	"Styczeń", "Luty", "Marzec", "Kwiecień",
	"Maj", "Czerwiec", "Lipiec", "Sierpień",
	"Wrzesień", "Październik", "Listopad", "Grudzień" 
]
let date = new Date();
let configuredMonth = date.getMonth()
function getLastDayOfMonth(year, month) {
	let nextMonth = new Date(year, month, 0);
	let lastDay = nextMonth.getDate();
	return lastDay;
}


configuredMonth -= 1;
if (configuredMonth == -1) {
	configuredMonth = 11
}
document.getElementById("pMonthLabel").innerHTML = months[configuredMonth];
configuredMonth += 1;
if (configuredMonth == 12) {
	configuredMonth = 1
}
document.getElementById("cMonthLabel").innerHTML = months[configuredMonth];
configuredMonth += 1;
if (configuredMonth == 12) {
	configuredMonth = 1
}
document.getElementById("nMonthLabel").innerHTML = months[configuredMonth];

let collection = document.getElementsByClassName("p");
let previousMonth = date.getMonth() - 1;
let isBack = 0
if (previousMonth == -1) {
	previousMonth = 11;
	isBack = 1
}
let pDate = new Date(date.getYear() - isBack, previousMonth + 1, 0);
for (let i = 0; i < pDate.getDate(); i++) {
	collection[i].innerHTML = i + 1;
}

let collection2 = document.getElementsByClassName("c");
let cDate = new Date(date.getYear(), date.getMonth() + 1, 0);
for (let i = 0; i < cDate.getDate(); i++) {
	collection2[i].innerHTML = i + 1;
	if (i + 1 == date.getDate()) {
		collection2[i].style.color = "rgb(255, 0, 0)";
		collection2[i].style.border = "2px solid red";
	}
}

let collection3 = document.getElementsByClassName("n");
let nextMonth = date.getMonth() + 1;
let isForward = 0
if (nextMonth == 12) {
	nextMonth = 0;
	isForward = 1
}
let nDate = new Date(date.getYear() + isForward, nextMonth + 1, 0);
for (let i = 0; i < nDate.getDate(); i++) {
	collection3[i].innerHTML = i + 1;
}