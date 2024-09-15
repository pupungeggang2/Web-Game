function loopField() {
    displayField()

    if (menu === false) {
        if (state === '') {
            movePlayer()
        }
    }
}

function displayField() {
    drawSceneInit()

    drawField()

    context.strokeRect(UI.field.buttonMenu[0], UI.field.buttonMenu[1], UI.field.buttonMenu[2], UI.field.buttonMenu[3])

    if (state === 'AdventureStartConfirm' || state === 'AdventureEndConfirm') {
        drawAdventureConfirm()
    }

    if (state === 'AdventureStart') {
        drawAdventureStart()
    }

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpField(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.field.buttonMenu)) {
                menu = true
            }
            if (state === '') {
            } else if (state === 'AdventureStartConfirm' || state === 'AdventureEndConfirm') {
                if (pointInsideRectArray(x, y, UI.field.adventureConfirm.buttonYes)) {
                    if (state === 'AdventureStartConfirm') {
                        adventureStart()
                        state = 'AdventureStart'
                    } else if (state === 'AdventureEndConfirm') {
                        adventureEnd()
                        state = ''
                    }
                } else if (pointInsideRectArray(x, y, UI.field.adventureConfirm.buttonNo)) {
                    state = ''
                }
            } else if (state === 'AdventureStart') {
                for (let i = 0; i < 3; i++) {
                    if (pointInsideRectArray(x, y, UI.field.adventureStart.buttonSelect[i])) {
                        varSelect.adventureStart = i
                    }
                }

                if (pointInsideRectArray(x, y, UI.field.adventureStart.buttonStart)) {
                    if (varSelect.adventureStart != -1) {
                        state = ''
                    }
                }
            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.field.buttonMenu) || pointInsideRectArray(x, y, UI.menu.buttonResume)) {
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

function keyDownField(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
        }

        if (state === '') {
            if (key === 'e') {
                fieldInteract()
            }
        } else if (state === 'AdventureStartConfirm' || state === 'AdventureEndConfirm') {
            if (key === 'y') {
                if (state === 'AdventureStartConfirm') {
                    adventureStart()
                    state = 'AdventureStart'
                } else if (state === 'AdventureEndConfirm') {
                    adventureEnd()
                    state = ''
                }
            } else if (key === 'n') {
                state = ''
            }
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

function keyUpField(key) {

}