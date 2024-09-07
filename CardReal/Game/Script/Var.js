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

let varSave = {
    
}

let varPlayer = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,

    ability : [],
    hand : [],
    deck : [],
}

let varField = {
    camera : [0, 0],
    positionPlayer : [0, 0],
    destination : [0, 0],
    monster : [],
    projectile : [],
}

let varGame = {

}