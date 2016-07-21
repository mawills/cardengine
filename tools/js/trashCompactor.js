Object.prototype.renameProperty = function (oldName, newName) {
     // Do nothing if the names are the same
     if (oldName == newName) {
         return this;
     }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    return this;
};

fs = require('fs');
var cards = JSON.parse(fs.readFileSync(/*'jsonTest.json'*/'AllCards.json').toString());

for(var key in cards){

    delete cards[key].type;
    delete cards[key].mciNumber;
    if(cards[key].layout === 'normal')
        delete cards[key].layout;
    delete cards[key].name;
    delete cards[key].imageName;
    delete cards[key].cmc;

 
    if(cards[key].types) {
	    for(var i = 0; i < cards[key].types.length; ++i) {
	        switch (cards[key].types[i]) {
	            case "Artifact":
	                cards[key].types[i] = 'A';
	                break;
	            case "Creature":
	                cards[key].types[i] = 'C';
	                break;
	            case "Enchantment":
	                cards[key].types[i] = 'E';
	                break;
	            case "Instant":
	                cards[key].types[i] = 'I';
	                break;i
	            case "Land":
	                cards[key].types[i] = 'L';
	                break;
	            case "Planeswalker":
	                cards[key].types[i] = 'P';
	                break;
	            case "Tribal":
	                cards[key].types[i] = 'T';
	                break;
	            case "Sorcery":
	                cards[key].types[i] = 'S';
	                break;
	        }
	    }
	    cards[key].types = cards[key].types.join('');
	}

    if(cards[key].supertype) {
	    for(var i = 0; i < cards[key].supertype.length; ++i) {
	        switch (cards[key].supertype[i]) {
	            case 'Basic':
	                cards[key].supertype.type = 'B';
	                break;
	            case 'Snow':
	                cards[key].supertype.type = 'S';
	                break;
	            case 'Legendary':
	                cards[key].supertype.type = 'L';
	                break;
	            case 'World':
	                cards[key].supertype.type = 'W';
	                break;

	        }
	    }
	    cards[key].supertype = cards[key].supertype.join('');
	}

    if(cards[key].colors) {
	    for(var i = 0; i < cards[key].colors.length; ++i) {
	    	switch(cards[key].colors[i]) {
	    		case 'White':
	    			cards[key].colors.color = 'W';
	    			break;
	    		case 'Blue':
	    			cards[key].colors.color = 'U';
	    			break;
	    		case 'Green':
	    			cards[key].colors.color = 'G';
	    			break;
	    		case 'Black':
	    			cards[key].colors.color = 'B';
	    			break;
	    		case 'Red':
	    			cards[key].colors.color = 'R';
	    			break;
	    	}
	    }
	    cards[key].colors = cards[key].colors.join('');
	}

    if(cards[key].colorIdentity)
    	cards[key].colorIdentity = cards[key].colorIdentity.join('');

	cards[key].renameProperty('layout', 'l');
	cards[key].renameProperty('manaCost', 'm');
	cards[key].renameProperty('colors', 'C');
    cards[key].renameProperty('supertype', 's');
	cards[key].renameProperty('types', 't');
	cards[key].renameProperty('subtypes', 's');
	cards[key].renameProperty('text', 'x');
	cards[key].renameProperty('power', 'P');
	cards[key].renameProperty('toughness', 'T');
	cards[key].renameProperty('colorIdentity', 'i');

};

fs.writeFile('jsonOutput.json', JSON.stringify(cards));