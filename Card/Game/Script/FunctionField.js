function loadField(place) {
    varField.field = JSON.parse(JSON.stringify(place))
}

function movePlayer() {
    let tempCamera = [varField.positionPlayer[0] - 640, varField.positionPlayer[1] - 360]

    varField.camera[0] = tempCamera[0]
    varField.camera[1] = tempCamera[1]
}