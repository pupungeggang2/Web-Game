function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Mine Adventure', UI.title.textTitle[0], UI.title.textTitle[1])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    context.fillText('Options', UI.title.textOption[0], UI.title.textOption[1])
    context.fillText('Erase Data', UI.title.textErase[0], UI.title.textErase[1])

    context.strokeRect(UI.title.arrow[varSelect.title][0], UI.title.arrow[varSelect.title][1], 80, 80)
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'ArrowDown') {
                varSelect.title = (varSelect.title + 4) % 3
            } else if (key === 'ArrowUp') {
                varSelect.title = (varSelect.title + 2) % 3
            }

            if (key === 'Enter') {
                if (varSelect.title === 0) {
                    scene = 'Game'
                    state = ''
                    loadField(varSave.place)
                    varField.positionPlayer[0] = varField.field['Spawn'][0]
                    varField.positionPlayer[1] = varField.field['Spawn'][1]
                } else if (varSelect.title === 2) {
                    eraseData()
                }
            }
        }
    }
}

function keyUpTitle(key) {

}