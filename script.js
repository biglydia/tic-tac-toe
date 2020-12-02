const cellArray = Array.from(document.querySelectorAll('#cell'))
const gameOverModal = document.getElementById('game_over_modal')
let winnerText = document.getElementById('winner_text')
let restartButton = document.getElementById('new_game_button')
let currentPlayer = 'x'
let currentPlayerText = document.getElementById('current_player_header')

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

startGame()

function startGame() {
    currentPlayerText.innerText = `Player ${currentPlayer}\'s turn`
    cellArray.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
        cell.addEventListener('mouseover', handleMouseover)
    })
}

function handleMouseover(e) {
    const cell = e.target;
    shadowMark(cell);
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

function switchPlayer() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o'
    } else {
        currentPlayer = 'x'
    }
}

function handleClick(e) {
    const cell = e.target;
    drawMark(cell, gameOverModal);
    currentPlayerText.innerText = `Player ${currentPlayer}\'s turn`
}

function drawMark(cell, gameOverModal) {
    if (currentPlayer === 'x') {
        cell.classList.remove('xhover')
        cell.classList.add('x')
    } else {
        cell.classList.remove('ohover')
        cell.classList.add('o')
    }
    if (checkWin()) {
        console.log(currentPlayer + ' wins!')
        gameOverModal.style.display = 'flex'
        currentPlayer = currentPlayer.toUpperCase()
        winnerText.innerText = `Player ${currentPlayer} wins!`
    } else if (isDraw()) {
            gameOverModal.style.display = 'flex'
            winnerText.innerText = `A draw! Nobody wins!`
    }
    switchPlayer()
}

function checkWin() {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return cellArray[index].classList.contains(currentPlayer)
        })
    })
}

function isDraw() {
    return cellArray.every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o')
    })
}

restartButton.onclick = function() {
    cellArray.forEach(cell => {
        cell.classList.remove('x')
        cell.classList.remove('o')
        gameOverModal.style.display = 'none';
    })
    startGame()
}



// function checkWin() {
//     var playerCombo = []
//     cellArray.forEach(cell => {
//         if (cell.classList.contains(currentPlayer)) {
//             playerCombo.push(cellArray.indexOf(cell))
//         }
//     })











