function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Paused`, UI.menu.textPaused[0], UI.menu.textPaused[1], UI.menu.textPaused[2], UI.menu.textPaused[3])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText(`Resume [R]`, UI.menu.textResume[0], UI.menu.textResume[1], UI.menu.textResume[2], UI.menu.textResume[3])
    context.strokeRect(UI.menu.buttonOption[0], UI.menu.buttonOption[1], UI.menu.buttonOption[2], UI.menu.buttonOption[3])
    context.fillText(`Option [O]`, UI.menu.textOption[0], UI.menu.textOption[1], UI.menu.textOption[2], UI.menu.textOption[3])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText(`Exit [E]`, UI.menu.textExit[0], UI.menu.textExit[1], UI.menu.textExit[2], UI.menu.textExit[3])
}

function drawField() {
    context.strokeRect(Math.floor(varField.positionPlayer[0] - varField.camera[0] - 20), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 20), 40, 40)

    for (let i = 0; i < varField.field['Connection'].length; i++) {
        context.strokeRect(Math.floor(varField.field['Connection'][i][0][0] - varField.camera[0]), Math.floor(varField.field['Connection'][i][0][1] - varField.camera[1]), varField.field['Connection'][i][0][2], varField.field['Connection'][i][0][3])
    }
}

function drawGameStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.strokeRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.fillStyle = 'Black'

    if (state === 'Start') {
        context.fillText(`Select cards to change`, UI.game.start.textTitle[0], UI.game.start.textTitle[1])
    } else if (state === 'StartConfirm') {
        context.fillText(`Confirm`, UI.game.start.textTitle[0], UI.game.start.textTitle[1])
    }

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.game.start.buttonSelect[i][0], UI.game.start.buttonSelect[i][1], UI.game.start.buttonSelect[i][2], UI.game.start.buttonSelect[i][3])
    }

    if (state === 'Start') {
        context.strokeStyle = 'Green'
        for (let i = 0; i < 3; i++) {
            if (varGame.startHandChange[i] === true) {
                context.strokeRect(UI.game.start.buttonSelect[i][0], UI.game.start.buttonSelect[i][1], UI.game.start.buttonSelect[i][2], UI.game.start.buttonSelect[i][3])
            }
        }
        context.strokeStyle = 'Black'
    }

    context.strokeRect(UI.game.start.buttonStart[0], UI.game.start.buttonStart[1], UI.game.start.buttonStart[2], UI.game.start.buttonStart[3])

    if (state === 'Start') {
        context.fillText(`Change Card`, UI.game.start.textStart[0], UI.game.start.textStart[1])
    } else if (state === 'StartConfirm') {
        context.fillText(`Start`, UI.game.start.textStart[0], UI.game.start.textStart[1])
    }
}