let img = {
    icon : {
        power : new Image(),
        skill : new Image(),
        life : new Image(),
        energy : new Image()
    },

    projectile : {
        1 : new Image(),
    },

    monster : {
        1 : new Image(),
    },

    monsterLifeBarEmpty : new Image(),
    monsterLifeBarFull : new Image(),

    player : new Image(),
}

function imageLoad() {
    img.icon.power.src = 'Image/IconPower.png'
    img.icon.skill.src = 'Image/IconSkill.png'
    img.icon.life.src = 'Image/IconLife.png'
    img.icon.energy.src = 'Image/IconEnergy.png'

    img.projectile[1].src = 'Image/Projectile/Projectile1.png'

    img.monster[1].src = 'Image/Monster/Monster1.png'

    img.monsterLifeBarEmpty.src = 'Image/MonsterLifeBarEmpty.png'
    img.monsterLifeBarFull.src = 'Image/MonsterLifeBarFull.png'

    img.player.src = 'Image/Player.png'
}