function Game(account1, account2)
{
	var	mtg = this;
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
			grant(p, "select card",     GAME_SOURCE, p.playCard);
			grant(p, "act",           GAME_SOURCE, p.takeAction);

			listen(
				{obj: mtg, act: "assign priority", arg: p.id},
				{obj: p, act: "act", getArg: function() { return mtg.priority; } }
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

function Mana(color)
{
	var m = this;
	m.color = color;
}

function BoardItem(c, controller)
{
	var b = this;
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

function StackItem(c, controller){}

function Card(name, owner)
{
	Card.id = ++Card.id || 1;

	var c = this;
	c.id = Card.id;
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

function Player(player, account)
{
	var	p = this;
	p.name = "Player " + player;
	p.hand = [];
	p.library = [];
	p.life = STARTING_LIFE_TOTAL;
	p.poison = 0;
	p.id = player;
	p.opponent = (player == P1 ? P2 : P1);
	p.lost = false;
	p.won = false;
	p.empty_draw;
	p.devotion = {};
	p.interface = new Interface(p);
	p.mana = [];

	(function(){
		var i,j;
		for (i in account.deck)
			for (j = 0; j < account.deck[i]; j++)
				p.library.push(new Card(i, p));
	})();

	p.drawCards = function(n)
	{
		for (var i = 0; i < n; i++)
		{
			if (!p.library.length)
			{
				n = i;
				p.empty_draw = true;
			}
			else
			{
				var c = p.library.pop();
				p.hand.push(c);
			}
		}
		return p.name + " draws " + n + " card(s).";
	};

	p.shuffleLibrary = function()
	{
		var j, x, i;
		for (i = p.library.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = p.library[i - 1];
			p.library[i - 1] = p.library[j];
			p.library[j] = x;
		}
		return p.name + " shuffles their library.";
	};

	p.passPriority = function()
	{
		act(mtg, "assign priority", p.opponent);
	};

	p.playCard = function(c)
	{
		ungrant(p, "pass priority", GAME_SOURCE);
		ungrant(p, "select card",   GAME_SOURCE);
		grant  (p, "pay cost",      GAME_SOURCE, p.payCost);
	};

	p.payCost = function(c)
	{
		act  (c, "be played",     GAME_SOURCE, c.id);
		grant(p, "pass priority", GAME_SOURCE);
		grant(p, "select card",   GAME_SOURCE);
	};

	p.takeAction = function()
	{
		new Promise(function(resolve){
			p.interface.attemptAction.resolve = resolve;
		}).then(function(val){
			delete p.interface.attemptAction.resolve;
			act(p, val.action, val.arg);
			p.interface.requestUIUpdate();
		});
	};
}