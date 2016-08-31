function UI(mtg, player)
{
	var ui = this;
	function Card(id, name)
	{
		var img = name.toLowerCase().replace(/[^\w]/g, '') + '.jpg';
		var c = CARDS[name];

		var
			layout     = c[LAYOUT_ATTRIBUTE],
			supertypes = c[SUPERTYPES_ATTRIBUTE] || "",
			types      = c[TYPES_ATTRIBUTE] || "",
			subtypes   = c[SUBTYPES_ATTRIBUTE],
			text       = c[ORACLE_TEXT_ATTRIBUTE],
			type_text = "",
			colors = [],
			t = this,
			i,
		varend;

		supertypes = supertypes.split('');
		types = types.split('');

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
			$("#selection-text").empty().html(text);

			$('#selection-actions').empty();
			$("#selection-actions").append(new Action("Play " + name, "select card", id).element);
		}

		t.element = $("<img>", { class: 'card', src: 'res/img/cards/' + img }).click(select);
	}

	function Action(label, action, arg)
	{
		var a = this;
		function act()
		{
			mtg.players[player].interface.attemptAction(action, arg);
		}
		a.element = $("<div>", { class: 'action' }).click(act).text(label);
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
		for (var card_id in data.hand)
		{
			if (data.hand.hasOwnProperty(card_id))
			{
				(function(){
					var card = new Card(card_id, data.hand[card_id]);
					$("#hand").append(card.element);
				})();
			}
		}

		$('.battlefield').empty(); 
		for(var battlefield of [data.p1_battlefield, data.p2_battlefield])
		{
			for (var permanent in battlefield)
			{
				if (battlefield.hasOwnProperty(permanent))
				{
					(function(){
						var card = new Card(permanent, permanent);
						if(battlefield == 0)
						{
							if(card.types === 'L')
								$("#p1_battlefield_land").append(card.element);
							else
								$("#p1_battlefield").append(card.element);
						}
						else
						{
							if(card.types === 'L')
								$("#p2_battlefield_land").append(card.element);
							else
								$("p2_battlefield").append(card.element);
						}
					})();
				}
			}
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
		for (var packet of data.player_actions)
		{
			for (i of packet)
			{
				switch (i)
				{
				case "select card":
					break;
				case "pass priority":
				case "pay cost":
				case "act":
					(function(){
						var action = new Action(i.toUpperCase(), i);
						$("#stack").append(action.element);
					})();
					break;
				default:
					console.log("error one: " + i);
					break;
				}
			}
		}
		for (packet of data.hand_card_actions)
		{
			for (i of packet)
			{
				switch (i)
				{
				case "be played":
					break;
				default:
					break;
				}
			}
		}
		for (packet of data.board_item_actions)
		{
			for (i of packet)
			{
				switch (i)
				{
				default:
					console.log("error three: " + i);
					break;
				}
			}
		}
	};
}
