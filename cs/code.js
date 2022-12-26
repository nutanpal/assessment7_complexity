//1// In array 2 values addToZero?: loop through array, compare the value to all other values,if sum is 0, return true end function or outside loop(after all values checked) return False.
function addToZero(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}
// call the function and pass an array , console to check correct output
// console.log(addToZero([5,8,-5,7,3])) //t
// console.log(addToZero([5,8,0,7,3])) // f

// time complexity = 0 (n^2)  // as 2 loops , quadratic.
// space complexity = 0(1)   // as 2 iterators i &j no other var made , if we ignore array size not big space needed is constant 0(1).
/* However, if we consider minimum space taken up in memmory is the size of array and that can be really big then its directly proportinal to array size . space complexity = 0(n) for linear function.
 */

//Q2. Unique string
function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

//  console.log(hasUniqueChars('Monday')) //t

//  console.log(hasUniqueChars('Moonday')) //f

//  time complexity = O(n^2)  // as 2 loops , quadratic.
// space complexity = O(1)  // if consider memory allocation for big array size , complexity O(n)

//Q3 Pangram : is it a sentence with all 26 alphabets present?
/* make an object of all 26 letters having count at 0.
loop through the sentence and for each letter found, increment its letter count in object.
if any letter still has count 0 - return false, not pangram, else true. */
// function pangram (str){
// const alphaCountObj = {a:0,b:0, c:0, d:0, e:0, f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}

// for (let i = 0; i< str.length; i++){
//     let alpha = str [i]
//     alpha = alpha.toLowerCase()
//     alphaCountObj[alpha]++
// }

// for (let count in alphaCountObj){
//     if(alphaCountObj[count] === 0){
//         return false
//     }

// }
//  return true
// }
// console.log(pangram ("The quick brown fox jumps over the lazy dog!")) //t
// console.log(pangram("I like cats, but not mice"))//f

//  time complexity = O(n)  //
// space complexity = 0(1)

// this should be O(n^2) because we loop through the alphabet and nested inside that we run indexOf() method  which has a time complexity of O(n). If they were not nested then it would be O(n)

// space quadratic

/// Q4 : longest word in array
function findLongestWord(wordList) {
  let longest = 0;
  for (let i = 0; i < wordList.length; i++)
    if (wordList[i].length > longest) {
      longest = wordList[i].length;
    }
  return longest;
}

console.log(findLongestWord(["hi", "hello"])); // -> 5

//  time complexity = O(n)  // we have no of loops as many as words ie linear
// space complexity = 0(1) // constant
