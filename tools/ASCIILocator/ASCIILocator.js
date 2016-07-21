fs = require('fs');
var cards = (fs.readFileSync('jsonOutput.json').toString().split(''));

var ascii_arr = [];
for(var i = 33; i < 127; ++i)
	ascii_arr.push(i);

for(var i = 0; i < cards.length; ++i)
	for(var j = 0; j < ascii_arr.length; ++j)
		if(cards[i].charCodeAt(0) === ascii_arr[j]) 
			ascii_arr.splice(j, 1);

fs.writeFile('unusedASCII', ascii_arr);