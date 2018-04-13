

var personData= [];
counter = 0;

class Person {
	constructor (name, age, occ, iD){
		this.name = name;
		this.age = age;
		this.occupation = occupation;
		counter++;
		this.iD = counter;
	}
}

function addNewPerson(){
	var person = {
			name: nameInput,
			age: ageInput,
			occ: occInput,
			iD: personiD
	}
}

function setName(updatedName) {
	this.name = name;
}

function setAge(updatedAge){
	this.age = age;
}

function setOcc(updatedOcc){
	this.occ = occ;
}

function getiD() {
	return iD;
}

document.getElementById("newForm").addEventListener("submit", addNewPerson(document.getElementById("nameInput").value), 
		document.getElementById("ageInput").value), document.getElementById("occInput").value;

var newEntry = new Person (name, age, occ);
personData.push(newEntry)
window.alert("Details saved. iD number: " + counter);

function updatePerson(iDToUpdate, updatedName, updatedAge, updatedOcc){
	for (i = 0; i < personData.size(); i++) {
		if (personData.get(i).getiD() == iDToUpdate) {
			personData.get(i).setName(updatedName);
			personData.get(i).setAge(updatedAge);
			personData.get(i).setOcc(updatedOcc);
		}
	}
}

