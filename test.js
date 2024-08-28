function findElement(array, element) {
  return array.includes(element);
}

const fruits = ["apple", "banana", "orange"];
console.log(findElement(fruits, "banana")); // Output: true
console.log(findElement(fruits, "grape")); // Output: false


// const data = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 }
// ];

// function filterByAge(array, age) {
//   return array.filter(item => item.age > age);
// }

// console.log(filterByAge(data, 25)); // Output: [{ name: 'Bob', age: 30 }]


function countCharacterOccurrences(str) {
  return str.split('').reduce((count, char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
    return count;
  }, {});
}

// Test
console.log(countCharacterOccurrences("hello")); // Output: {h: 1, e: 1, l: 2, o: 1}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Test
delay(1000).then(() => console.log("Executed after 1 second"));

function sum() {
  return [...arguments].reduce((total, num) => total + num, 0);
}

// Test
console.log(sum(1, 2, 3, 4)); // Output: 10

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Test
console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Test
console.log(areObjectsEqual({a: 1, b: 2}, {a: 1, b: 2})); // Output: true
console.log(areObjectsEqual({a: 1, b: 2}, {a: 1, b: 3})); // Output: false

// function flattenArray(arr) {
//   return arr.reduce((flat, toFlatten) => {
//     return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
//   }, []);
// }

// // Test
// console.log(flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Test
console.log(areObjectsEqual({a: 1, b: 2}, {a: 1, b: 2})); // Output: true
console.log(areObjectsEqual({a: 1, b: 2}, {a: 1, b: 3})); // Output: false


function countCharacterOccurrences(str) {
  return str.split('').reduce((count, char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
    return count;
  }, {});
}

// Test
console.log(countCharacterOccurrences("hello")); // Output: {h: 1, e: 1, l: 2, o: 1}

function sum() {
  return [...arguments].reduce((total, num) => total + num, 0);
}

// Test
console.log(sum(1, 2, 3, 4)); // Output: 10


const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

function filterByAge(array, age) {
  return array.filter(item => item.age > age);
}

console.log(filterByAge(data, 25)); // Output: [{ name: 'Bob', age: 30 }]


function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello')); // Output: 2
console.log(countVowels('programming')); // Output: 3

// function mergeSortedArrays(arr1, arr2) {
//   let merged = [], i = 0, j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       merged.push(arr1[i]);
//       i++;
//     } else {
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]


// const obj = {
//   method: function () {
//     console.log(this);
//   },
// };

// const method = obj.method;
// method();
