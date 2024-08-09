function findElement(array, element) {
  return array.includes(element);
}

const fruits = ["apple", "banana", "orange"];
console.log(findElement(fruits, "banana")); // Output: true
console.log(findElement(fruits, "grape")); // Output: false
