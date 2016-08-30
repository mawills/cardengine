window.onload = function()
{
	var ui = new UI(mtg, P1);
	new UI(mtg, P2).connect(); // temporary while doing both uis on one display

	var tabs = $('.tabs');
	var panels = $('.panel');

	tabs.on('click', 'li', function(e) {
		var id = $(this).attr('data-target');

		panels.filter(':not([hidden])').attr('hidden', true);
		$(id).removeAttr('hidden');

		tabs.find('.js-current').removeClass('js-current');
		$(this).addClass('js-current');
	});

	ui.connect();
}