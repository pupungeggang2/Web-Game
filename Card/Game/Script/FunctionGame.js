function gameInit() {
    varGame.startHandChange = [false, false, false]
}

function shuffle(arr) {
    let arrTemp = JSON.parse(JSON.stringify(arr))
    let arrResult = []

    while (arrTemp.length > 0) {
        let index = Math.floor(Math.random() * arrTemp.length)
        arrResult.push(arrTemp.splice(index, 1)[0])
    }

    return arrResult
}