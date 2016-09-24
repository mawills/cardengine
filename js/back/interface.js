function Interface(p)
{
	var game = this;
	var gameData = {};
	var p1Data = {
			actions: ['pass priority'],
			life: 20,
			mana: {W:0,U:0,B:0,G:0,R:0,C:0},
			battlefield: {1:'Forest', 7:"Wild Nacatl"},
			hand: {0:'Island', 5:'Island'},
		};
	var p2Data = {
			actions: ['pass priority'],
			life: 20,
			mana: {W:0,U:0,B:0,G:0,R:0,C:0},
			battlefield: {4:'Forest', 6:"Sakura-Tribe Elder", 7:"Mountain"},
			hand: {2:"Wild Nacatl", 3:"Forest"},
		};

	game.attemptAction = function(action, arg)
	{
		console.log("action: " + action);
		console.log("arg: " + arg);
		switch(action)
		{
			case "pass priority":
			{
				if (game.attemptAction.resolve)
					game.attemptAction.resolve({action: action, arg: arg});
				else
					error("An illegal action was attempted by player " + p.id + ". " + action);
				break;
			}
			break;
			case "pay cost":
			{
				switch(arg)
				{
					case "0":
					case "1":
					case "2":
					case "3":
						if(gameData.player == 0)
						{
							p1Data.battlefield[arg] = p1Data.hand[arg];
							delete p1Data.hand[arg];
						}
						else
						{
							p2Data.battlefield[arg] = p2Data.hand[arg];
							delete p2Data.hand[arg];
						}
						break;
					default:
						error("An illegal action was attempted by player " + p.id + ". " + action + arg);
						break;
				}
				break;
			}
			case "tap":
				$("#selected").addClass("tapped");
				switch(arg)
				{
					case "0":
					case "5":
						p1Data.mana.U++;
						break;
					case "1":
						p1Data.mana.G++;
						break;
					case "3":
					case "4":
						p2Data.mana.G++;
						break;
					case "7":
						p2Data.mana.R++;
						break;
				}
				break;
			default:
				error("An illegal action was attempted by player " + p.id + ". " + action);
				break;
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