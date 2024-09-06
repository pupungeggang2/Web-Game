function movePlayer() {
    let tempPosition = [varField.positionPlayer[0], varField.positionPlayer[1]]

    tempPosition[0] += varField.steppingMove[0]
    tempPosition[1] += varField.steppingMove[1]

    if (varKeyboard['Left'] === true) {
        tempPosition[0] += -200 * delta / 1000
    }

    if (varKeyboard['Right'] === true) {
        tempPosition[0] += 200 * delta / 1000
    }

    varField.positionPlayer[0] = tempPosition[0]
    varField.positionPlayer[1] = tempPosition[1]
}

function moveThing() {
    varField.steppingMove[0] = 0
    varField.steppingMove[1] = 0

    for (let i = 0; i < varField.field['Thing'].length; i++) {
        let tempThing = varField.field['Thing'][i]

        if (tempThing['Type'] === 'Platform') {
            let destination = tempThing['Next']

            let diff = [tempThing['Path'][destination][0] - tempThing['Position'][0], tempThing['Path'][destination][1] - tempThing['Path'][destination][1]]

            if (vectorNorm(diff) > 10) {
                let diffNormailzed = vectorNormalize(diff)

                tempThing['Position'][0] += diffNormailzed[0] * tempThing['Speed'] * delta / 1000
                tempThing['Position'][1] += diffNormailzed[1] * tempThing['Speed'] * delta / 1000

                if (i === varField.stepping) {
                    varField.steppingMove[0] = diffNormailzed[0] * tempThing['Speed'] * delta / 1000
                    varField.steppingMove[1] = diffNormailzed[1] * tempThing['Speed'] * delta / 1000
                }
            } else {
                tempThing['Next'] = (tempThing['Next'] + 1) % tempThing['Path'].length
            }
        }
    }
}