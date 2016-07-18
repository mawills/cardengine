function Game()
{
	"use strict";
	var
		mtg = this,
		priority = NO_PRIORITY,
		active_player = P1,
		players = {},
		stack = [],
	varend;

	players[P1] = new Player(deck2);
	players[P2] = new Player(deck1);

	mtg.getPlayer = function(player)
	{
		return players[player];
	};
}

function Player(_deck)
{
	"use strict";
	var
		p = this,
		hand = [],
		deck = [],
		i, j, // iterators
	varend;

	for (i in _deck)
	{
		for (j=0; j<_deck[i]; j++)
		{
			deck.push(i);
		}
	}

	shuffle(deck);

	for (i=0; i<7; i++)
	{
		hand.push(deck.pop());
	}

	p.getHand = function()
	{
		return hand;
	}
}
