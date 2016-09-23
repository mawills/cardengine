function BoardItem(c, controller)
{
	var b = this;
	b.id = Game.id++;
	b.controller = c.owner;
	b.tapped = false;

	grant(b, "tap", GAME_SOURCE, b.tap);

	if (c.types.indexOf("Island") != -1)
	{
		grant(b, "generate mana", function(){
			mtg.players[controller].mana.push(new Mana('U'));
		});
	}

	b.tap = function()
	{
		c.tapped = true;
		forbid(c, "tap", GAME_SOURCE);
	};

	b.untap = function()
	{
		c.tapped = false;
		unforbid(c, "tap", GAME_SOURCE);
	};
}
