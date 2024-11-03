function gameInit() {
    playerMap = new PlayerMap()
}

function enterLevel(place) {
    if (data.levelMap[place]['Level'] >= 0) {
        scene = 'Game'
        state = ''
    }
}