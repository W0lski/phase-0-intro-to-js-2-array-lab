// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
  
function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}
  
function removeLastCat() {
    // Using slice() to create a new array without the last cat
    return cats.slice(0, -1);
}

function removeFirstCat() {
    // Using shift() to remove the first cat and return a new array
    // Create a copy of the original array
    // Remove the first cat
    return cats.slice(1);
}


