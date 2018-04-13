// STRINGS 4

//Not complete


numOfTriples('abcXXXabc');

function numOfTriples(string){
	var freq = [];
	var c1 = string.charAt(i);
	var c2 = string.charAt(i+1);
	var c3 = string.charAt(i+2);
	
	for (var i=0; i<string.length-2; i++){
		if ((c1.match(c2)) && (c1.match(c3))) {
			freq[c1]++;
			i = i+3;
			return i;
		} else {
			freq[c1] = 0;
			i++;
		}		
	}
	console.log(freq);
	return freq;
};




