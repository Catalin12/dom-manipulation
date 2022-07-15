let boldWords = [];

window.onload = function () {
	createListOfFruits();
	boldWords = document.getElementsByTagName('strong');
};

function checkNameData() {
	alert(`Salutare ${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`);
}

function deleteListData() {
	let selectObject = document.getElementById("myList");
	let selectedValue = selectObject.value;
	console.log(selectObject);
	for (let i = 0; i < selectObject.length; i++) {
		if (selectObject.options[i].value === selectedValue) {
			selectObject.remove(i);
			return;
		}
	}
}

function getVolume() {
	const PI = 3.14159265359;
	let radius = document.getElementById("radius").value;
	let volume = 4 / 3 * PI * Math.pow(radius, 3);
	alert(`The volume is ${volume.toFixed(2)} centimeters.`);
}

function onMouseInParagraph() {
	const p = document.getElementById('paragraph');
	p.style.backgroundColor = "lightblue";
	for(let boldWord of boldWords) {
		boldWord.style.color = "orange";
	}
}

function onMouseOutParagraph() {
	const p = document.getElementById('paragraph');
	p.style.backgroundColor = null;
	for(let boldWord of boldWords) {
		boldWord.style.color = null;
	}
}

function createListOfFruits() {
	const myList = document.getElementById("fruitsMenu");
	const fruitList = ["Apple", "Orange", "Avocado", "Banana", "Carambola"];
	for (let fruit of fruitList) {
		let newListItem = document.createElement("li");
		newListItem.textContent = fruit;
		myList.appendChild(newListItem);
	}
}

function changeBackgroundColor() {
	let color = colorPicker.value;
	document.body.style.backgroundColor = color;
}

function resetBackgroundColor() {
	document.body.style.backgroundColor = null;
}

function insertInTable() {
	let name = document.getElementById('tabelName');
	const tableBody = document.getElementById("tableData");
	let makeNewRow = document.createElement('tr');
	let firstColumn = document.createElement('td');
	firstColumn.textContent = tableBody.rows.length + 1;
	tableBody.appendChild(firstColumn);
	let secondColumn = document.createElement('td');
	secondColumn.textContent = name.value;
	tableBody.appendChild(secondColumn);
	tableBody.appendChild(makeNewRow);
}