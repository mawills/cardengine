window.onload = function()
{
	"use strict";
	var account1 = {};
	account1.deck = deck1;
	var account2 = {};
	account2.deck = deck2;
	var mtg = new Game(account1, account2);
};

// Toggle between Combat Log and Exile tabs on the UI
function toggleLog(evt, tabName) {

	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = $(".tabcontent").hide();

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = $(".tablinks").removeClass("active");

	// Show the current tab, and add an "active" class to the link that opened the tab
	$("#" + tabName).css("display", "block");
	evt.currentTarget.tabName += " active";
}