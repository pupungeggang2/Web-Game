function movePlayer() {
    let tempPosition = [varField.positionPlayer[0], varField.positionPlayer[1]]

    if (varKeyboard.left === true) {
        varField.directionPlayer[0] = 'Left'
    } else if (varKeyboard.right === true) {
        varField.directionPlayer[0] = 'Right'
    } else {
        varField.directionPlayer[0] = 'None'
    }

    if (varKeyboard.up === true) {
        varField.directionPlayer[1] = 'Up'
    } else if (varKeyboard.down === true) {
        varField.directionPlayer[1] = 'Down'
    } else {
        varField.directionPlayer[1] = 'None'
    }

    if (varField.directionPlayer[0] != 'None' || varField.directionPlayer[1] != 'None') {
        varField.facingPlayer[0] = varField.directionPlayer[0]
        varField.facingPlayer[1] = varField.directionPlayer[1]
    }

    if (varField.directionPlayer[0] === 'None' || varField.directionPlayer[1] === 'None') {
        if (varField.directionPlayer[0] === 'Left') {
            tempPosition[0] += -varPlayer.speed * delta / 1000
        }
        if (varField.directionPlayer[0] === 'Right') {
            tempPosition[0] += varPlayer.speed * delta / 1000
        }
        if (varField.directionPlayer[1] === 'Up') {
            tempPosition[1] += -varPlayer.speed * delta / 1000
        }
        if (varField.directionPlayer[1] === 'Down') {
            tempPosition[1] += varPlayer.speed * delta / 1000
        }
    } else {
        if (varField.directionPlayer[0] === 'Left') {
            tempPosition[0] += -varPlayer.speed * delta / 1000 * 0.7
        }
        if (varField.directionPlayer[0] === 'Right') {
            tempPosition[0] += varPlayer.speed * delta / 1000 * 0.7
        }
        if (varField.directionPlayer[1] === 'Up') {
            tempPosition[1] += -varPlayer.speed * delta / 1000 * 0.7
        }
        if (varField.directionPlayer[1] === 'Down') {
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

function shootProjectile(position, direction, ID, side, damage) {
    let tempProjectile = JSON.parse(JSON.stringify(dataProjectile[ID]))

    tempProjectile['Position'] = [position[0], position[1]]
    tempProjectile['Direction'] = [direction[0], direction[1]]
    tempProjectile['Side'] = side
    tempProjectile['Damage'] = damage

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

function playCard(handPos) {
    let tempCard = varPlayer.hand[handPos]

    if (tempCard != null) {
        if (varPlayer.energy >= tempCard['Energy']) {
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

function useAbility() {
    if (varPlayer.energy >= varPlayer.ability['Energy'] && varPlayer.abilityReloadTime <= 0) {
        varPlayer.energy -= varPlayer.ability['Energy']
        varPlayer.abilityReloadTime = varPlayer.ability['Reload']

        for (let i = 0; i < varPlayer.ability['Effect'].length; i++) {
            processEffect(varPlayer.ability['Effect'][i])
        }
    }
}

function useDash() {
    if (varPlayer.dashReloadTime <= 0) {
        varPlayer.dashReloadTime = 2
    }
}

function reload() {
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

    if (varPlayer.abilityReloadTime > 0) {
        varPlayer.abilityReloadTime -= delta / 1000
    } else {
        varPlayer.abilityReloadTime = 0
    }

    if (varPlayer.dashReloadTime > 0) {
        varPlayer.dashReloadTime -= delta / 1000
    } else {
        varPlayer.dashReloadTime = 0
    }
}

function processEffect(effect) {
    if (effect[0] === 'Shoot') {
        let tempDirection = [0, 0]

        if (effect[1][0] === 'Line') {
            if (varField.facingPlayer[0] === 'Left') {
                tempDirection[0] = -1
            } else if (varField.facingPlayer[0] === 'Right') {
                tempDirection[0] = 1
            }
    
            if (varField.facingPlayer[1] === 'Up') {
                tempDirection[1] = -1
            } else if (varField.facingPlayer[1] === 'Down') {
                tempDirection[1] = 1
            }
    
            if (varField.facingPlayer[0] != 'None' && varField.facingPlayer[1] != 'None') {
                tempDirection[0] *= 0.7
                tempDirection[1] *= 0.7
            }

            shootProjectile(varField.positionPlayer, tempDirection, effect[1][1], 0, effect[1][2] * varPlayer.power)
        } else if (effect[1][0] === 'Follow') {
            if (varField.monster.length <= 0) {
                let angle = 2 * Math.PI * Math.random()
                tempDirection[0] = Math.cos(angle)
                tempDirection[1] = Math.sin(angle)
                shootProjectile(varField.positionPlayer, tempDirection, effect[1][1], 0, effect[1][2] * varPlayer.power)
            } else {
                let index = Math.floor(Math.random() * varField.monster.length)
                let diff = [varField.monster[index]['Position'][0] - varField.positionPlayer[0], varField.monster[index]['Position'][1] - varField.positionPlayer[1]]
                diff = vectorNormalize(diff)
                tempDirection[0] = diff[0]
                tempDirection[1] = diff[1]
                shootProjectile(varField.positionPlayer, tempDirection, effect[1][1], 0, effect[1][2] * varPlayer.power)
            }
        }
    }
}

function gameTick() {
    energyGen()
    if (varPlayer.abilityAuto === true) {
        useAbility()
    }
    movePlayer()
    handleProjectile()
    handleMonster()
    reload()
}