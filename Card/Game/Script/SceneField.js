function loopField() {
    displayField()

    if (menu === false) {
        if (state === '') {
            movePlayer()
        }
    }
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.field.buttonMenu[0], UI.field.buttonMenu[1], UI.field.buttonMenu[2], UI.field.buttonMenu[3])

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpField(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {

            }
        }
    }
}

function keyDownField(key) {

}

function keyUpField(key) {

}