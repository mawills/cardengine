window.onload = function()
{
	var ui = new UI(mtg);

	var tabs = $('.tabs');
	var panels = $('.panel');

	tabs.on('click', 'li', function(e) {
		console.log('wat');
		var id = $(this).attr('data-target');

		panels.filter(':not([hidden])').attr('hidden', true);
		$(id).removeAttr('hidden');

		tabs.find('.js-current').removeClass('js-current');
		$(this).addClass('js-current');
	});

	ui.display();
}