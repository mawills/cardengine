window.onload = function()
{
	"use strict";
	var account1 = {};
	account1.deck = deck1;
	var account2 = {};
	account2.deck = deck2;
	var mtg = new Game(account1, account2);
	var ui = new UI();
	ui.display(mtg);

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
}