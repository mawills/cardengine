function Game(account1, account2)
{
	"use strict";

	function Player(account)
	{
		var
			p = this,
			hand = [],
			deck = [],
			ui = new UI(account),
			i, j,
		varend;

		for (i in account.deck)
			for (j=0; j<account.deck[i]; j++)
				deck.push(i);
		shuffle(deck);
		for (i=0; i<STARTING_HAND_SIZE; i++)
			hand.push(deck.pop());

		ui.drawCards(hand);
	}

	var
		mtg = this,
		priority = NO_PRIORITY,
		active_player = P1,
		players = {},
		stack = [],
	varend;

	players[P1] = new Player(account1);
	players[P2] = new Player(account2);
}
