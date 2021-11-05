// type.js;

let s = "The quick brown fox jumps over the lazy dogs.";
let g = s.split("").reduce((a, e, i) => a + e + (i % 5 === 4 ? "$" : ""), "");
console.log(g);

const werdz = ["true", "due"];

let h = werdz.reduce((word, new1, f) => word + (new1 + "ly"), " ");
console.log(h);
// const lyadd = werdz.reduce( function(word, newd) {

// word.push(newd + "ly");}
// return word;
// },
// );
// console.log (lyadd);

const a = 0;

console.log(a);

const numbers1 = [1, 2, 3];

//word[new] + "ly"

const sumOneLiner = numbers1.reduce((total, current) => total + current, 0);

const sum = numbers1.reduce((total, current) => {
  return total + current;
}, 0);
console.log(sum);
console.log(sumOneLiner);

const numbers = [2, 3, 4];
const product = numbers.reduce((total, current) => {
  return total * current;
}, 2);

console.log(product);

const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

const petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    // if the pet doesn't yet exist as a property of the accumulator object,
    //   add it as a property and set its count to 1
    obj[pet] = 1;
  } else {
    // pet exists, so increment its count
    obj[pet]++;
  }

  return obj; // return the modified object to be used as accumulator in the next iteration
}, {}); // initialize the accumulator as an empty object

console.log(petCounts);
