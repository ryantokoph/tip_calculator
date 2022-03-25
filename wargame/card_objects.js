const cardPrototype = {
    getImage() {
        return this.imageUrl;
    }
}

function Card(imageUrl,value) {
  this.imageUrl = imageUrl;
  this.value = value;
}
Card.prototype = cardPrototype;
Card.prototype.constructor = Card;

const ace_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/1/19/English_pattern_ace_of_spades.svg",14);
const ace_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/5/5f/English_pattern_ace_of_clubs.svg",14);
const ace_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/d/d4/English_pattern_ace_of_hearts.svg",14);
const ace_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/0/00/English_pattern_ace_of_diamonds.svg",14);

const two_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/0/0b/English_pattern_2_of_spades.svg",2);
const two_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/3/30/English_pattern_2_of_clubs.svg",2);
const two_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/2/26/English_pattern_2_of_hearts.svg",2);
const two_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/9/99/English_pattern_2_of_diamonds.svg",2);

const three_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/a/a5/English_pattern_3_of_spades.svg",3);
const three_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_3_of_clubs.svg",3);
const three_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/0/0f/English_pattern_3_of_hearts.svg",3);
const three_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/2/2c/English_pattern_3_of_diamonds.svg",3);

const four_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/3/34/English_pattern_4_of_spades.svg",4);
const four_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/c/c0/English_pattern_4_of_clubs.svg",4);
const four_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_4_of_hearts.svg",4);
const four_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_4_of_diamonds.svg",4);

const five_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/9/9c/English_pattern_5_of_spades.svg",5);
const five_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/7/74/English_pattern_5_of_clubs.svg",5);
const five_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/c/c6/English_pattern_5_of_hearts.svg",5);
const five_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/6/6c/English_pattern_5_of_diamonds.svg",5);

const six_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/a/ac/English_pattern_6_of_spades.svg",6);
const six_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/0/02/English_pattern_6_of_clubs.svg",6);
const six_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_6_of_hearts.svg",6);
const six_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_6_of_diamonds.svg",6);

const seven_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/d/d1/English_pattern_7_of_spades.svg",7);
const seven_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/6/60/English_pattern_7_of_clubs.svg",7);
const seven_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/c/cb/English_pattern_7_of_hearts.svg",7);
const seven_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/5/5d/English_pattern_7_of_diamonds.svg",7);

const eight_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/4/4d/English_pattern_8_of_spades.svg",8);
const eight_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_8_of_clubs.svg",8);
const eight_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/3/3c/English_pattern_8_of_hearts.svg",8);
const eight_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/1/18/English_pattern_8_of_diamonds.svg",8);

const nine_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_9_of_clubs.svg",9);
const nine_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_9_of_spades.svg",9);
const nine_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/2/22/English_pattern_9_of_hearts.svg",9);
const nine_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/f/f5/English_pattern_9_of_diamonds.svg",9);

const ten_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_spades.svg",10);
const ten_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/4/48/English_pattern_10_of_clubs.svg",10);
const ten_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_10_of_hearts.svg",10);
const ten_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_diamonds.svg",10);

const jack_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_jack_of_spades.svg",11);
const jack_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/8/80/English_pattern_jack_of_clubs.svg",11);
const jack_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/5/56/English_pattern_jack_of_hearts.svg",11);
const jack_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/1/16/English_pattern_jack_of_diamonds.svg",11);

const queen_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/c/ca/English_pattern_queen_of_spades.svg",12);
const queen_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/b/b3/English_pattern_queen_of_clubs.svg",12);
const queen_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/9/9d/English_pattern_queen_of_hearts.svg",12);
const queen_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_queen_of_diamonds.svg",12);

const king_spades = new Card("https://upload.wikimedia.org/wikipedia/commons/f/f1/English_pattern_king_of_spades.svg",13);
const king_clubs = new Card("https://upload.wikimedia.org/wikipedia/commons/3/3e/English_pattern_king_of_clubs.svg",13);
const king_hearts = new Card("https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_king_of_hearts.svg",13);
const king_diamonds = new Card("https://upload.wikimedia.org/wikipedia/commons/1/1c/English_pattern_king_of_diamonds.svg",13);