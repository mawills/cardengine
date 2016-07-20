var mtg = new Game(new UI());

function update()
{
	$("#hand").empty();
	var hand = mtg.getPlayer(P1).getHand();
	for (var i=0; i<hand.length; i++)
	{
		(function(){
			var card = hand[i];
			$("#hand").append();
		})();
	}
}

function select(card)
{

}

function getType(card)
{

}

window.onload = function()
{
	"use strict";
	update();
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