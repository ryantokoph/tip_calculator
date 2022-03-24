let cardSuit = ['Spades','Diamonds','Clubs','Hearts']
let cardNumbers = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4','3','2']//no joker as of now
function getCard () {
    let randomNumCard = Math.random()*12; //generates random number betweeen 0 and 13
    let randomSuit = Math.random()*3
    return cardNumbers[randomNumCard.toFixed(0)]+" of "+ cardSuit[randomSuit.toFixed(0)]
}
console.log(getCard());

//Deck, so you shouldn't be able to repeat numbers to 
//make loop to go through both arrays and put into a deck array
let deckOfCards = [];

for (let i = 0;i < cardSuit.length;i++){
    for(let j = 0;j<cardNumbers.length;j++){
        deckOfCards.push(cardNumbers[j]+" of "+ cardSuit[i])
    }
}
console.log(deckOfCards);
console.log(deckOfCards.length)
//deckOfCards.sort();
//console.log(deckOfCards)