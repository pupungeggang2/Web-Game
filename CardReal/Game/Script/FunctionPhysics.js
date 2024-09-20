function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

function pointInsideCircle(x, y, cx, cy, r) {
    let dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)

    return dist < r
}

function vectorNormalize(vec) {
    let norm = Math.sqrt(vec[0] ** 2 + vec[1] ** 2)
    return [vec[0] / norm, vec[1] / norm]
}

function twoRectCollide(a, b) {
    let collision = ['N', 'N', 0, 0]
    
    let al = a[0]
    let ar = a[0] + a[2]
    let au = a[1]
    let ad = a[1] + a[3]
    let bl = b[0]
    let br = b[0] + b[2]
    let bu = b[1]
    let bd = b[1] + b[3]

    if (bl < al && al < br) {
        if (!(bd <= au || bu >= ad)) {
            collision[0] = 'R'
            collision[2] = br - al
        }
    }
    
    if (bl < ar && ar < br) {
        if (!(bd <= au || bu >= ad)) {
            collision[0] = 'L'
            collision[2] = ar - bl
        }
    }

    if (bu < au && au < bd) {
        if (!(br <= al || bl >= ar)) {
            collision[1] = 'D'
            collision[3] = bd - au
        }
    }
    
    if (bu < ad && ad < bd) {
        if (!(br <= al || bl >= ar)) {
            collision[1] = 'U'
            collision[3] = ad - bu
        }
    }

    return collision
}