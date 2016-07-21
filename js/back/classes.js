function Game(account1, account2)
{
	"use strict";

	function Player(player, account)
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
				player: player,
				priority: priority,
				active: active,
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
		active = P1,
		players = {},
		stack = [],
		phase = PREGAME_PHASE,
	varend;

	players[P1] = new Player(P1, account1);
	players[P2] = new Player(P2, account2);

	mtg.getUIData = function()
	{
		return players[priority].getUIData();
	};
}
