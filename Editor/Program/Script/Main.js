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
    
    programInstance = requestAnimationFrame(loop)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(programInstance)
    }
}

function rightClick() {
    return false
}