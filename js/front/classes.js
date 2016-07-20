function UI(account)
{
	"use strict";

	function You(player)
	{
		var
			hand = $('#hand'),
			library = [],
			i, j,
		varend;

		p.getHand = function()
		{
			return hand;
		}
	}

	function Opponent()
	{
		var
		varend;
	}

	function Card(name)
	{
		var id = name.toLowerCase().replace(/[^\w]/g, '');
		var c = cards[name];
		if (c.te)
			c.te = c.te.replace("\n", "<br>");

		var
			supertypes = c.supertypes,
			types = c.ty,
			subtypes = c.sub,
			type_text = "",
			colors = [],
			text = c.te,
			t = this,
			i,
		varend;

		if (c.supertypes)
			for (i=0; i<c.supertypes.length; i++)
				type_text += c.supertypes[i] + " ";
		if (c.ty)
			for (i=0; i<c.ty.length; i++)
				type_text += c.ty[i] + " ";
		if (c.sub)
		{
			type_text += TYPE_DASH + " ";
			for (i=0; i<c.sub.length; i++)
				type_text += c.sub[i] + " ";
		}
		type_text = type_text.slice(0, -1);

		function select()
		{
			$(".selected").removeClass("selected");
			t.element.addClass("selected");

			$("#selection-name").html(name + "<br>");
			$("#selection-type").html(type_text + "<br>");
			$("#selection-text").html(text);
		}

		t.element = $("<img>",{ class: 'card', src: 'res/img/cards/' + id + '.jpg'}).click(select);
	}

	var
		ui = this,
		selection,
	varend;

	ui.drawCards = function(cards)
	{
		for (var i=0; i<cards.length; i++)
		{
			(function(){
				var card = new Card(cards[i]);
				$("#hand").append(card.element);
			})();
		}
	};
}


