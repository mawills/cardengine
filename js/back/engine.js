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

function unforbid(obj, name, source)
{
	if (!obj.actions[name].forbidSources[source])
		error("An illegal unforbid was attempted.");
	delete obj.actions[name].forbidSources[source];
}

function listen(trigger, response)
{
	listen.id = ++listen.id || 1;
	act.triggers[listen.id] = {obj: trigger.obj, act: trigger.act, arg:trigger.arg, response:{obj: response.obj, act:response.act, getArg:response.getArg}};
	return listen.id;
}

function unlisten(id)
{
	delete act.triggers[id];
}

function act(obj, action, arg)
{
	var i;
	if (!obj.actions[action] || !Object.getOwnPropertyNames(obj.actions[action].grantSources).length)
	{
		console.log(obj.name + " cannot " + action + ". (Not granted by any source.)");
		return false;
	}

	if (Object.getOwnPropertyNames(obj.actions[action].forbidSources).length)
	{
		var forbid_message = obj.name + " cannot " + action + ". (Forbidden by: ";
		for (i = 0; i < obj.actions[action].forbid.length; i++)
			forbid_message += obj.actions[action].forbid[i] + ', ';
		console.log(forbid_message.slice(0, -2) + ')');
		return false;
	}

	act.tick_number++;

	for (i = 0; i < act.triggers.length; i++)
		if (
			act.triggers[i] &&
			(typeof act.triggers[i].obj === 'undefined' || act.triggers[i].obj == obj) &&
			(typeof act.triggers[i].act === 'undefined' || act.triggers[i].act == action) &&
			(typeof act.triggers[i].arg === 'undefined' || act.triggers[i].arg == arg)
		)
			act(act.triggers[i].response.obj, act.triggers[i].response.act, act.triggers[i].response.getArg ? act.triggers[i].response.getArg() : undefined);

	var result = obj.actions[action].func(arg);
	if (result)
	{
		if (act.log[act.tick_number])
			error("Multiple actions on one tick.");
		act.log[act.tick_number] = result;
		console.log(result);
	}
	return true;
}

act.tick_number = 0;
act.triggers = [];
act.log = [];
