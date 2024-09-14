function loopGame() {
    displayGame()

    if (menu === false) {
        if (state === '') {
            gameTick()
        }
    }
}

function displayGame() {
    drawSceneInit()

    drawField()
    drawGameLower()
    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3])

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
                if (pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                    menu = true
                } else if (pointInsideRectArray(x, y, UI.game.fieldArea)) {

                } else if (pointInsideRectArray(x, y, UI.game.lowerArea)) {

                }
            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.game.buttonMenu) || pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
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

        if (state === '') {
            for (let i = 0; i < handKeyMap.length; i++) {
                if (key === handKeyMap[i]) {
                    playCard(i)
                }
            }

            if (key === '1') {
                useAbility()
            }
            if (key === '2') {
                useDash()
            }
        }
    } else if (menu === true) {
        if (key === 'Escape' || key === 'R') {
            menu = false
        } else if (key === 'E') {
            menu = false
            scene = 'Title'
            state = ''
        }
    }
}

function keyUpGame(key) {

}