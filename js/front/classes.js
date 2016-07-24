function UI(mtg, player)
{
	var ui = this;
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
			text = imgify(text);

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
			type_text += "— ";
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

	function Action(action)
	{
		var a = this;
		function act()
		{
			console.log(player);
			mtg.players[player].interface.attemptAction(action);
		}
		a.element = $("<div>", { class: 'action' }).click(act).text(action);
	};

	ui.connect = function()
	{
		mtg.players[player].interface.connect(ui);
	};

	ui.display = function(data)
	{
		var i;

		player = data.player; // temporary while doing both uis on one display

		$('#hand').empty();
		for (i = 0; i < data.hand.length; i++)
		{
			(function(){
				var card = new Card(data.hand[i]);
				$("#hand").append(card.element);
			})();
		}

		$(".priority").removeClass("priority");
		if (data.priority == data.player)
			$("#player1").addClass("priority");
		else if (data.priority != NO_PLAYER)
			$("#player2").addClass("priority");

		$(".active").removeClass("active");
		if (data.active == data.player)
			$("#player1").addClass("active");
		else if (data.active != NO_PLAYER)
			$("#player2").addClass("active");

		$("#stack").empty();
		for (i of data.actions)
		{
			(function(){
				var action = new Action(i);
				$("#stack").append(action.element);
			})();
		}
	};
}
