function Interface(p)
{
	var game = this;

	game.attemptAction = function(action, arg)
	{
		if (game.attemptAction.resolve)
			game.attemptAction.resolve({action: action, arg: arg});
		else
			error("An illegal action was attempted by player " + p.id + "." + action);
	};

	var ui;
	game.connect = function(_ui)
	{
		ui = _ui;
		game.requestUIUpdate();
	};

	function generateActionPacket(action_object)
	{
		var actions = [];
		for (a of Object.getOwnPropertyNames(action_object))
		{
			if (a == "act")
				continue;
			if (
				Object.getOwnPropertyNames(action_object[a].grantSources).length &&
				!Object.getOwnPropertyNames(action_object[a].forbidSources).length
			)
				actions.push(a);
		}
		return actions;
	}

	game.requestUIUpdate = function()
	{
		p = mtg.players[mtg.priority]; // temporary while doing both uis on one display
		var
			player_actions = [],
			hand_card_actions = [],
			board_item_actions= [],
			hand_cards = {},
			i, c, b
		;

		player_actions.push(generateActionPacket(p.actions));

		for (c in p.hand)
			hand_card_actions.push(generateActionPacket(p.hand[c].actions));

		for (b in mtg.battlefield)
			board_item_actions.push(generateActionPacket(b.actions));

		for (i of p.hand)
		{
			hand_cards[i.id] = i.name;
		}

		ui.display({
			player:   p.id, // temporary while doing both uis on one display
			log:      act.log,
			life:     p.life,
			mana:     [{G:3, R:2}, {W:1, C:1}],
			priority: mtg.priority,
			active:   mtg.active,
			player_actions: player_actions,
			hand_card_actions: hand_card_actions,
			board_item_actions: board_item_actions,
			hand:     hand_cards
		});
	};
}