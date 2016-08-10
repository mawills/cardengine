function Interface(p)
{
	var game = this;

	game.attemptAction = function(action, arg)
	{
		if (game.attemptAction.resolve)
			game.attemptAction.resolve({action: action, arg: arg});
		else
			error("An illegal action was attempted by player " + p.id + ".");
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
		var
			legal_actions = [],
			hand_card_names = [],
			i
		;

		for (i of Object.getOwnPropertyNames(p.actions))
		{
			if (i == "act")
				continue;
			if (
				Object.getOwnPropertyNames(p.actions[i].grantSources).length &&
				!Object.getOwnPropertyNames(p.actions[i].forbidSources).length
			)
				legal_actions.push(i);
		}

		for (i of p.hand)
		{
			hand_card_names.push(i.name);
		}

		ui.display({
			player:   p.id, // temporary while doing both uis on one display
			log:      act.log,
			hand:     hand_card_names,
			life:     p.life,
			mana:     p.mana,
			priority: mtg.priority,
			active:   mtg.active,
			actions:  legal_actions
		});
	};
}