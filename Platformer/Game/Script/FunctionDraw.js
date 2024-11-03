function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function drawLevel() {
    context.lineWidth = 4
    for (l in data.levelMapLine) {
        let tempLine = data.levelMapLine[l]
        context.beginPath()
        context.moveTo(tempLine[0][0] + 20, tempLine[0][1] + 20)
        for (let j = 1; j < tempLine.length; j++) {
            context.lineTo(tempLine[j][0] + 20, tempLine[j][1] + 20)
        }
        context.stroke()
    }
    context.lineWidth = 2

    context.fillStyle = 'White'
    for (l in data.levelMap) {
        let tempLevel = data.levelMap[l]
        context.fillRect(tempLevel['Position'][0], tempLevel['Position'][1], 40, 40)
        context.strokeRect(tempLevel['Position'][0], tempLevel['Position'][1], 40, 40)
    }

    context.fillStyle = 'Blue'
    context.fillRect(data.levelMap[playerMap.place]['Position'][0], data.levelMap[playerMap.place]['Position'][1], 40, 40)
    context.fillStyle = 'Black'
    context.fillRect(playerMap.position.x, playerMap.position.y, 40, 40)
}