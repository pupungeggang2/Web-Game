let img = {
    icon : {
        newFile : new Image(),
        saveFile : new Image(),
        loadFile : new Image()
    }
}

function imageLoad() {
    img.icon.newFile.src = 'Image/Icon/NewFile.png'
    img.icon.saveFile.src = 'Image/Icon/SaveFile.png'
    img.icon.loadFile.src = 'Image/Icon/LoadFile.png'
}