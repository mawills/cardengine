function getUIData(mtg)
{
	var
		p = mtg.players[mtg.priority],
		legal_actions = [],
		hand_card_names = [],
		i
	;

	for (i of Object.getOwnPropertyNames(p.actions))
	{
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

	return {
		log:      act.log,
		hand:     hand_card_names,
		life:     p.life,
		priority: mtg.priority,
		active:   mtg.active,
		actions:  legal_actions
	};
}