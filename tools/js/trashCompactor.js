window.onload = function() {
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

	for (var x in CARDS) {
		CARDS[x].renameProperty('layout', 'l');
		CARDS[x].renameProperty('name', 'n');
		CARDS[x].renameProperty('manaCost', 'm')
		CARDS[x].renameProperty('color', 'c')
		delete CARDS[x].type;
		CARDS[x].renameProperty('types', 'ty')
		CARDS[x].renameProperty('subtypes', 'st')
		CARDS[x].renameProperty('text', 'te')
		delete CARDS[x].mciNumber;
		CARDS[x].renameProperty('power', 'p')
		CARDS[x].renameProperty('toughness', 't')
		CARDS[x].renameProperty('imageName', 'i')
		CARDS[x].renameProperty('colorIdentity', 'ci')
	}
	str = JSON.stringify(CARDS, null, 4);
	document.getElementById('cock').innerHTML = str;
}