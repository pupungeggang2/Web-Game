function loopReady() {
    displayReady()
}

function displayReady() {
    drawSceneInit()

    context.strokeRect(UI.ready.buttonCollection[0], UI.ready.buttonCollection[1], UI.ready.buttonCollection[2], UI.ready.buttonCollection[3])
    context.strokeRect(UI.ready.buttonProgres[0], UI.ready.buttonProgres[1], UI.ready.buttonProgres[2], UI.ready.buttonProgres[3])
    context.strokeRect(UI.ready.buttonSetting[0], UI.ready.buttonSetting[1], UI.ready.buttonSetting[2], UI.ready.buttonSetting[3])
    context.strokeRect(UI.ready.buttonStart[0], UI.ready.buttonStart[1], UI.ready.buttonStart[2], UI.ready.buttonStart[3])
}

function mouseUpReady(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.ready.buttonStart)) {
                    scene = 'Game'
                    state = 'Start'
                }
            }
        }
    }
}

function keyDownReady(key) {

}

function keyUpReady(key) {

}