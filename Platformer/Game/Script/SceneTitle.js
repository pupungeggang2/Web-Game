function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()
    context.fillText(`Platformer`, UI.title.textTitle[0], UI.title.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'Enter') {
                scene = 'LevelSelect'
                state = ''
            }
        }
    }
}

function keyUpTitle(key) {

}