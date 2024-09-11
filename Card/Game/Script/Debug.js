function debugDeckGenerate() {
    varGame.deckCard = []
    varGame.deckCrystal = []
    varGame.handCard = []
    varGame.handCrystal = []

    let tempDeck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]

    for (let i = 0; i < tempDeck.length; i++) {
        varGame.deckCard.push(JSON.parse(JSON.stringify(dataCard[tempDeck[i]])))
    }

    varGame.deckCard = shuffle(varGame.deckCard)
}