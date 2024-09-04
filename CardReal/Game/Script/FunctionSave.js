function saveInit() {
    let tempSave = localStorage.getItem(fileName)

    if (tempSave === null) {
        localStorage.setItem(fileName, JSON.stringify(emptySave))
    }

    varSave = JSON.parse(localStorage.getItem(fileName))
}

function saveData() {
    localStorage.setItem(fileName, JSON.stringify(varSave))
}

function loadData() {
    varSave = JSON.parse(localStorage.getItem(fileName))
}

function eraseData() {
    localStorage.setItem(fileName, JSON.stringify(emptySave))
    varSave = JSON.parse(localStorage.getItem(fileName))
}