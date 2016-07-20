var mtg = new Game();

function update()
{
	var hand = mtg.getPlayer(P1).getHand();
	for (var i=0; i<hand.length; i++)
	{
		$("#hand").append($("<img>",{ class: "card", src: 'res/img/cards/' + hand[i] + ".jpg"}));
	}
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
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.tabName += " active";
}