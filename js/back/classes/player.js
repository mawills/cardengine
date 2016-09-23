function Player(player, account)
{
	var	p = this;
	p.id = Game.id++;
	p.name = "Player " + player;
	p.hand = [];
	p.library = [];
	p.life = STARTING_LIFE_TOTAL;
	p.poison = 0;
	p.self = player;
	p.opponent = (player == P1 ? P2 : P1);
	p.lost = false;
	p.won = false;
	p.empty_draw;
	p.devotion = {};
	p.interface = new Interface(p);
	p.mana = [];
	p.pending_card;
	p.cost = [];

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

		p.pending_card = c;
		for (var o of c.cost)
			grant(o, "satisfy", GAME_SOURCE, o.satisfy);
	};

	p.payCost = function(remaining)
	{
		if (remaining)
			return "Waiting for " + remaining + " remaining costs to cast " + p.pending_card.name;

		act  (p.pending_card, "be played", c.id);
		delete p.pending_card;

		ungrant(p, "pay cost", GAME_SOURCE);
		grant(p, "select card",   GAME_SOURCE);
		grant(p, "pass priority", GAME_SOURCE);
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
