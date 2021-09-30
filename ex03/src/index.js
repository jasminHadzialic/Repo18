// Only change code below this line
function* myGenerator(num1, num2, num3) {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* [num1, num2, num3];
}
var iterator = myGenerator(6, 7, 8);
var generatorArray = [];

for ( let i = 0; i < 13; i++) {
    generatorArray.push(iterator.next().value);
}

console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator};