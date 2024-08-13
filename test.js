function findElement(array, element) {
  return array.includes(element);
}

const fruits = ["apple", "banana", "orange"];
console.log(findElement(fruits, "banana")); // Output: true
console.log(findElement(fruits, "grape")); // Output: false


const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

function filterByAge(array, age) {
  return array.filter(item => item.age > age);
}

console.log(filterByAge(data, 25)); // Output: [{ name: 'Bob', age: 30 }]


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
