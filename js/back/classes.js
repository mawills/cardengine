function Game(account1, account2)
{
	"use strict";

	function Player(account)
	{
		var
			p = this,
			hand = [],
			library = [],
			life = STARTING_LIFE_TOTAL,
			i, j,
		varend;

		for (i in account.deck)
			for (j = 0; j < account.deck[i]; j++)
				library.push(i);
		shuffleArray(library);
		for (i = 0; i < STARTING_HAND_SIZE; i++)
			hand.push(library.pop());

		p.actions = PLAYER_ACTIONS;

		p.getUIData = function()
		{
			return {
				hand: hand
			};
		};

	}

	function act(obj, func, arg)
	{

		if (obj.forbid.func)
			return false;
	}

	var
		mtg = this,
		priority = P1,
		active_player = P1,
		players = {},
		stack = [],
		phase = PREGAME_PHASE,
	varend;

	players[P1] = new Player(account1);
	players[P2] = new Player(account2);

	mtg.getUIData = function()
	{
		return players[active_player].getUIData();
	};
}
