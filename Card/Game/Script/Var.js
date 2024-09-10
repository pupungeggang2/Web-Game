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

let varKeyboard = {
    left : false,
    right : false,
    up : false,
    down : false
}

let varPlayer = {

}

let varField = {
    place : false,
    camera : [0, 0],
    positionPlayer : [0, 0],
    field : {}
}

let varAdventure = {

}

let varGame = {
    turn : 0,
    turnWho : 0,
    deckCard : [],
    deckCrystal : [],
    handCard : [],
    handCrystal : [],
}