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

// Objects

function spawnMonster(x, y, ID) {
    let tempMonster = JSON.parse(JSON.stringify(dataMonster[ID]))

    tempMonster['LifeMax'] = tempMonster['Life']
    tempMonster['Position'] = [x, y]

    varField.monster.push(tempMonster)
}

function handleMonster() {

}

function shootProjectile(position, direction, ID, side) {
    let tempProjectile = JSON.parse(JSON.stringify(dataProjectile[ID]))

    tempProjectile['Position'] = [position[0], position[1]]
    tempProjectile['Direction'] = [direction[0], direction[1]]
    tempProjectile['Side'] = side

    varField.projectile.push(tempProjectile)
}

function handleProjectile() {
    let i = 0

    while (i < varField.projectile.length) {
        let projectile = varField.projectile[i]

        if (projectile['Lifetime'] < 0) {
            varField.projectile.splice(i, 1)
            continue
        }

        projectile['Position'][0] += projectile['Direction'][0] * projectile['Speed'] * delta / 1000
        projectile['Position'][1] += projectile['Direction'][1] * projectile['Speed'] * delta / 1000
        i += 1

        projectile['Lifetime'] -= delta / 1000
    }
}

function handleProjectileCollision() {

}

// Card, Stat

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
                varPlayer.handReloadTime[i] = 8
                break
            }
        }
    }
}

function reloadCard() {
    for (let i = 0; i < 6; i++) {
        if (varPlayer.hand[i] === null) {
            if (varPlayer.handReloadTime[i] < 0) {
                if (varPlayer.deck.length > 0) {
                    varPlayer.hand[i] = varPlayer.deck.shift()
                    varPlayer.handReloadTime[i] = 8
                }
            } else {
                varPlayer.handReloadTime[i] -= delta / 1000
            }
        }
    }
}

function playCard(handPos) {
    let tempCard = varPlayer.hand[handPos]

    if (tempCard != null) {
        if (varPlayer.energy > tempCard['Energy']) {
            varPlayer.energy -= tempCard['Energy']
            varPlayer.deck.push(tempCard)
            varPlayer.hand[handPos] = null
            varPlayer.handReloadTime[handPos] = 8
        }
    }
}

function energyGen() {
    if (varPlayer.energy + varPlayer.energyGen * delta / 1000 > varPlayer.energyMax) {
        varPlayer.energy = varPlayer.energyMax
    } else {
        varPlayer.energy += varPlayer.energyGen * delta / 1000
    }
}