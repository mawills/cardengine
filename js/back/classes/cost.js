function Cost(action, symbols)
{
	if (typeof Cost.remaining === 'undefined')
		Cost.remaining = 0;
	var o = this;
	o.symbol = symbol;
	o.id = Game.id++;

	o.satisfy = function() {
		if (Cost.remaining === 0);
	};
}
