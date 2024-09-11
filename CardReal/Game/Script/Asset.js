let img = {
    icon : {
        power : new Image(),
        skill : new Image(),
        life : new Image(),
        energy : new Image()
    },

    projectile : {
        1 : new Image(),
    }
}

function imageLoad() {
    img.icon.power.src = 'Image/IconPower.png'
    img.icon.skill.src = 'Image/IconSkill.png'
    img.icon.life.src = 'Image/IconLife.png'
    img.icon.energy.src = 'Image/IconEnergy.png'

    img.projectile[1].src = 'Image/Projectile/Projectile1.png'
}