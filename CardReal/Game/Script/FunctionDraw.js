function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawField() {
    for (let i = 0; i < varField.monster.length; i++) {
        drawMonster(varField.monster[i])
    }

    context.drawImage(img.player, Math.floor(varField.positionPlayer[0] - varField.camera[0] - 20), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 20))

    for (let i = 0; i < varField.projectile.length; i++) {
        context.drawImage(img.projectile[varField.projectile[i]['ID']], Math.floor(varField.projectile[i]['Position'][0] - varField.camera[0] - varField.projectile[i]['Size'][0] / 2), Math.floor(varField.projectile[i]['Position'][1] - varField.camera[1] - varField.projectile[i]['Size'][1] / 2))
    }
}

function drawMonster(monster) {
    context.drawImage(img.monster[monster['ID']], Math.floor(monster['Position'][0] - varField.camera[0] - 20), Math.floor(monster['Position'][1] - varField.camera[1] - 20))
    context.drawImage(img.monsterLifeBarEmpty, Math.floor(monster['Position'][0] - varField.camera[0] - 20), Math.floor(monster['Position'][1] - varField.camera[1] - 20 - 12))
    context.drawImage(img.monsterLifeBarFull, 0, 0, Math.floor(monster['Life'] / monster['LifeMax'] * 40), 10, Math.floor(monster['Position'][0] - varField.camera[0] - 20), Math.floor(monster['Position'][1] - varField.camera[1] - 20 - 12), Math.floor(monster['Life'] / monster['LifeMax'] * 40), 10)
}

function drawGameLower() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.lowerArea[0], UI.game.lowerArea[1], UI.game.lowerArea[2], UI.game.lowerArea[3])
    context.fillStyle = 'Black'

    context.strokeRect(UI.game.lower.ability[0], UI.game.lower.ability[1], UI.game.lower.ability[2], UI.game.lower.ability[3])
    context.strokeRect(UI.game.lower.dash[0], UI.game.lower.dash[1], UI.game.lower.dash[2], UI.game.lower.dash[3])

    context.fillText(`1`, UI.game.lower.abilityKey[0], UI.game.lower.abilityKey[1])
    context.fillText(`2`, UI.game.lower.dashKey[0], UI.game.lower.dashKey[1])

    if (varPlayer.abilityReloadTime > 0) {
        context.fillText(`${varPlayer.abilityReloadTime.toFixed(1)}`, UI.game.lower.abilityReloadText[0], UI.game.lower.abilityReloadText[1])
    }
    if (varPlayer.dashReloadTime > 0) {
        context.fillText(`${varPlayer.dashReloadTime.toFixed(1)}`, UI.game.lower.dashReloadText[0], UI.game.lower.dashReloadText[1])
    }

    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.game.lower.hand[i][0], UI.game.lower.hand[i][1], UI.game.lower.hand[i][2], UI.game.lower.hand[i][3])

        if (varPlayer.hand[i] != null) {
            drawCard(UI.game.lower.hand[i][0], UI.game.lower.hand[i][1], varPlayer.hand[i])
        } else {
            context.fillText(`${Math.ceil(varPlayer.handReloadTime[i])}`, UI.game.lower.handReloadText[i][0], UI.game.lower.handReloadText[i][1])
        }

        context.fillText(`${handKeyMap[i]}`, UI.game.lower.handKey[i][0], UI.game.lower.handKey[i][1])
    }

    context.drawImage(img.icon.power, UI.game.lower.iconPower[0], UI.game.lower.iconPower[1])
    context.fillText(`${varPlayer.power}`, UI.game.lower.textPower[0], UI.game.lower.textPower[1])
    context.drawImage(img.icon.skill, UI.game.lower.iconSkill[0], UI.game.lower.iconSkill[1])
    context.fillText(`${varPlayer.power}`, UI.game.lower.textSkill[0], UI.game.lower.textSkill[1])

    context.drawImage(img.icon.life, UI.game.lower.iconLife[0], UI.game.lower.iconLife[1])
    context.fillText(`${varPlayer.life}/${varPlayer.lifeMax}`, UI.game.lower.textLife[0], UI.game.lower.textLife[1])
    context.fillStyle = 'Green'
    context.fillRect(UI.game.lower.barLife[0], UI.game.lower.barLife[1], Math.floor(UI.game.lower.barLife[2] * varPlayer.life / varPlayer.lifeMax), UI.game.lower.barLife[3])
    context.fillStyle = 'Black'

    context.strokeRect(UI.game.lower.barLife[0], UI.game.lower.barLife[1], UI.game.lower.barLife[2], UI.game.lower.barLife[3])
    context.drawImage(img.icon.energy, UI.game.lower.iconEnergy[0], UI.game.lower.iconEnergy[1])
    context.fillStyle = 'Orange'
    context.fillRect(UI.game.lower.barEnergy[0], UI.game.lower.barEnergy[1], Math.floor(UI.game.lower.barEnergy[2] * varPlayer.energy / varPlayer.energyMax), UI.game.lower.barEnergy[3])
    context.fillStyle = 'Black'

    context.fillText(`${varPlayer.energy.toFixed(1)}/${varPlayer.energyMax}`, UI.game.lower.textEnergy[0], UI.game.lower.textEnergy[1])
    context.strokeRect(UI.game.lower.barEnergy[0], UI.game.lower.barEnergy[1], UI.game.lower.barEnergy[2], UI.game.lower.barEnergy[3])
}

function drawGameStart() {

}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Paused', UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText('Resume [R]', UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonOption[0], UI.menu.buttonOption[1], UI.menu.buttonOption[2], UI.menu.buttonOption[3])
    context.fillText('Option [O]', UI.menu.textOption[0], UI.menu.textOption[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText('Exit [E]', UI.menu.textExit[0], UI.menu.textExit[1])
}

function drawCard(x, y, card) {
    context.font = '16px neodgm'
    context.fillText(card['Energy'], x + 4, y + 4)
    context.font = '32px neodgm'
}