class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class PlayerMap {
    constructor() {
        this.position = new Vector(120, 360)
        this.place = 'Start'
        this.moving = false
        this.speed = 200
        this.leftNode = []
    }

    movePlayer(key) {
        for (let c in data.levelMap[this.place]['Connection']) {
            let tempConnection = data.levelMap[this.place]['Connection'][c]
            if (this.moving === false) {
                if (key === tempConnection[0]) {
                    this.leftNode = []
                    for (let i = 0; i < data.levelPath[this.place][key].length; i++) {
                        this.leftNode.push(new Vector(data.levelPath[this.place][key][i][0], data.levelPath[this.place][key][i][1]))
                    }
                    this.place = tempConnection[1]
                    this.moving = true
                }
            }
        }
    }

    updatePlayer() {
        if (this.moving === true) {
            if (this.leftNode.length > 0) {
                let diff = VectorOP.sub(this.leftNode[0], this.position)
                let diffNormalized = VectorOP.normalize(diff)
                this.position.x += diffNormalized.x * this.speed * delta / 1000
                this.position.y += diffNormalized.y * this.speed * delta / 1000

                if (VectorOP.size(VectorOP.sub(this.leftNode[0], this.position)) < 10) {
                    this.position.x = this.leftNode[0].x
                    this.position.y = this.leftNode[0].y
                    this.leftNode.shift()
                }
            } else {
                this.moving = false
            }
        }
    }
}