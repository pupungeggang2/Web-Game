function loadField(place) {
    varField.field = JSON.parse(JSON.stringify(dataField[place]))
}

function movePlayer() {
    let tempPosition  = [varField.positionPlayer[0], varField.positionPlayer[1]]

    if (varKeyboard.left === true) {
        tempPosition[0] += -varPlayer.speed * delta / 1000
    }
    if (varKeyboard.right === true) {
        tempPosition[0] += varPlayer.speed * delta / 1000
    }
    if (varKeyboard.up === true) {
        tempPosition[1] += -varPlayer.speed * delta / 1000
    }
    if (varKeyboard.down === true) {
        tempPosition[1] += varPlayer.speed * delta / 1000
    }

    varField.positionPlayer[0] = tempPosition[0]
    varField.positionPlayer[1] = tempPosition[1]

    let tempCamera = [varField.positionPlayer[0] - 640, varField.positionPlayer[1] - 360]

    varField.camera[0] = tempCamera[0]
    varField.camera[1] = tempCamera[1]
}