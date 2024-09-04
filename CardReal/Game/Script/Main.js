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

        window.addEventListener('mouseup', mouseUp, false)
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
    delta = gameFramePrevious - gameFrameCurrent

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Ready') {
        loopReady()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Ready') {
        mouseUpReady(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Ready') {
        keyDownReady(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Ready') {
        keyUpReady(key)
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