const cells = document.querySelectorAll('#cell')
let currentPlayer = 'x'

startGame()

function startGame() {
    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
    })
}

function handleClick(e) {
    const cell = e.target;
    drawMark(cell);
}

function drawMark(cell) {
    if (currentPlayer === 'x') {
        cell.classList.add('x')
        currentPlayer = 'o'
    } else {
        cell.classList.add('o')
        currentPlayer = 'x'
    }
}






