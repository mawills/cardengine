function Interface(p)
{
	var game = this;
	var gameData = {};
	var p1Data = {
			actions: ['pass priority'],
			life: 20,
			mana: {G:3, R:2},
			battlefield: {5:'Island', 7:"Monastery Swiftspear"},
			hand: {0:'Island', 1:'Forest'},
		};
	var p2Data = {
			actions: ['pass priority'],
			life: 20,
			mana: {W:1, C:1},
			battlefield: {4:'Forest', 6:"Sakura-Tribe Elder"},
			hand: {2:"Wild Nacatl", 3:"Forest"},
		};

	game.attemptAction = function(action, arg)
	{
		console.log("action: " + action);
		console.log("arg: " + arg);
		switch(action){
			case "pass priority":
			{
				if (game.attemptAction.resolve)
					game.attemptAction.resolve({action: action, arg: arg});
				else
					error("An illegal action was attempted by player " + p.id + ". " + action);
				break;
			}
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