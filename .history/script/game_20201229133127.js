//var player1=prompt("Player 1 name :- ");
//var player2=prompt("Player 2 name :- ");

//$(".player-1> h1").text(player1);
//$(".player-2> h1").text(player2);

var tic = ["0","0","0","0","0","0","0","0","0"];
var win = true;
var i = 0;
while(i<9){
    $(document).click(function(event){
        if(parseInt(event.target.id)%2==0)
        {
            
            $("#"+event.target.id).text("O");
        }
        else{
            $("#"+event.target.id).text("X");
        }
    });
    i++;
}


