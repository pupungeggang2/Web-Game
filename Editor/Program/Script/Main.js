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
        context = cavnas.getContext('2d')

        window.addEventListener('mousedown', mouseDown, false)
        window.addEventListener('mousemove', mouseMove, false)
        window.addEventListener('mouseup', mouseUp, false)
        window.addEventListener('keyDown', keyDown, false)
        window.addEventListener('keyup', keyUp, false)

        programFrameCurrent = Date.now()
        programFramePrevious = Date.now() - 16
        programInstance = requestAnimationFrame(loop)
    })
}

function loop() {
    programFramePrevious = programFrameCurrent
    programFrameCurrent = Date.now()
    delta = programFrameCurrent - programFramePrevious

    if (scene === 'Edit') {
        loopEdit()
    } else if (scene === 'Test') {
        loopTest()
    }
    
    programInstance = requestAnimationFrame(loop)
}

function mouseDown(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    if (scene === 'Edit') {
        mouseDownEdit(x, y, button)
    } else if (scene === 'Test') {
        mouseDownTest(x, y, button)
    }
}

function mouseMove(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top

    varMouse[0] = x
    varMouse[1] = y
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    if (scene === 'Edit') {
        mouseUpEdit(x, y, button)
    } else if (scene === 'Test') {
        mouseUpTest(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Edit') {
        keyDownEdit(key)
    } else if (scene === 'Test') {
        keyDownTest(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Edit') {
        keyUpEdit(key)
    } else if (scene === 'Test') {
        keyUpTest(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(programInstance)
    }
}

function rightClick() {
    return false
}