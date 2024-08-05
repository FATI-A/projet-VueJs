function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: 'olleh'

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4,4, 5])); // Output: [1, 2, 3, 4, 5]

const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

const greet = person.greet;
greet();
