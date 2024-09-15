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

let varSelect = {
    adventureStart : -1,
}

let varPlayer = {
    speed : 320,
}

let varField = {
    place : false,
    camera : [0, 0],
    positionPlayer : [0, 0],
    destinationPlace : '',
    destinationPosition : [0, 0],
    field : {}
}

let varAdventure = {
    adventure : false
}

let varGame = {
    turn : 0,
    turnWho : 0,
    startHandChange : [false, false, false],
    deckCard : [],
    deckCrystal : [],
    handCard : [],
    handCrystal : [],
}