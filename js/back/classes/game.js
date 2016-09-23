function Game(account1, account2)
{
	Game.id || (Game.id = 0);
	Game.id++;

	var	mtg = this;
	mtg.id = Game.id++;
	mtg.name = "The game";
	mtg.priority = NO_PLAYER;
	mtg.active = P1;
	mtg.players = [];
	mtg.stack = [];
	mtg.phase = PREGAME_PHASE;
	mtg.battlefield = [];

	mtg.startGame = function()
	{
		grant(mtg, "check state",     GAME_SOURCE, mtg.checkState);
		grant(mtg, "change phase",    GAME_SOURCE, mtg.changePhase);
		grant(mtg, "assign priority", GAME_SOURCE, mtg.assignPriority);

		listen(
			{obj: mtg, act: "assign priority"},
			{obj: mtg, act: "check state"}
		);

		mtg.players[P1] = new Player(P1, account1);
		mtg.players[P2] = new Player(P2, account2);

		for (var p of mtg.players)
		{
			grant  (p, "shuffle", GAME_SOURCE, p.shuffleLibrary);
			act    (p, "shuffle");
			ungrant(p, "shuffle", GAME_SOURCE);

			grant  (p, "draw cards", GAME_SOURCE, p.drawCards);
			act    (p, "draw cards", STARTING_HAND_SIZE);
			ungrant(p, "draw cards", GAME_SOURCE);

			grant(p, "pass priority", GAME_SOURCE, p.passPriority);
			grant(p, "select card",   GAME_SOURCE, p.playCard);
			grant(p, "act",           GAME_SOURCE, p.takeAction);

			listen(
				{obj: mtg, act: "assign priority", arg: p.self},
				{obj: p,   act: "act",             getArg: function() { return mtg.priority; } }
			);
		}

		listen(
			{obj: mtg, act: "change phase"},
			{obj: mtg, act: "assign priority", getArg: function() { return mtg.active; } }
		);

		act(mtg, "change phase", MAIN_PHASE_1);
	};

	mtg.checkState = function()
	{
		for (var p of mtg.players)
		{
			if (
				p.life <= 0 ||
				p.empty_draw ||
				p.poison >= 10
			)
				p.lost = true;
		}
	};

	mtg.changePhase = function(new_phase)
	{
		mtg.phase = new_phase;
		return "It is the " + new_phase + ".";
	};

	mtg.assignPriority = function(player_id)
	{
		if (mtg.priority != NO_PLAYER)
			ungrant(mtg.players[mtg.priority], "pass priority", GAME_SOURCE);
		if (player_id != NO_PLAYER)
			grant(mtg.players[player_id], "pass priority", GAME_SOURCE);
		mtg.priority = player_id;
	};
}
