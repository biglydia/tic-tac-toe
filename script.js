const cells = document.querySelectorAll('#cell')
let currentPlayer = 'x'

startGame()

function startGame() {
    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
        cell.addEventListener('mouseover', handleMouseover)
    })
}

function handleClick(e) {
    const cell = e.target;
    drawMark(cell);
}

function handleMouseover(e) {
    const cell = e.target;
    shadowMark(cell);
}

function drawMark(cell) {
    if (currentPlayer === 'x') {
        cell.classList.remove('xhover')
        cell.classList.add('x')
        currentPlayer = 'o'
    } else {
        cell.classList.remove('ohover')
        cell.classList.add('o')
        currentPlayer = 'x'
    }
    checkWin()
}

function shadowMark(cell) {
    if (currentPlayer === 'x' && !cell.classList.contains('x') && !cell.classList.contains('o')) {
        cell.classList.remove('ohover')
        cell.classList.add('xhover')
    } else if (currentPlayer === 'o' && !cell.classList.contains('x') && !cell.classList.contains('o')) {
        cell.classList.remove('xhover')
        cell.classList.add('ohover')
    }
}

function checkWin() {
}






