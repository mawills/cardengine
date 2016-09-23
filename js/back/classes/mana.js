function Mana(color)
{
	var m = this;
	m.id = Game.id++;
	m.color = color;

	m.consume = function(o) {
		act(o, "satisfy");
	};
}
