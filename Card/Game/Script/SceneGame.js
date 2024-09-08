function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3])

    if (state === 'Start') {
        drawGameStart()
    }

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                menu = true
            }

            if (state === '') {

            } else if (state === 'Start') {

            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume) || pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonOption)) {

            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                menu = false
                scene = 'Title'
                state = ''
            }
        }
    }
}

function keyDownGame(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
        }
    } else if (menu === true) {
        if (key === 'Escape' || key === 'r') {
            menu = true
        } else if (key === 'o') {

        } else if (key === 'e') {
            menu = false
            scene = 'Title'
            state = ''
        }
    }
}

function keyUpGame(key) {

}