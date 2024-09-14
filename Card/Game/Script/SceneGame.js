function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3])

    if (state === 'Start' || state === 'StartConfirm') {
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
                for (let i = 0; i < 3; i++) {
                    if (pointInsideRectArray(x, y, UI.game.start.buttonSelect[i])) {
                        if (varGame.startHandChange[i] === true) {
                            varGame.startHandChange[i] = false
                        } else {
                            varGame.startHandChange[i] = true
                        }
                    }
                }

                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = 'StartConfirm'
                }
            } else if (state === 'StartConfirm') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = ''
                }
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
            menu = false
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