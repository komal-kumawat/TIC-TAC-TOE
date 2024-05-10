const cells = document.querySelectorAll('[data-cell]');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let current = 'X';
start();
function start() {
    cells.forEach((cell) => {

        cell.addEventListener("click", handleClick, { once: true });
    })
}
function handleClick(event) {
   
        if (event.target.innerHTML == '')
            event.target.innerHTML = current;
        checkWin();
        checkTie();
        if (current == 'X')
            current = '0';
        else if (current == '0')
            current = 'X';
    
}

    function checkWin() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                alert(`${current} wins!`);
                restartGame();
                return;
            }
        }
    }

    function checkTie() {
        let isTie = true;
        cells.forEach((cell) => {
            if (cell.innerHTML === '') {
                isTie = false;
            }
        });
        if (isTie) {
            alert("It's a tie!");
            restartGame();
        }
    }

    const restart = document.querySelector(".Restart-button");
    restart.addEventListener("click", restartGame);
    function restartGame() {
        cells.forEach((cell) => {
            cell.innerHTML = '';
        });
    }
