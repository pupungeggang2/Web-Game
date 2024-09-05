function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.fillStyle = 'White'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawField() {

}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Paused', UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText('Resume', UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonOption[0], UI.menu.buttonOption[1], UI.menu.buttonOption[2], UI.menu.buttonOption[3])
    context.fillText('Option', UI.menu.textOption[0], UI.menu.textOption[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText('Exit to title', UI.menu.textExit[0], UI.menu.textExit[1])

    context.strokeRect(UI.menu.arrow[varSelect.menu][0], UI.menu.arrow[varSelect.menu][1], 80, 80)
}