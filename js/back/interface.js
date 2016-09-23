function Interface(p)
{
	var game = this;
	var gameData = {};
	var p1Data = {
			actions: ['pass priority'],
			life: 20,
			mana: {G:3, R:2},
			battlefield: {0:'Island'},
			hand: {1:'Island'},
		};
	var p2Data = {
			actions: ['pass priority'],
			life: 20,
			mana: {W:1, C:1},
			battlefield: {2:'Forest',5:'Sakura-Tribe Elder'},
			hand: {3:'Island', 4:'Forest'},
		};

	game.attemptAction = function(action, arg)
	{
		if (action == "pass priority")
		{
			if (game.attemptAction.resolve)
				game.attemptAction.resolve({action: action, arg: arg});
			else
				error("An illegal action was attempted by player " + p.self + ": " + action);
			return;
		}

		game.requestUIUpdate();
	};

	var ui;
	game.connect = function(_ui)
	{
		ui = _ui;
		game.requestUIUpdate();
	};

	game.requestUIUpdate = function()
	{
		p = mtg.players[mtg.priority]; // temporary while doing both uis on one display
		gameData.player = p.self;
		gameData.priority = mtg.priority;
		gameData.active = mtg.active;
		gameData.self = p.self ? p2Data : p1Data;
		gameData.opponent = p.self ? p1Data : p2Data;
		ui.display(gameData);
	};
}