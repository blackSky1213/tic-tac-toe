//var player1=prompt("Player 1 name :- ");
//var player2=prompt("Player 2 name :- ");

//$(".player-1> h1").text(player1);
//$(".player-2> h1").text(player2);
var ids=[1,2,3,4,5,6,7,8,9];
var tic = ["0","0","0","0","0","0","0","0","0"];
var win = true;
var count=0;
var choice;
var count=0;
$(document).click(function(event)
{
    count++;
    var id=event.target.id;
    pressbutton(id);
});

function pressButton(id){
    if(ids.includes(parseInt(id)))
    {
        $("#"+id).
    }
}