var player1=prompt("Player 1 name :- ");
var player2=prompt("Player 2 name :- ");
$(".player-1> h1").text(player1);
$(".player-2> h1").text(player2);
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tic = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
var lock = [];
var count = 1;
document.addEventListener("contextmenu", function (event) {

    event.preventDefault();
    alert("don't use right click");
});

$(document).click(function (event) {

    var id = event.target.id;
    
        pressButton(id);
        checkAnswer();
        if(count==10){
            $(".player-2> h1").text(player2+" draw!");
            $(".player-1> h1").text(player1+" draw!");
            gameOver();
        }



});


function pressButton(id) {
    if (ids.includes(parseInt(id)) && !lock.includes(id)) {
        if (count % 2 == 0) {
            $("#" + id).text("O");
            tic[parseInt(id)] = "O";
            lock.push(id);
        }
        else {
            $("#" + id).text("X");
            tic[parseInt(id)] = "X";
            lock.push(id);
        }
        count++;
    }
}

function checkAnswer() {
    if ((tic[1] == "O" && tic[2] == "O" && tic[3] == "O") || (tic[4] == "O" && tic[5] == "O" && tic[6] == "O") || (tic[7] == "O" && tic[8] == "O" && tic[9] == "O") || (tic[1] == "O" && tic[4] == "O" && tic[7] == "O") || (tic[2] == "O" && tic[5] == "O" && tic[8] == "O") || (tic[3] == "O" && tic[6] == "O" && tic[9] == "O") || (tic[1] == "O" && tic[5] == "O" && tic[9] == "O") || (tic[3] == "O" && tic[5] == "O" && tic[7] == "O")) {
        $(".player-2> h1").text(player2+" win!");
        $(".player-1> h1").text(player1+" loss!");
        gameOver();
    }
    else if ((tic[3] == "X" && tic[5] == "X" && tic[7] == "X") || (tic[1] == "X" && tic[2] == "X" && tic[3] == "X") || (tic[4] == "X" && tic[5] == "X" && tic[6] == "X") || (tic[7] == "X" && tic[8] == "X" && tic[9] == "X") || (tic[1] == "X" && tic[4] == "X" && tic[7] == "X") || (tic[2] == "X" && tic[5] == "X" && tic[8] == "X") || (tic[3] == "X" && tic[6] == "X" && tic[9] == "X") || (tic[1] == "X" && tic[5] == "X" && tic[9] == "X")) {
        $(".player-2> h1").text(player2+" loss!");
        $(".player-1> h1").text(player1+" win!");
        gameOver();
    }

}

function gameOver(){
    tic.fill("0");
    lock=[];
    $("td").text(" ");
    count=1;
    setTimeout(function(){
        window.location.replace("index.html");
    },2000);

    
}
