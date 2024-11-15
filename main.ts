function findSuit (cardNumber: number) {
    if (Math.idiv(cardNumber, 13) == 0) {
        return "Spades"
    } else if (Math.idiv(cardNumber, 13) == 1) {
        return "Diamonds"
    } else if (Math.idiv(cardNumber, 13) == 2) {
        return "Clubs"
    } else if (Math.idiv(cardNumber, 13) == 3) {
        return "Hearts"
    } else {
        return "Joker"
    }
}
function findPip (cardNumber: number) {
    if (cardNumber % 13 == 0) {
        return "Ace"
    } else if (cardNumber % 13 == 10) {
        return "Jack"
    } else if (cardNumber % 13 == 11) {
        return "Queen"
    } else if (cardNumber % 13 == 12) {
        return "King"
    } else {
        return cardNumber % 13
    }
}
let cardNumber = game.askForNumber("0-51")
game.splash("" + cardNumber + " = " + findPip(cardNumber) + " of " + findSuit(cardNumber))
