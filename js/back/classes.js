function Game(account1, account2)
{
	"use strict";

	var
		mtg = this,
		priority = NO_PLAYER,
		active = NO_PLAYER,
		players = {},
		stack = [],
		phase = PREGAME_PHASE,
		combat_log = [],
		tick_number = 0,
		triggers = [],
		i;

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

		if (!func && !obj.actions[name].func)
			error("A grant was attempted with no action method.");

		if (func)
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

	function listen(trigger, response)
	{
		listen.id = ++listen.id || 1;
		triggers[listen.id] = {obj: trigger.obj, act: trigger.act, arg:trigger.arg, response:{obj: response.obj, act:response.act, arg:response.arg}};
		return listen.id;
	}

	function unlisten(id)
	{
		delete triggers[id];
	}

	function act(obj, action, arg)
	{
		var i;
		if (!obj.actions[action] || !Object.getOwnPropertyNames(obj.actions[action].grantSources).length)
		{
			console.log(obj.name + " cannot " + action + ". (Not granted by any source.)");
			return;
		}

		if (Object.getOwnPropertyNames(obj.actions[action].forbidSources).length)
		{
			var forbid_message = obj.name + " cannot " + action + ". (Forbidden by: ";
			for (i = 0; i < obj.actions[action].forbid.length; i++)
				forbid_message += obj.actions[action].forbid[i] + ', ';
			console.log(forbid_message.slice(0, -2) + ')');
			return;
		}

		tick_number++;

		for (i = 0; i < triggers.length; i++)
			if (
				triggers[i] &&
				(typeof triggers[i].obj === 'undefined' || triggers[i].obj == obj) &&
				(typeof triggers[i].act === 'undefined' || triggers[i].act == action) &&
				(typeof triggers[i].arg === 'undefined' || triggers[i].arg == arg)
			)
				act(triggers[i].response.obj, triggers[i].response.act, triggers[i].response.arg);

		var result = obj.actions[action].func(arg);
		if (result)
		{
			combat_log[tick_number] += result + '&';
			console.log(result);
		}
	}

	function Player(player, account)
	{
		var	p = this, i, j;
		p.hand = [];
		p.library = [];
		p.life = STARTING_LIFE_TOTAL;
		p.poison = 0;
		p.opponent = (player == P1 ? P2 : P1);
		p.lost = false;
		p.won = false;
		p.empty_draw;

		for (i in account.deck)
			for (j = 0; j < account.deck[i]; j++)
				p.library.push(i);

		p.name = "Player " + player;

		p.getUIData = function()
		{
			return {
				hand: p.hand,
				life: p.life,
				actions: Object.getOwnPropertyNames(p.actions),
				player: player,
				priority: priority,
				active: active,
				combat_log: combat_log,
			};
		};
	}

	mtg.name = "The game";

	var GAME_SOURCE = "Base Rules";

	players[P1] = new Player(P1, account1);
	players[P2] = new Player(P2, account2);

	grant(mtg, "check state", GAME_SOURCE, function(){
		for (var p of [players[P1], players[P2]])
		{
			if (
				p.life <= 0 ||
				p.empty_draw ||
				p.poison >= 10
			)
				p.lost = true;
		}
	});

	grant(mtg, "change phase", GAME_SOURCE, function(new_phase){
		phase = new_phase;
		return "It is the " + new_phase + ".";
	});

	grant(mtg, "assign priority", GAME_SOURCE, function(player_id){
		priority = player_id;
		grant(players[player_id], "pass priority", GAME_SOURCE);
		ungrant(players[players[player_id].opponent], "pass priority", GAME_SOURCE);
	});

	for (i of [players[P1], players[P2]])
	{
		(function(){
			var p = i;

			grant(p, "draw cards", GAME_SOURCE, function(n){
				for (var i = 0; i < n; i++)
				{
					if (!p.library.length)
					{
						n = i;
						p.empty_draw = true;
					}
					else
						p.hand.push(p.library.pop());
				}
				return p.name + " draws " + n + " card(s).";
			});

			grant(p, "shuffle", GAME_SOURCE, function(){
				var j, x, i;
				for (i = p.library.length; i; i--) {
					j = Math.floor(Math.random() * i);
					x = p.library[i - 1];
					p.library[i - 1] = p.library[j];
					p.library[j] = x;
				}
				return p.name + " shuffles their library.";
			});

			grant(p, "pass priority", GAME_SOURCE, function(){
				act(mtg, "assign priority", p.opponent);
			});
		})();
	}
	active = P1;

	listen(
		{obj: mtg, act: "change phase"},
		{obj: mtg, act: "assign priority", arg: active}
	);

	listen(
		{obj: mtg, act: "assign priority"},
		{obj: mtg, act: "check state"}
	);

	for (i of [players[P1], players[P2]])
	{
		act(i, "shuffle");
		act(i, "draw cards", STARTING_HAND_SIZE);
		ungrant(i, "shuffle", GAME_SOURCE);
		ungrant(i, "draw cards", GAME_SOURCE);
	}
	act(mtg, "change phase", MAIN_PHASE_1);

	mtg.getUIData = function()
	{
		return players[priority].getUIData();
	};
}
