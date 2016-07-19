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

    for(var type in cards[key].types) {
        switch (type) {
            case 'Artifact':
                cards[x].types.type = 'A';
                break;
            case 'Creature':
                cards[x].types.type = 'C';
                break;
            case 'Enchantment':
                cards[x].types.type = 'E';
                break;
            case 'Instant':
                cards[x].types.type = 'I';
                break;
            case 'Land':
                cards[x].types.type = 'L';
                break;
            case 'Planeswalker':
                cards[x].types.type = 'P';
                break;
            case 'Tribal':
                cards[x].types.type = 'T';
                break;
            case 'Sorcery':
                cards[x].types.type = 'S';
                break;
        }
    }

    for(var type in cards[key].supertype) {
        switch (type) {
            case 'Basic':
                cards[x].supertype.type = 'B';
                break;
            case 'Elite':
                cards[x].supertype.type = 'E';
                break;
            case 'Legendary':
                cards[x].supertype.type = 'L';
                break;
            case 'World':
                cards[x].supertype.type = 'W';
                break;
        }
    }
    if(cards[key].types)
        cards[key].types = cards[key].types.join('');
    if(cards[key].supertype)
        cards[key].supertype = cards[key].supertype.join('');

	cards[key].renameProperty('layout', 'l');
	cards[key].renameProperty('manaCost', 'm');
	cards[key].renameProperty('color', 'c');
    cards[key].renameProperty('supertype', 'sup')
	cards[key].renameProperty('types', 'ty');
	cards[key].renameProperty('subtypes', 'sub');
	cards[key].renameProperty('text', 'te');
	cards[key].renameProperty('power', 'p');
	cards[key].renameProperty('colorIdentity', 'ci');
};

fs.writeFile('jsonOutput.json', JSON.stringify(cards));