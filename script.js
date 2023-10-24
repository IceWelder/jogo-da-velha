var jogador = "1";

function play(cell){

    if(cell.innerHTML === ""){
        cell.innerHTML = jogador;
    }
    
    if(jogador == "1"){
       jogador = "0"; 

    } else{
        jogador = "1"
    }

}












