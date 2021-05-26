//var player1=prompt("Player 1 name :- ");
//var player2=prompt("Player 2 name :- ");

//$(".player-1> h1").text(player1);
//$(".player-2> h1").text(player2);

var tic = ["0","0","0","0","0","0","0","0","0"];
var win = true;
var count=0;
var choice;


$(document).click(function(event){ 
    tic[parseInt(event.target.id)]=choice;
    $("#"+event.target.id).text(choice);
    count++;
    });


