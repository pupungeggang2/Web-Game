function loopLevelSelect() {
    if (menu === false) {
        if (state === '') {
            playerMap.updatePlayer()
        }
    }
    displayLevelSelect()
}

function displayLevelSelect() {
    drawSceneInit()
    drawLevel()
}

function keyDownLevelSelect(key) {
    if (menu === false) {
        if (state === '') {
            playerMap.movePlayer(key)

            if (key === 'Enter') {
                enterLevel(playerMap.place)
            }
        }
    }
}

function keyUpLevelSelect(key) {

}