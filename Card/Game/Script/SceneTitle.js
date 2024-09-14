function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()
    context.fillText('Desserterria', UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game [S]', UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonOption[0], UI.title.buttonOption[1], UI.title.buttonOption[2], UI.title.buttonOption[3])
    context.fillText('Option [O]', UI.title.textOption[0], UI.title.textOption[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText('Erase Data [E]', UI.title.textErase[0], UI.title.textErase[1])
    context.strokeRect(UI.title.buttonDebug[0], UI.title.buttonDebug[1], UI.title.buttonDebug[2], UI.title.buttonDebug[3])
    context.fillText('Debug Mode [D]', UI.title.textDebug[0], UI.title.textDebug[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Field'
                    state = ''
                    varField.place = varSave['Place']
                    loadField(varField.place)
                    varField.positionPlayer = [varField.field['Spawn'][0], varField.field['Spawn'][1]]
                } else if (pointInsideRectArray(x, y, UI.title.buttonErase)) {
                    eraseData()
                } else if (pointInsideRectArray(x, y, UI.title.buttonDebug)) {
                    scene = 'Game'
                    state = 'Start'
                    gameInit()
                    debugDeckGenerate()
                }
            }
        }
    }
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 's') {
                scene = 'Field'
                state = ''
            } else if (key === 'e') {
                eraseData()
            } else if (key === 'd') {
                scene = 'Game'
                state = 'Start'
            }
        }
    }
}

function keyUpTitle(key) {
    
}