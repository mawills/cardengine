function Game(account1, account2)
{
	"use strict";

	var
		mtg = this,
		priority = P1,
		active = P1,
		players = {},
		stack = [],
		phase = PREGAME_PHASE,
		combat_log = [],
		tick_number = 0,
		triggers = [],
	varend;

	function error(msg)
	{
		console.log("Error: " + msg);
	}

	function Action()
	{
		var a = this;
		a.forbidSources = {};
		a.grantSources = {};
		a.func = undefined;
	}

	function grant(obj, name, source, func)
	{
		if (!obj.actions)
			obj.actions = {};

		if (!obj.actions[name])
			obj.actions[name] = new Action();

		if (obj.actions[name])
		{
			if (!obj.actions[name].func)
				obj.actions[name].func = func;

			if (obj.actions[name].func != func)
				error("A non-identical grant with a duplicate name was attempted.");
		}
		obj.actions[name].grantSources[source] = true;
	}

	function ungrant(obj, name, source)
	{
		if (!obj.actions[name].grantSources[source])
			error("An illegal ungrant was attempted.");
		delete obj.actions[name].grantSources[source];
	}

	function forbid(obj, name, source)
	{
		if (!obj.actions)
			obj.actions = {};

		if (!obj.actions[name])
			obj.actions[name] = new Action();

		obj.actions[name].forbidSources[source] = true;
	}

	function unforbid()
	{
		if (!obj.actions[name].forbidSources[source])
			error("An illegal unforbid was attempted.");
		delete obj.actions[name].forbidSources[source];
	}

	function listen(trigger_obj, trigger_act, trigger_arg, response_obj, response_act, response_arg)
	{
		listen.id = ++listen.id || 1;
		triggers[listen.id] = {obj: trigger_obj, act: trigger_act, arg:trigger_arg, response:{obj: response_obj, act:response_act, arg:response_arg}};
		return listen.id;
	}

	function unlisten(id)
	{
		delete triggers[id];
	}

	function act(obj, act, arg)
	{
		var i;
		if (!obj.actions[act] || !Object.getOwnPropertyNames(obj.actions[act].grantSources).length)
		{
			console.log(obj.name + " cannot " + act + ". (Not granted by any source.)");
			return;
		}

		if (Object.getOwnPropertyNames(obj.actions[act].forbidSources).length)
		{
			var forbid_message = obj.name + " cannot " + act + ". (Forbidden by: ";
			for (i = 0; i < obj.actions[act].forbid.length; i++)
				forbid_message += obj.actions[act].forbid[i] + ', ';
			console.log(forbid_message.slice(0, -2) + ')');
			return;
		}

		tick_number++;

		for (i = 0; i < triggers.length; i++)
			if (
				triggers[i] &&
				(triggers[i].obj === 'undefined' || triggers[i].obj == obj) &&
				(triggers[i].act === 'undefined' || triggers[i].act == act) &&
				(triggers[i].arg === 'undefined' || triggers[i].arg == arg)
			)
				act(triggers[i].response.obj, triggers[i].response.act, triggers[i].response.arg);

		var result = obj.actions[act].func(arg);
		if (result)
		{
			combat_log[tick_number] += result + '&';
			console.log(result);
		}
	}

	function Player(player, account)
	{
		var
			p = this,
			hand = [],
			library = [],
			life = STARTING_LIFE_TOTAL,
			i, j,
		varend;

		for (i in account.deck)
			for (j = 0; j < account.deck[i]; j++)
				library.push(i);

		p.name = "Player " + player;

		grant(p, "draw cards", "Base Rules", function(n){
			for (var i = 0; i < n; i++)
				hand.push(library.pop());
			return p.name + " draws " + n + " card(s).";
		});

		grant(p, "shuffle", "Base Rules", function(){
			var j, x, i;
			for (i = library.length; i; i--) {
				j = Math.floor(Math.random() * i);
				x = library[i - 1];
				library[i - 1] = library[j];
				library[j] = x;
			}
			return p.name + " shuffles their library.";
		});

		p.getUIData = function()
		{
			return {
				player: player,
				priority: priority,
				active: active,
				hand: hand,
				combat_log: combat_log
			};
		};
	}

	mtg.name = "The game";

	grant(mtg, "start", "Base Rules", function(){
		players[P1] = new Player(P1, account1);
		players[P2] = new Player(P2, account2);
		act(players[P1], "shuffle");
		act(players[P2], "shuffle");
		act(players[P1], "draw cards", STARTING_HAND_SIZE);
		act(players[P2], "draw cards", STARTING_HAND_SIZE);
		act(mtg, "change phase", MAIN_PHASE_1);
	});

	grant(mtg, "change phase", "Base Rules", function(new_phase){
		phase = new_phase;
		return "It is the " + new_phase + ".";
	});

	act(mtg, "start");

	mtg.getUIData = function()
	{
		return players[priority].getUIData();
	};
}
