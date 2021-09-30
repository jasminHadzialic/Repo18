let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let keys = [...rockStar.keys()];
let newRock = new Map();
for (key of keys) {
    if (key[0] > 'a') {
        newRock.set(key, rockStar.get(key));
    }
}
console.log(rockStar);
console.log(newRock);
module.exports = { rockStar, newRock };