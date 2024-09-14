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

let varOption = {
    instantSkill : true,
}

let varKeyboard = {
    left : false,
    right : false,
    up : false,
    down : false,
}

let varSave = {
    
}

let varSelect = {
    gameStart : -1,
}

let varPlayer = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,
    energyGen : 1,
    power : 10,
    skill : 10,
    speed : 200,

    ability : {'Energy' : 0, 'Effect' : [['Shoot', ['Follow', 1, 2.5]]], 'Reload' : 0.6},
    abilityReloadTime : 0,
    abilityAuto : true,
    dashReloadTime : 0,
    hand : [null, null, null, null, null, null],
    handReloadTime : [0, 0, 0, 0, 0, 0],
    deck : [],
}

let varField = {
    camera : [0, 0],
    positionPlayer : [0, 0],
    facingPlayer : ['None', 'Down'],
    directionPlayer : ['None', 'None'],
    destination : [0, 0],
    monster : [],
    projectile : [],
}

let varGame = {
    selectItem : [],
    time : 0,
}