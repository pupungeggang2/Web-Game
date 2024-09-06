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
    for (let i = 0; i < varField.field['Thing'].length; i++) {
        let tempThing = varField.field['Thing'][i]

        if (tempThing['Type'] === 'Tile') {
            for (let i = 0; i < tempThing['Cell'].length; i++) {
                for (let j = 0; j < tempThing['Cell'][i].length; j++) {
                    if (tempThing['Cell'][i][j] != 0) {
                        context.strokeRect(Math.floor(tempThing['Start'][0] + j * 40 - varField.camera[0]), Math.floor(tempThing['Start'][1] + i * 40 - varField.camera[1]), 40, 40)
                    }
                }
            }
        }

        if (tempThing['Type'] === 'Wall') {
            context.fillRect(Math.floor(tempThing['Position'][0] - varField.camera[0]), Math.floor(tempThing['Position'][1] - varField.camera[1]), tempThing['Size'][0], tempThing['Size'][1])
        }

        if (tempThing['Type'] === 'Platform') {
            context.strokeRect(Math.floor(tempThing['Position'][0] - tempThing['Size'][0] / 2 - varField.camera[0]), Math.floor(tempThing['Position'][1] - tempThing['Size'][1] / 2 - varField.camera[1]), tempThing['Size'][0], tempThing['Size'][1])

            context.beginPath()
            context.moveTo(Math.floor(tempThing['Path'][0][0] - varField.camera[0]), Math.floor(tempThing['Path'][0][1] - varField.camera[1]))

            for (let j = 1; j < tempThing['Path'].length; j++) {
                context.lineTo(Math.floor(tempThing['Path'][j][0] - varField.camera[0]), Math.floor(tempThing['Path'][j][1] - varField.camera[1]))
            }

            context.stroke()
        }
    }

    context.strokeRect(Math.floor(varField.positionPlayer[0] - varField.camera[0] - 16), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 16), 32, 32)
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