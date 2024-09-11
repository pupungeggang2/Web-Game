function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Desserterria', UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game [S]', UI.title.textStart[0], UI.title.textStart[1 ])
    context.strokeRect(UI.title.buttonOption[0], UI.title.buttonOption[1], UI.title.buttonOption[2], UI.title.buttonOption[3])
    context.fillText('Option [O]', UI.title.textOption[0], UI.title.textOption[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText('Erase [E]', UI.title.textErase[0], UI.title.textErase[1])
    context.strokeRect(UI.title.buttonCustom[0], UI.title.buttonCustom[1], UI.title.buttonCustom[2], UI.title.buttonCustom[3])
    context.fillText('Custom [C]', UI.title.textCustom[0], UI.title.textCustom[1])
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
                    varSelect.gameStart = -1
                    generateDeck(startDeck)
                    varPlayer.deck = shuffle(varPlayer.deck)
                    drawCardFromDeck()
                    varField.positionPlayer = [1280, 1280]
                    spawnMonster(1400, 1400, 1)
                }
            }
        }
    }
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'S') {
                scene = 'Ready'
                state = ''
            } else if (key === 'E') {
                eraseData()
            } else if (key === 'C') {
                scene = 'Game'
                state = 'Start'
            }
        }
    }
}

function keyUpTitle(key) {

}