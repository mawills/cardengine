var mtg = new Game();

function update()
{
	var hand = mtg.getPlayer(P1).getHand();
	for (var i=0; i<hand.length; i++)
	{
		$("#hand").append($("<img>",{ class: "card", src: 'res/img/cards/' + hand[i] + ".jpg"}));
	}
}

window.onload = function()
{
	"use strict";
	update();
};
