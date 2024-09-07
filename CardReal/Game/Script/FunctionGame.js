function movePlayer() {
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
}