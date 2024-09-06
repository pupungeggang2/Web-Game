function loopGame() {
    displayGame()

    if (menu === false) {
        if (state === '') {
            movePlayer()
            moveThing()
        }
    }
}

function displayGame() {
    drawSceneInit()

    drawField()

    if (menu === true) {
        drawMenu()
    }
}

function keyDownGame(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
            varSelect.menu = 0
        }
        if (state === '') {

        }
    } else if (menu === true) {
        if (key === 'Escape') {
            menu = false
        }

        if (key === 'ArrowUp') {
            varSelect.menu = (varSelect.menu + 2) % 3
        } else if (key === 'ArrowDown') {
            varSelect.menu = (varSelect.menu + 4) % 3
        }

        if (key === 'Enter') {
            if (varSelect.menu === 0) {
                menu = false
            } else if (varSelect.menu === 1) {
                option = true
            } else if (varSelect.menu === 2) {
                menu = false
                scene = 'Title'
                state = ''
                varSelect.title = 0
            }
        }
    }
}

function keyUpGame(key) {

}