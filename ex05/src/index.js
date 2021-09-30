// Only change code below this line
let shopingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
]);

let arrKey = [];
let arrValue = [];

for (let item of shopingList) {
arrKey.push(item[0]);
console.log("groceries: ", item[0]);
}
for (let item of shopingList) {
    arrValue.push(item[1]);
    console.log("amount: ", item[1]);
    }
for (let item of shopingList) {
    
    console.log(item);
        }
// Only change code above this line
module.exports = { shopingList, arrKey, arrValue };