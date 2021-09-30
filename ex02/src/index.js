function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
  }
  
  function* insideGenerator1() {
    let x;
    for ( let i = 1; i < 6; i++) {
      x = yield i;
    }
    return x;
  }
 // Only change code below this line 
  function* insideGenerator2() {
    let x;
    for ( let i = 10; i < 16; i++) {
      x = yield i;
    }
    return x;
  }
  
  function* insideGenerator3() {
    let x;
    for ( let i = 6; i < 10; i++) {
      x = yield i;
    }
    return x;
  }
  
  var iterator = myGenerator();
  var fifteenArray = [];
  for ( let i = 0; i < 16; i++) {
    let value = iterator.next().value;
      fifteenArray.push(value);
  }
  // console.log(iterator.next().value);
  console.log(fifteenArray.join("#, ") + "undefined!");
  console.log(fifteenArray)
  // Only change code above this line
  module.exports = { fifteenArray, myGenerator };
