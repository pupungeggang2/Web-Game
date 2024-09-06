window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

const promiseLoad = new Promise((resolve, reject) => {
    try {
        imageLoad()
        resolve('Success')
    } catch {
        reject('Fail')
    }
})

function main() {
    promiseLoad.then(() => {
        canvas = document.getElementById('Screen')
        context = canvas.getContext('2d')

        window.addEventListener('keydown', keyDown, false)
        window.addEventListener('keyup', keyUp, false)

        saveInit()

        gameFrameCurrent = Date.now()
        gameFramePrevious = Date.now() - 16
        gameInstance = requestAnimationFrame(loop)
    })
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameInstance = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown' || key === ' ') {
        event.preventDefault()
    }

    for (k in varKeyboardMap) {
        if (key === varKeyboardMap[k]) {
            varKeyboard[k] = true
        }
    }

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown' || key === ' ') {
        event.preventDefault()
    }

    for (k in varKeyboardMap) {
        if (key === varKeyboardMap[k]) {
            varKeyboard[k] = false
        }
    }

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}