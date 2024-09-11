function movePlayer() {
    let tempPosition = [varField.positionPlayer[0], varField.positionPlayer[1]]

    if (varKeyboard.left === true) {
        varField.facingPlayer[0] = 'Left'
        varField.directionPlayer[0] = 'Left'
    } else if (varKeyboard.right === true) {
        varField.facingPlayer[0] = 'Right'
        varField.directionPlayer[0] = 'Right'
    } else {
        varField.facingPlayer[0] = 'None'
    }

    if (varKeyboard.up === true) {
        varField.facingPlayer[1] = 'Up'
        varField.directionPlayer[1] = 'Up'
    } else if (varKeyboard.down === true) {
        varField.facingPlayer[1] = 'Down'
        varField.directionPlayer[1] = 'Down'
    } else {
        varField.facingPlayer[1] = 'None'
    }

    if (varField.facingPlayer[0] === 'None' || varField.facingPlayer[1] === 'None') {
        if (varField.facingPlayer[0] === 'Left') {
            tempPosition[0] += -varPlayer.speed * delta / 1000
        }
        if (varField.facingPlayer[0] === 'Right') {
            tempPosition[0] += varPlayer.speed * delta / 1000
        }
        if (varField.facingPlayer[1] === 'Up') {
            tempPosition[1] += -varPlayer.speed * delta / 1000
        }
        if (varField.facingPlayer[1] === 'Down') {
            tempPosition[1] += varPlayer.speed * delta / 1000
        }
    } else {
        if (varField.facingPlayer[0] === 'Left') {
            tempPosition[0] += -varPlayer.speed * delta / 1000 * 0.7
        }
        if (varField.facingPlayer[0] === 'Right') {
            tempPosition[0] += varPlayer.speed * delta / 1000 * 0.7
        }
        if (varField.facingPlayer[1] === 'Up') {
            tempPosition[1] += -varPlayer.speed * delta / 1000 * 0.7
        }
        if (varField.facingPlayer[1] === 'Down') {
            tempPosition[1] += varPlayer.speed * delta / 1000 * 0.7
        }
    }

    varField.positionPlayer[0] = tempPosition[0]
    varField.positionPlayer[1] = tempPosition[1]

    let tempCamera = [varField.positionPlayer[0] - 640, varField.positionPlayer[1] - 320]
    
    if (tempCamera[0] < 0) {
        tempCamera[0] = 0
    } else if (tempCamera[0] > 1920) {
        tempCamera[0] = 1920
    }

    if (tempCamera[1] < 0) {
        tempCamera[1] = 0
    } else if (tempCamera[1] > 2240) {
        tempCamera[1] = 2240
    }

    varField.camera[0] = tempCamera[0]
    varField.camera[1] = tempCamera[1]
}

function moveProjectile() {

}

function spawnMonster(x, y, ID) {
    let tempMonster = JSON.parse(JSON.stringify(dataMonster[ID]))

    tempMonster['LifeMax'] = tempMonster['Life']
    tempMonster['Position'] = [x, y]

    varField.monster.push(tempMonster)
}

function shootProjectile(ID) {
    let tempProjectile = JSON.parse(JSON.stringify(dataProjectile[ID]))

    tempProjectile['Position'] = [varField.positionPlayer[0], varField.positionPlayer[1]]

    varField.projectile.push(tempProjectile)
}

function generateDeck(deck) {
    varPlayer.deck = []

    for (let i = 0; i < deck.length; i++) {
        varPlayer.deck.push(JSON.parse(JSON.stringify(dataCard[deck[i]])))
    }
}

function shuffle(arr) {
    let tempArr = JSON.parse(JSON.stringify(arr))
    let resultArr = []

    while (tempArr.length > 0) {
        let index = Math.floor(Math.random() * tempArr.length)
        resultArr.push(tempArr.splice(index, 1)[0])
    }

    return resultArr
}

function drawCardFromDeck() {
    if (varPlayer.deck.length > 0) {
        for (let i = 0; i < 6; i++) {
            if (varPlayer.hand[i] === null) {
                varPlayer.hand[i] = varPlayer.deck.shift()
                break
            }
        }
    }
}