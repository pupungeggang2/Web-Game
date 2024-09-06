function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Desserterria', UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1 ])
    context.strokeRect(UI.title.buttonOption[0], UI.title.buttonOption[1], UI.title.buttonOption[2], UI.title.buttonOption[3])
    context.fillText('Option', UI.title.textOption[0], UI.title.textOption[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText('Erase', UI.title.textErase[0], UI.title.textErase[1])
    context.strokeRect(UI.title.buttonCustom[0], UI.title.buttonCustom[1], UI.title.buttonCustom[2], UI.title.buttonCustom[3])
    context.fillText('Custom', UI.title.textCustom[0], UI.title.textCustom[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Ready'
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.title.buttonErase)) {
                    eraseData()
                } else if (pointInsideRectArray(x, y, UI.title.buttonCustom)) {
                    scene = 'Game'
                    state = ''
                }
            }
        }
    }
}

function keyDownTitle(key) {

}

function keyUpTitle(key) {

}