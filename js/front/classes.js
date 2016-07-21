function UI()
{
	"use strict";

	function Card(name)
	{
		var id = name.toLowerCase().replace(/[^\w]/g, '');
		var c = CARDS[name];

		var
			layout     = c[LAYOUT_ATTRIBUTE],
			supertypes = c[SUPERTYPES_ATTRIBUTE],
			types      = c[TYPES_ATTRIBUTE],
			subtypes   = c[SUBTYPES_ATTRIBUTE],
			text       = c[ORACLE_TEXT_ATTRIBUTE],
			type_text = "",
			colors = [],
			t = this,
			i,
		varend;

		supertypes = supertypes ? supertypes.split('') : [];
		types = types ? types.split('') : [];

		if (text)
			text = text.replace("\n", "<br>");

		if (!layout)
			layout = NORMAL_LAYOUT;

		for (i = 0; i < supertypes.length; i++)
		{
			supertypes[i] = SUPERTYPES[supertypes[i]];
			type_text += supertypes[i] + " ";
		}
		for (i = 0; i < types.length; i++)
		{
			types[i] = TYPES[types[i]];
			type_text += types[i] + " ";
		}
		if (subtypes)
		{
			type_text += TYPE_DASH + " ";
			for (i = 0; i < subtypes.length; i++)
				type_text += subtypes[i] + " ";
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
	varend;

	function update(data)
	{
		for (var i = 0; i < data.hand.length; i++)
		{
			(function(){
				var card = new Card(data.hand[i]);
				$("#hand").append(card.element);
			})();
		}
	}

	ui.display = function(mtg)
	{
		var data = mtg.getUIData();
		update(data);
	};
}
