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

function fieldInteract() {
    for (let i = 0; i < varField.field['Connection'].length; i++) {
        if (pointInsideRectArray(varField.positionPlayer[0], varField.positionPlayer[1], varField.field['Connection'][i][0])) {
            varField.destinationPlace = varField.field['Connection'][i][1]
            varField.destinationPosition[0] = varField.field['Connection'][i][2][0]
            varField.destinationPosition[1] = varField.field['Connection'][i][2][1]
        
            if (dataField[varField.destinationPlace]['Village'] === false && varAdventure.adventure === false) {
                state = 'AdventureStartConfirm'
            } else if (dataField[varField.destinationPlace]['Village'] === true && varAdventure.adventure === true) {
                state = 'AdventureEndConfirm'
            } else {
                varField.positionPlayer[0] = varField.destinationPosition[0]
                varField.positionPlayer[1] = varField.destinationPosition[1]
                varField.place = varField.destinationPlace
                loadField(varField.place)
            }

            break
        }
    }
}

function adventureStart() {
    varAdventure.adventure = true
    varField.place = varField.destinationPlace
    loadField(varField.place)
    varField.positionPlayer[0] = varField.destinationPosition[0]
    varField.positionPlayer[1] = varField.destinationPosition[1]
    varSelect.adventureStart = -1
}

function adventureEnd() {
    varAdventure.adventure = false
    varField.place = varField.destinationPlace
    loadField(varField.place)
    varField.positionPlayer[0] = varField.destinationPosition[0]
    varField.positionPlayer[1] = varField.destinationPosition[1]
}