var PLAYER_ACTIONS = {
	mulligan:{do:function(){
		// mulliganing code
		return true;
	}},
	drawCard:function(){
		hand.push(library.pop());
	},
	shuffle:function(){
		shuffleArray(library);
	},
	playLand:{do:function(card){
		return card;
	}},
	cast: {
		do: function(card){
			return card.cast();
		},
		forbid: []
	}

};