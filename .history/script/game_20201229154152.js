//var player1=prompt("Player 1 name :- ");
//var player2=prompt("Player 2 name :- ");

//$(".player-1> h1").text(player1);
//$(".player-2> h1").text(player2);
var ids=[1,2,3,4,5,6,7,8,9];
var tic = ["0","0","0","0","0","0","0","0","0"];
var lock=[];
var win = false;
var count=0;
var choice;
var count=0;
document.addEventListener("contextmenu",function(event){

    event.preventDefault();
    alert("don't use right click");
});

$(document).click(function(event)
{
   
    var id=event.target.id;
    pressButton(id);
    checkAnswer();
});

function pressButton(id){
    if(ids.includes(parseInt(id))&&!lock.includes(id))
    {
        if(count%2==0)
        {
            $("#"+id).text("O");
            tic[parseInt(id)]="O";
            lock.push(id);
        }
        else{
            $("#"+id).text("X");
            tic[parseInt(id)]="X";
            lock.push(id);
        }
        count++;   
    }
}

function checkAnswer(){
    if((tic[0]==tic[1]==tic[2])
    
}