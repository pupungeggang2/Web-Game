let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false
let option = false

let varSave = {

}

let varSelect = {
    title : 0,
    option : 0,
    menu : 0,
}

let varKeyboardMap = {
}

let varKeyboard = {
}

let varGame = {

}

let varField = {
    field : {},
    controlling : -1,
    stepping : -1,
}

let varPlayer = {
    life : 60,
    lifeMax : 60,
    speed : 200,
    speedDash : 320,
}