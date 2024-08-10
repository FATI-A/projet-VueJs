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
