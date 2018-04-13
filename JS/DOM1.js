/**
 * 
 */

function createPara() {
	var para = document.createElement("P");
	para.setAttribute("id","par");
	document.body.appendChild(para);
}

function addText() {
	var txt = document.createTextNode("You have updated the text!");
	text.setAttribute("id", "text");
	par.appendChild(txt);
	document.body.appendChild(par);
}

function delteText(){
	var textToRemove = document.getElemenyById("text");
		document.removeChild(textToRemove);
}

function deltePara(){
	var paraToRemove = document.getElemenyById("par");
		document.removeChild(paraToRemove);
}

