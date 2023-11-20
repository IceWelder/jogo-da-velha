let jogador = "x";

// Function to render the current state of the game
function render() {
    // Implement your rendering logic here.
    // For example, you might update the UI to reflect the current state of the game.
}

function play(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = jogador;
        render(); // Call the render function after a move is made.
    } else {
        return;
    }

    // Switch players for the next turn.
    if (jogador == "x") {
        jogador = "o";
    } else {
        jogador = "x";
    }
}
