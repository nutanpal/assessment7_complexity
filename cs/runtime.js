const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);
const doubleExtralargeArray = getSizedArray(200000);

// How long does it take to double every number in a given
// array?

// Try it with first function .push
perf.start(); // Starts timer
//doublerAppend(tinyArray);
//doublerAppend(smallArray)
//doublerAppend(mediumArray)
//doublerAppend(largeArray)
//doublerAppend(extraLargeArray)
doublerAppend(doubleExtralargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function .unshift
perf.start();

//doublerInsert(tinyArray);
//doublerInsert(smallArray);
//doublerInsert(mediumArray);
//doublerInsert(largeArray);
//doublerInsert(extraLargeArray);
doublerInsert(doubleExtralargeArray);
let resultsInsert = perf.stop();

//console.log('Results for the tinyArray');
//console.log('Results for the smallArray');
//console.log('Results for the mediumargeArray');
//console.log('Results for the LargeArray');
//console.log('Results for the extraLargeArray');
console.log("Results for the DoubleExtraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
