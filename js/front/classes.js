function UI(mtg, player)
{
	var pay_cost;

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

	function addManaToManaPool(color)
	{
		if(pay_cost)
			mtg.players[player].interface.attemptAction("pay cost", color);
	};

	ui.connect = function()
	{
		mtg.players[player].interface.connect(ui);
	};

	// Updates the display on each server tick
	ui.display = function(data)
	{
		var i, j, id;

		player = data.player; // temporary while doing both uis on one display

		$("#stack").empty();
		for (i of data.self.actions)
		{
			switch (i)
			{
			case "select card":
				break;
			case "pass priority":
			case "pay cost":
			case "cancel":
			case "act":
				(function(){
					var action = new Action(i.toUpperCase(), i);
					$("#stack").append(action.element);
				})();
				break;
			default:
				break;
			}
		}

		// Displays cards in hard
		$('#hand').empty();
		for (id in data.self.hand)
		{
			if (data.self.hand.hasOwnProperty(id))
			{
				(function(){
					var card = new Card(id, data.self.hand[id]);
					$("#hand").append(card.element);
				})();
			}
		}

		// Displays priority border
		$(".priority").removeClass("priority");
		if (data.priority == player)
			$("#player1").addClass("priority");
		else if (data.priority != NO_PLAYER)
			$("#player2").addClass("priority");

		// Displays active player highlighting
		$(".active").removeClass("active");
		if (data.active == player)
			$("#player1").addClass("active");
		else if (data.active != NO_PLAYER)
			$("#player2").addClass("active");

		// Displays cards on battlefield
		$('.battlefield').empty();
		var board = [data.self.battlefield, data.opponent.battlefield];
		for (var battlefield of board)
		{
			for (id of Object.getOwnPropertyNames(battlefield))
			{
				(function(){
					var card = new Card(id, battlefield[id]);
					if(battlefield == board[0])
					{
						if(battlefield[id]['t'] == 'L')
							$("#p1_battlefield_land").append(card.element);
						else
							$("#p1_battlefield").append(card.element);
					}
					else
					{
						if(battlefield[id]['t'] == 'L')
							$("#p2_battlefield_land").append(card.element);
						else
							$("#p2_battlefield").append(card.element);
					}
				})();
			}
		}

		// Displays mana pools
		$(".mana").empty();
		var mana_pools = [data.self.mana, data.opponent.mana];
		for (var pool of mana_pools)
		{
			for (var color of Object.getOwnPropertyNames(pool))
			{
				if (COLORS.indexOf(color) !== -1)
				{
					mana_img = imgify('{' + color + '}');

					if(pool == mana_pools[0])
						$("#p1_mana").append(mana_img + ": " + pool[color]);
					else
						$("#p2_mana").append(mana_img + ": " + pool[color]);
				}
			}
		}
	};
}
