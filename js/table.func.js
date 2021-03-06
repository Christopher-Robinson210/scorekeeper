
let players = []; //list of players
var round = 1;
var scoreAdded = [];
var addrow = false;
let scoretable = [...Array(1)].map(e => Array(1)); // Y X
let sums = new Array();
var thead = '<thead><tr style= "font-weight: bold" >';
var tbody ='<tbody><tr style= "font-weight: normal">';
var tfoot = '<tfoot><tr style="font-weight: normal">';

function createTable(){
    // @Todo
    var x = 0;
    var getPlayers = [];
    getPlayers = addPlayers();
        getPlayers.forEach(function(getPlayers){
            players[x] = getPlayers;
            scoretable[0][x] = 0;
            scoreAdded[x] = "";
            sums[x] = 0;
        x++;
        });
        drawTable();
}

function drawTable(){
    let totals = new Array(players.length);
    header = thead + "<td>Round</td>";
    body = tbody+ "<td>" +round+ "</td>";
    footer = tfoot + "<td></td>";
    table = "";
    
    vert = scoretable.length;

    //player names / headers for table
    players.forEach(function(players){
       header +="<td>" +players+ "</td>"; 
    });

    //table
    if (scoretable.length > 0){
        for(y = 0; y < scoretable.length; y++){
            for(x=0; x < scoretable[0].length; x++){   
                        body += "<td>" +scoretable[y][x]+ "</td>";
                        
            }
            
            if (!(y == scoretable.length-1)){
                body+="</tr>";
                body+="<tr><td>"+(y+2)+"</td>";
            }
           
        }
        sumCol();
        for (d=0;d<players.length;d++){
            footer += '<td><button type="button" data-col="' +d+ '" class="btn btn-primary" onclick="addScore(this)">Score</button></td>';
        }
        footer += '</tr><tr style="font-weight: bold"><td>Score:</td>';
        for (i=0;i < players.length;i++){
                footer += "<td>" +sums[i]+ "</td>";
        }
    
    
    header += "</tr></thead>";
    body += "</tr></tbody>";
    footer += "</tr></tfoot>";
    table += header;
    table += body;
    table += footer;
    document.getElementById('scoreboard').innerHTML = table.trim();
    }
}

function addRow(){
    tmp = scoretable;
        scoretable = [...Array(tmp.length+1)].map(e => Array(tmp[0].length));
        for(i=0;i<tmp.length;i++)
            for(j=0;j<tmp[0].length;j++)
                scoretable[i][j]=tmp[i][j];
        
        for (i=0; i < scoretable[0].length;i++)
            scoretable[scoretable.length-1][i] = 0;
}

function addPlayers(){
    var doAdd = false;
    var numPlayers = 0;
    if (confirm("Would you like to add players?")){
        do{
        numPlayers = parseInt(prompt("How many players?", ""));
        if (numPlayers > 0)
            doAdd = true;
        }while(doAdd == false);
        var playerList = [];    
        for (i =0; i < numPlayers; i++){
            playerList[i] = prompt("Player Name", );
        }
        return playerList;
    }
    else {
        if (confirm("Is Dad playing?"))
            return defaultPlayers(true);
        else
        return defaultPlayers(false);
    }
    
    return playerList;
}

//for testing
function defaultPlayers(dadPlaying){
    if (dadPlaying)
        players = ["Mom", "Abbie", "Pat", "Chris", "Dad"];
    else
        players = ["Mom", "Abbie", "Pat", "Chris"];
    return players;
}

function addScore(data){
    //get the column attribute from data
    col = parseInt(data.getAttribute("data-col"));
   
    //Loop until score given is a number
    do{
        if (players[col].slice(-1) != "s"){
            score = parseInt(prompt(players[col] + "'s score:"));
        }
        else{
            score = parseInt(prompt(players[col] + "' score:"));   
        }
    }while(isNaN(score));
    //set the player to "score added" this round
    scoreAdded[col] = 1;
    //prevents error if scoretable has no rows (length of 0)
    if(scoretable.length >= 1)
        scoretable[scoretable.length-1][col] = score;
    //check if all players have played and add row as needed
    if (allScoresAdded(scoreAdded) == true){
        addRow();
        clearScoresAdded(scoreAdded);
    }
    drawTable();
}
//simple function to check that all players have played
function allScoresAdded(list){
    sum = 0;
    for (i=0; i < list.length;i++)
        sum += list[i];
    if (sum == list.length){
        return true;
    }
    else{
        return false;
    }
}

function clearScoresAdded(list){
    for (i=0; i < list.length;i++)
        list[i] = 0;
}
//calculate total score of each player
function sumCol(){
    y = scoretable.length;
    sum=0;
    
    for (j=0; j<players.length;j++){
        for (i = 0; i < y; i++){
                    if(!(parseInt(scoretable[i][j] == NaN)))
                        if(!(+typeof parseInt(scoretable[i][j]) == NaN) && !(scoretable[i][j] == ""))   //this if statement may be redundant
                        sum+=parseInt(scoretable[i][j]);

        }
       
        sums[j] = sum;
        sum=0;
    }
    
}

function clearScore(){
    x = 0;
    scoretable.splice(0,scoretable.length-1);
    for (i=0; i < scoretable[0].length;i++){
        scoretable[0][i] = 0;
    }

    clearScoresAdded(scoreAdded);
    drawTable();
    // players.forEach(function(){
    //     scoretable[0][x] = 0;
    //     x++;
    // });
}

function newGame(){
    document.getElementById('newgamelink').hidden = true;
    document.getElementById('endgamelink').hidden = false;
    players.splice(0, players.length);
    scoretable.splice(0, scoretable.length-1);
    scoretable[0].splice(0, scoretable[0].length);
    createTable();
}

function endGame(){
//sumCol();
alert(winner());
clearScore();

}

function winner(){
    most = parseInt(sums[0]);
    temp = 0;
    result = "";
    for (j=1; j<sums.length; j++){
        if (parseInt(sums[j]) > parseInt(most)){
            most = parseInt(sums[j]);
            temp = j;
        }
    }
    //temporary 
    return "The Winner is " +players[temp];

}
