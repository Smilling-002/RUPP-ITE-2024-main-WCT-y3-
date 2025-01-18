function createCounter() {
    let count = 0; // This variable is part of the lexical scope of createCounter.

    return function () {
        // This inner function forms a closure.

        // Replace 'Ouern soknai' with your full name
        console.log('Student Name: Ouern soknai');
        
        count++; // It remembers and accesses the count variable from its parent's scope.
        return count;
    };
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
