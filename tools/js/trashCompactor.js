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
var cards = JSON.parse(fs.readFileSync('AllCards.json').toString());

for(var key in cards){

    delete cards[key].type;
    delete cards[key].mciNumber;
    if(cards[key].layout === 'normal')
        delete cards[key].layout;
    delete cards[key].name;
    delete cards[key].imageName;


    //DOESNT WORK ATM
    for(var type in cards[key].types) {
        switch (type) {
            case 'Artifact':
                cards[key].types.type = 'A';
                break;
            case 'Creature':
                cards[key].types.type = 'C';
                break;
            case 'Enchantment':
                cards[key].types.type = 'E';
                break;
            case 'Instant':
                cards[key].types.type = 'I';
                break;
            case 'Land':
                cards[key].types.type = 'L';
                break;
            case 'Planeswalker':
                cards[key].types.type = 'P';
                break;
            case 'Tribal':
                cards[key].types.type = 'T';
                break;
            case 'Sorcery':
                cards[key].types.type = 'S';
                break;
        }
    }

    //DOESNT WORK ATM
    for(var type in cards[key].supertype) {
        switch (type) {
            case 'Basic':
                cards[key].supertype.type = 'B';
                break;
            case 'Elite':
                cards[key].supertype.type = 'E';
                break;
            case 'Legendary':
                cards[key].supertype.type = 'L';
                break;
            case 'World':
                cards[key].supertype.type = 'W';
                break;

        }
    }

    //DOESNT WORK ATM
    for(var color in cards[key].colors) {
    	switch(color) {
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

    //TEST AFTER ABOVE IS FIXED
    /*if(cards[key].types)
        cards[key].types = cards[key].types.join('');
    if(cards[key].supertype)
        cards[key].supertype = cards[key].supertype.join('');
    if(cards[key].colors)
    	cards[key].colors = cards[key].colors.join('');
    if(cards[key].colorIdentity)
    	cards[key].colorIdentity = cards[key].colorIdentity.join('');*/

	cards[key].renameProperty('layout', 'l');
	cards[key].renameProperty('manaCost', 'm');
	cards[key].renameProperty('colors', 'c');
    cards[key].renameProperty('supertype', 'sup');
	cards[key].renameProperty('types', 'ty');
	cards[key].renameProperty('subtypes', 'sub');
	cards[key].renameProperty('text', 'te');
	cards[key].renameProperty('power', 'p');
	cards[key].renameProperty('toughness', 'to');
	cards[key].renameProperty('colorIdentity', 'ci');
};

fs.writeFile('jsonOutput.json', JSON.stringify(cards));