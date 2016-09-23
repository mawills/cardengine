function Card(name, owner)
{
	var c = this;
	c.id = Game.id++;
	c.name = name;
	c.owner = owner;
	c.layout         = CARDS[name][LAYOUT_ATTRIBUTE];
	c.supertypes     = CARDS[name][SUPERTYPES_ATTRIBUTE];
	c.types          = CARDS[name][TYPES_ATTRIBUTE];
	c.subtypes       = CARDS[name][SUBTYPES_ATTRIBUTE];
	c.mana_cost      = CARDS[name][MANA_COST_ATTRIBUTE];
	c.power          = CARDS[name][POWER_ATTRIBUTE];
	c.toughness      = CARDS[name][TOUGHNESS_ATTRIBUTE];
	c.colors         = CARDS[name][COLORS_ATTRIBUTE]
	c.color_identity = CARDS[name][COLOR_IDENTITY_ATTRIBUTE];
	c.converted_mana_cost;

	c.becomeBoardItem = function()
	{
		mtg.battlefield.push(new BoardItem(c));
	};

	c.becomeStackItem = function()
	{
		mtg.stack.push(new StackItem(c));
	};

	(function(){
		var i;
		for (i in c.types.split(''))
			c.types[i] = TYPES[c.types[i]];

		if (c.types.indexOf("Land") != -1)
		{
			grant(c, "be played", GAME_SOURCE, c.becomeBoardItem);
		}
		else
		{
			grant(c, "be played", GAME_SOURCE, c.becomeStackItem);
		}
	})();
}
