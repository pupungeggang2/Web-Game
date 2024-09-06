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
    'Left' : 'ArrowLeft',
    'Right' : 'ArrowRight',
    'Jump' : 'ArrowUp',
    'Down' : 'ArrowDown',
    'Dash' : 'z',
    'Control' : 'x',
    'Control1' : 'c',
    'Control2' : 'v'
}

let varKeyboard = {
    'Left' : false,
    'Right' : false,
    'Jump' : false,
    'Down' : false,
    'Dash' : false,
    'Control' : false,
    'Control1' : false,
    'Control2' : false
}

let varGame = {

}

let varField = {
    positionPlayer : [0, 0],
    camera : [0, 0],
    place : 'HomeTown',
    field : {},
    controlling : -1,
    stepping : -1,
    steppingMove : [0, 0],
}

let varPlayer = {
    life : 60,
    lifeMax : 60,
    speed : 200,
    speedDash : 320,

    jumpNum : 1,
    
}