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

function drawBarUpper() {
    context.strokeRect(UI.edit.barUpper.rect[0], UI.edit.barUpper.rect[1], UI.edit.barUpper.rect[2], UI.edit.barUpper.rect[3])
    context.drawImage(img.icon.newFile, UI.edit.barUpper.buttonNewFile[0], UI.edit.barUpper.buttonNewFile[1])
    context.drawImage(img.icon.saveFile, UI.edit.barUpper.buttonSaveFile[0], UI.edit.barUpper.buttonSaveFile[1])
    context.drawImage(img.icon.loadFile, UI.edit.barUpper.buttonLoadFile[0], UI.edit.barUpper.buttonLoadFile[1])
}

function drawBarLeft() {
    context.strokeRect(UI.edit.barLeft.rect[0], UI.edit.barLeft.rect[1], UI.edit.barLeft.rect[2], UI.edit.barLeft.rect[3])
}

function drawBarRight() {
    context.strokeRect(UI.edit.barRight.rect[0], UI.edit.barRight.rect[1], UI.edit.barRight.rect[2], UI.edit.barRight.rect[3])
}

function drawBarLower() {
    context.strokeRect(UI.edit.barLower.rect[0], UI.edit.barLower.rect[1], UI.edit.barLower.rect[2], UI.edit.barLower.rect[3])
}